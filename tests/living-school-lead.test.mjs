import assert from 'node:assert/strict';
import { test } from 'node:test';
import { submitLead, validateLead } from '../src/lib/lead-request.ts';
const values = { name: ' Тест макета ', phone: '+7 (000) 000-00-00', email: '', format: 'mini' };
test('accepts an optional email and validates contact fields before transport', () => {
  assert.deepEqual(validateLead(values), {});
  assert.deepEqual(
    Object.keys(validateLead({ ...values, name: ' ', phone: '123', email: 'wrong' })),
    ['name', 'phone', 'email']
  );
  assert.equal(
    validateLead({ ...values, phone: '+905551234567', email: 'test@example.com' }).phone,
    undefined
  );
  assert.ok(validateLead({ ...values, phone: '+1234567890123456' }).phone);
});
test('uses the unchanged legacy contract for all formats and preserves selected tariff in source', async () => {
  for (const [format, label] of [
    ['help', 'Бесплатная консультация'],
    ['mini', 'Мини-группа'],
    ['individual', 'Индивидуальные занятия'],
  ]) {
    let captured;
    await submitLead({ ...values, format }, 'Комфорт', async (url, init) => {
      captured = { url, init };
      return Response.json({ success: true });
    });
    assert.equal(captured.url, '/api/airtable');
    assert.equal(captured.init.method, 'POST');
    assert.deepEqual(JSON.parse(captured.init.body), {
      name: 'Тест макета',
      phone: values.phone,
      email: '',
      format: label,
      source: 'living-school · Комфорт',
    });
  }
});
test('does not report success when the legacy API fails, rejects, or returns malformed data', async () => {
  for (const transport of [
    async () => Response.json({ success: false }, { status: 400 }),
    async () => Response.json({ success: false }),
    async () => new Response('not JSON'),
    async () => {
      throw new Error('offline');
    },
  ]) {
    await assert.rejects(submitLead(values, undefined, transport));
  }
});

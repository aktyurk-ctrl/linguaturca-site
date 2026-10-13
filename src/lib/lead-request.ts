import type { FormatId } from '@/data/living-school';
export interface LeadValues {
  name: string;
  phone: string;
  email: string;
  format: FormatId;
}
export type LeadErrors = Partial<Record<'name' | 'phone' | 'email', string>>;
export function validateLead(values: LeadValues): LeadErrors {
  const errors: LeadErrors = {};
  if (!values.name.trim()) errors.name = 'Введите имя.';
  const digits = values.phone.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15 || !/^\+?[\d\s()\-]+$/.test(values.phone.trim()))
    errors.phone = 'Проверьте номер: от 7 до 15 цифр с кодом страны.';
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Проверьте адрес электронной почты.';
  return errors;
}
const legacyFormats: Record<FormatId, string> = {
  help: 'Бесплатная консультация',
  mini: 'Мини-группа',
  individual: 'Индивидуальные занятия',
};
/** Existing API contract only. The selected plan uses the existing free-text source field.
 * TODO(CRM migration): replace this transport separately; do not extend Airtable's schema here.
 * The injectable transport lets tests run without submitting any real leads.
 */
export async function submitLead(
  values: LeadValues,
  plan?: string,
  transport: typeof fetch = fetch
) {
  const response = await transport('/api/airtable', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      format: legacyFormats[values.format],
      source: plan ? `living-school · ${plan}` : 'living-school',
    }),
  });
  const result = await response.json();
  if (!response.ok || !result.success)
    throw new Error('Не удалось отправить заявку. Попробуйте ещё раз.');
}

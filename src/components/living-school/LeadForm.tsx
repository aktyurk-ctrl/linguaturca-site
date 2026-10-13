'use client';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { formatLabels, type FormatId } from '@/data/living-school';
import { submitLead, validateLead, type LeadErrors } from '@/lib/lead-request';
import { useSchoolInteractions } from './SchoolInteractions';
import { cx } from './styles';
export function LeadForm() {
  const { selection, select } = useSchoolInteractions();
  const [values, setValues] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState<LeadErrors>({});
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const status = useRef<HTMLDivElement>(null);
  const pending = useRef(false);
  const returnToFields = useRef(false);
  useEffect(() => {
    // A new enrollment choice reopens the form while retaining the visitor's contact fields.
    if (!pending.current) setState('idle');
  }, [selection]);
  useEffect(() => {
    if (state === 'success' || state === 'error') status.current?.focus();
    if (state === 'idle' && returnToFields.current) {
      document.getElementById('name')?.focus();
      returnToFields.current = false;
    }
  }, [state]);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    if (state === 'success') {
      returnToFields.current = true;
      setState('idle');
      return;
    }
    const nextErrors = validateLead({ ...values, format: selection.format });
    setErrors(nextErrors);
    const first = Object.keys(nextErrors)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    pending.current = true;
    setState('loading');
    try {
      await submitLead({ ...values, format: selection.format }, selection.plan);
      setState('success');
    } catch {
      setState('error');
    } finally {
      pending.current = false;
    }
  }
  return (
    <div className={cx('form-panel')}>
      <p className={cx('demo-note')}>Заявка на бесплатную консультацию.</p>
      <form id="enroll-form" noValidate onSubmit={onSubmit} aria-busy={state === 'loading'}>
        <fieldset id="form-fields" disabled={state === 'loading'} hidden={state === 'success'}>
          <legend className={cx('sr-only')}>Заявка на обучение</legend>
          <div className={cx('field')}>
            <label htmlFor="name">Ваше имя</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="given-name"
              placeholder="Как к вам обращаться"
              required
              value={values.name}
              onChange={(event) => setValues({ ...values, name: event.target.value })}
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
            />
            <span id="name-error" className={cx('field-error')} hidden={!errors.name}>
              {errors.name}
            </span>
          </div>
          <div className={cx('field')}>
            <label htmlFor="phone">Телефон</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+7 или другой код страны"
              required
              value={values.phone}
              onChange={(event) => setValues({ ...values, phone: event.target.value })}
              aria-invalid={!!errors.phone}
              aria-describedby="phone-hint phone-error"
            />
            <small id="phone-hint">С кодом страны, например +7 или +90</small>
            <span id="phone-error" className={cx('field-error')} hidden={!errors.phone}>
              {errors.phone}
            </span>
          </div>
          <div className={cx('field')}>
            <label htmlFor="email">
              Email <span>необязательно</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={(event) => setValues({ ...values, email: event.target.value })}
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
            <span id="email-error" className={cx('field-error')} hidden={!errors.email}>
              {errors.email}
            </span>
          </div>
          <div className={cx('field')}>
            <label htmlFor="format">Формат обучения</label>
            <select
              id="format"
              name="format"
              value={selection.format}
              onChange={(event) => select({ format: event.target.value as FormatId })}
            >
              {Object.entries(formatLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <small id="selected-plan" hidden={!selection.plan}>
              {selection.plan ? `Выбран тариф: ${selection.plan}` : ''}
            </small>
          </div>
        </fieldset>
        <div
          ref={status}
          id="form-status"
          className={cx('form-status')}
          data-status={state}
          role={state === 'error' ? 'alert' : 'status'}
          aria-live="polite"
          tabIndex={-1}
          hidden={state === 'idle'}
        >
          {state === 'loading' && <p>Отправляем заявку…</p>}
          {state === 'error' && (
            <>
              <strong>Не удалось отправить</strong>
              <p>Ваши поля сохранены. Попробуйте ещё раз или напишите нам в Telegram.</p>
              <a href="https://t.me/Daria_Kolosova">@Daria_Kolosova ↗</a>
            </>
          )}
          {state === 'success' && (
            <>
              <strong>Спасибо за обращение!</strong>
              <p>Школа получила вашу заявку. Мы свяжемся с вами, чтобы обсудить обучение.</p>
            </>
          )}
        </div>
        <button
          className={cx('button submit', state === 'loading' && 'loading')}
          id="submit-button"
          type="submit"
          disabled={state === 'loading'}
        >
          {state === 'loading' ? (
            'Отправляем…'
          ) : state === 'success' ? (
            'Вернуться к форме'
          ) : state === 'error' ? (
            'Попробовать ещё раз ↗'
          ) : (
            <>
              Оставить заявку <span aria-hidden="true">↗</span>
            </>
          )}
        </button>
        <p className={cx('consent')}>
          <a href="/policy">Политика обработки персональных данных</a>
        </p>
      </form>
    </div>
  );
}

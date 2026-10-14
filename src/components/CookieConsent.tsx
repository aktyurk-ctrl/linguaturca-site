'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { readConsent, saveConsent, type Consent } from '@/lib/consent';

const ConsentedAnalytics = dynamic(() => import('./ConsentedAnalytics'), { ssr: false });

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="cookie-settings"
      onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
    >
      Настройки cookies
    </button>
  );
}

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const saved = readConsent();
    // Browser storage is unavailable during server rendering.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(saved);
    setVisible(!saved);
    const open = () => {
      trigger.current = document.activeElement as HTMLElement;
      setVisible(true);
      requestAnimationFrame(() => panel.current?.focus());
    };
    // Reload on cross-tab changes so a previously initialized tracker cannot keep running.
    const sync = (event: StorageEvent) => {
      if (event.key === 'cookie-consent' || event.key === null) window.location.reload();
    };
    window.addEventListener('open-cookie-settings', open);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener('open-cookie-settings', open);
      window.removeEventListener('storage', sync);
    };
  }, []);
  function choose(next: Exclude<Consent, null>) {
    const persisted = saveConsent(next);
    // If storage is denied, never initialize optional analytics; the banner remains usable.
    setConsent(persisted ? next : 'declined');
    setVisible(false);
    trigger.current?.focus();
    if (consent === 'accepted' && next === 'declined') window.location.reload();
  }
  return (
    <>
      {consent === 'accepted' && <ConsentedAnalytics />}
      {visible && (
        <div
          ref={panel}
          className="cookie-banner"
          role="region"
          aria-label="Настройки cookies"
          tabIndex={-1}
        >
          <p>
            Разрешить необязательную аналитику Яндекс Метрики и Vercel? Вы можете отказаться и
            пользоваться сайтом. <Link href="/policy">Политика обработки данных</Link>.
          </p>
          <div className="cookie-actions">
            <button type="button" onClick={() => choose('declined')}>
              Отклонить
            </button>
            <button type="button" className="cookie-accept" onClick={() => choose('accepted')}>
              Принять
            </button>
          </div>
        </div>
      )}
    </>
  );
}

'use client';
import { Analytics } from '@vercel/analytics/react';
import YandexMetrika from './YandexMetrika';
import { readConsent } from '@/lib/consent';
export default function ConsentedAnalytics() {
  return (
    <>
      <YandexMetrika />
      <Analytics beforeSend={(event) => (readConsent() === 'accepted' ? event : null)} />
    </>
  );
}

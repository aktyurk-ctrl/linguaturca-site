export type Consent = 'accepted' | 'declined' | null;
export function readConsent(): Consent {
  try {
    const value = window.localStorage.getItem('cookie-consent');
    return value === 'accepted' || value === 'declined' ? value : null;
  } catch {
    return null;
  }
}
export function saveConsent(value: Exclude<Consent, null>): boolean {
  try {
    window.localStorage.setItem('cookie-consent', value);
    return true;
  } catch {
    return false;
  }
}

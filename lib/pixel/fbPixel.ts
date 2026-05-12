import { env } from '@/config/env';

export const PIXEL_ID = env.pixelId;

export function pageview(): void {
  if (typeof window === 'undefined' || !PIXEL_ID) return;
  window.fbq?.('track', 'PageView');
}

export function trackEvent(event: string, data?: Record<string, unknown>): void {
  if (typeof window === 'undefined' || !PIXEL_ID) return;
  window.fbq?.('track', event, data);
}

export function trackCustomEvent(event: string, data?: Record<string, unknown>): void {
  if (typeof window === 'undefined' || !PIXEL_ID) return;
  window.fbq?.('trackCustom', event, data);
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

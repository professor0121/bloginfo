import { env } from '@/config/env';

export const GA_ID = env.gaId;

export function pageview(url: string): void {
  if (typeof window === 'undefined' || !GA_ID) return;
  window.gtag?.('config', GA_ID, { page_path: url });
}

export function event(action: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined' || !GA_ID) return;
  window.gtag?.('event', action, params);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

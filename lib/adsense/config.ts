import { adsConfig } from '@/config/ads';

export { adsConfig };

export function isAdsEnabled(): boolean {
  return adsConfig.enabled && !!adsConfig.client;
}

export function getAdSlot(placement: keyof typeof adsConfig.slots): string {
  return adsConfig.slots[placement];
}

'use client';

import { useEffect } from 'react';
import { isAdsEnabled, adsConfig } from './config';

export function useInjectAds(): void {
  useEffect(() => {
    if (!isAdsEnabled()) return;
    try {
      // Push a new ad slot
      const adsbygoogle = (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle;
      if (adsbygoogle) {
        adsbygoogle.push({});
      }
    } catch {
      // ads not loaded yet
    }
  }, []);
}

export function getAdsenseScript(): string {
  return `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsConfig.client}`;
}

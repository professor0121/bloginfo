'use client';

import { useEffect, useRef } from 'react';
import { isAdsEnabled, getAdSlot, adsConfig } from '@/lib/adsense';

export function AdSidebar() {
  const initialized = useRef(false);

  useEffect(() => {
    if (!isAdsEnabled() || initialized.current) return;
    initialized.current = true;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch { /* ignore */ }
  }, []);

  if (!isAdsEnabled()) return null;

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 p-2">
      <p className="text-xs text-slate-400 text-center mb-1">Advertisement</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adsConfig.client}
        data-ad-slot={getAdSlot('sidebar')}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

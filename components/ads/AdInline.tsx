'use client';

import { useEffect, useRef } from 'react';
import { isAdsEnabled, getAdSlot, adsConfig } from '@/lib/adsense';
import { cn } from '@/lib/utils';

interface AdInlineProps {
  className?: string;
}

export function AdInline({ className }: AdInlineProps) {
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
    <div className={cn('my-8 w-full overflow-hidden text-center', className)}>
      <p className="text-xs text-slate-400 mb-1">Advertisement</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client={adsConfig.client}
        data-ad-slot={getAdSlot('inline')}
        data-ad-format="fluid"
        data-ad-layout="in-article"
      />
    </div>
  );
}

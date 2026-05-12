'use client';

import { useEffect, useRef } from 'react';
import { isAdsEnabled, getAdSlot, adsConfig } from '@/lib/adsense';
import { cn } from '@/lib/utils';

interface AdBannerProps {
  className?: string;
}

export function AdBanner({ className }: AdBannerProps) {
  const adRef = useRef<HTMLElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!isAdsEnabled() || initialized.current) return;
    initialized.current = true;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
    } catch {
      /* ignore */
    }
  }, []);

  if (!isAdsEnabled()) return null;

  return (
    <div className={cn('w-full overflow-hidden text-center', className)}>
      <ins
        ref={adRef as React.RefObject<HTMLModElement>}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adsConfig.client}
        data-ad-slot={getAdSlot('banner')}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

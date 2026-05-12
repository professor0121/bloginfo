'use client';

import { useEffect, useRef, useState } from 'react';
import { isAdsEnabled, getAdSlot, adsConfig } from '@/lib/adsense';
import { RiCloseLine } from 'react-icons/ri';

export function AdSticky() {
  const [visible, setVisible] = useState(true);
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

  if (!isAdsEnabled() || !visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-full max-w-2xl px-4">
      <div className="relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 p-1 rounded text-slate-400 hover:text-slate-700 z-10"
          aria-label="Close ad"
        >
          <RiCloseLine className="h-4 w-4" />
        </button>
        <p className="text-xs text-slate-400 text-center pt-2">Advertisement</p>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={adsConfig.client}
          data-ad-slot={getAdSlot('sticky')}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}

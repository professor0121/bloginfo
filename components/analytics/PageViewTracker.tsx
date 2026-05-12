'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from '@/lib/analytics/google';
import { pageview as pixelPageview } from '@/lib/pixel/fbPixel';

export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    pageview(pathname);
    pixelPageview();
  }, [pathname]);

  return null;
}

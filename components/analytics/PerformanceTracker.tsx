'use client';

import { useEffect } from 'react';
import { event } from '@/lib/analytics/google';

export function PerformanceTracker() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          event('web_vitals', {
            metric_name: 'LCP',
            metric_value: Math.round(entry.startTime),
          });
        }
      }
    });

    try {
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {
      // not supported
    }

    return () => observer.disconnect();
  }, []);

  return null;
}

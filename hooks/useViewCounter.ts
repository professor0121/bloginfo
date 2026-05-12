'use client';

import { useState, useEffect } from 'react';

export function useViewCounter(slug: string) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const register = async () => {
      try {
        const res = await fetch(`/api/views?slug=${encodeURIComponent(slug)}`, {
          method: 'POST',
        });
        if (res.ok) {
          const data = await res.json();
          setViews(data.views);
        }
      } catch {
        // silently fail
      }
    };
    register();
  }, [slug]);

  return { views };
}

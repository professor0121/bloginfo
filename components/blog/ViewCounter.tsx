'use client';

import { useViewCounter } from '@/hooks/useViewCounter';
import { RiEyeLine } from 'react-icons/ri';
import { cn } from '@/lib/utils';

interface ViewCounterProps {
  slug: string;
  className?: string;
}

export function ViewCounter({ slug, className }: ViewCounterProps) {
  const { views } = useViewCounter(slug);

  if (!views) return null;

  return (
    <span className={cn('inline-flex items-center gap-1 text-sm text-slate-500', className)}>
      <RiEyeLine className="h-3.5 w-3.5" />
      {views.toLocaleString()} views
    </span>
  );
}

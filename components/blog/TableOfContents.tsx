'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import type { TocItem } from '@/types/blog';

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0% -70% 0%' }
    );

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    headings.forEach((el) => observer.observe(el));
    return () => headings.forEach((el) => observer.unobserve(el));
  }, [items]);

  if (!items.length) return null;

  return (
    <nav className={cn('space-y-1', className)} aria-label="Table of contents">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">
        On this page
      </p>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            'block py-1 text-sm leading-snug transition-colors duration-150',
            item.level === 2 ? 'pl-0' : item.level === 3 ? 'pl-4' : 'pl-8',
            activeId === item.id
              ? 'text-indigo-600 dark:text-indigo-400 font-medium'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
          )}
        >
          {item.text}
        </a>
      ))}
    </nav>
  );
}

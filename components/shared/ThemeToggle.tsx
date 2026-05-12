'use client';

import { useTheme } from '@/hooks/useTheme';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className={cn(
        'p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors',
        className
      )}
      aria-label={resolvedTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {resolvedTheme === 'dark' ? (
        <RiSunLine className="h-5 w-5" />
      ) : (
        <RiMoonLine className="h-5 w-5" />
      )}
    </button>
  );
}

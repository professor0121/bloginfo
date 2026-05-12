'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { RiRefreshLine, RiHome4Line } from 'react-icons/ri';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-20 h-20 rounded-2xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-6 text-4xl">
          ⚠️
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Something went wrong
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
          An unexpected error occurred. We&apos;ve been notified and are working on a fix.
        </p>
        {error.digest && (
          <p className="text-xs text-slate-400 font-mono mb-6">Error ID: {error.digest}</p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={reset} size="lg">
            <RiRefreshLine className="h-5 w-5" />
            Try again
          </Button>
          <Button href="/" variant="outline" size="lg">
            <RiHome4Line className="h-5 w-5" />
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
}

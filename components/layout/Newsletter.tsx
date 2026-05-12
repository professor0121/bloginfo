'use client';

import { useState } from 'react';
import { useNewsletter } from '@/hooks/useNewsletter';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { RiMailLine, RiCheckLine } from 'react-icons/ri';

interface NewsletterProps {
  variant?: 'inline' | 'section';
  className?: string;
}

export function Newsletter({ variant = 'section', className }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const { status, message, subscribe } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await subscribe(email);
    if (status !== 'error') setEmail('');
  };

  if (variant === 'inline') {
    return (
      <div className={cn('rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-6', className)}>
        <div className="flex items-start gap-3 mb-4">
          <RiMailLine className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Get updates in your inbox</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Subscribe to get the latest articles delivered to you.
            </p>
          </div>
        </div>
        {status === 'success' ? (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <RiCheckLine className="h-5 w-5" />
            <span className="text-sm font-medium">{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              aria-label="Email address"
            />
            <Button type="submit" isLoading={status === 'loading'} size="md">
              Subscribe
            </Button>
          </form>
        )}
        {status === 'error' && <p className="mt-2 text-xs text-red-500">{message}</p>}
      </div>
    );
  }

  return (
    <section className={cn('relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 md:p-12 text-white', className)}>
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="relative max-w-2xl mx-auto text-center">
        <RiMailLine className="h-12 w-12 mx-auto mb-4 opacity-80" />
        <h2 className="text-3xl font-bold mb-3">Stay in the loop</h2>
        <p className="text-indigo-100 mb-8 text-lg">
          Get the latest posts on AI, Next.js, and web development delivered straight to your inbox. No spam, ever.
        </p>
        {status === 'success' ? (
          <div className="flex items-center justify-center gap-2 text-white bg-white/20 rounded-lg py-3 px-6">
            <RiCheckLine className="h-5 w-5" />
            <span className="font-medium">{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-lg px-4 py-2.5 text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Email address"
            />
            <Button
              type="submit"
              isLoading={status === 'loading'}
              variant="secondary"
              className="bg-white text-indigo-700 hover:bg-indigo-50"
            >
              Subscribe
            </Button>
          </form>
        )}
        {status === 'error' && <p className="mt-3 text-sm text-red-300">{message}</p>}
        <p className="mt-4 text-xs text-indigo-200">
          By subscribing you agree to our{' '}
          <a href="/privacy-policy" className="underline hover:text-white">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </section>
  );
}

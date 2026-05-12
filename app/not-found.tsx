import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { RiHome4Line, RiSearchLine } from 'react-icons/ri';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-bold text-indigo-200 dark:text-indigo-900 select-none mb-6">404</p>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Page not found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved,
          deleted, or never existed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" size="lg">
            <RiHome4Line className="h-5 w-5" />
            Go home
          </Button>
          <Button href="/blog/search" variant="outline" size="lg">
            <RiSearchLine className="h-5 w-5" />
            Search articles
          </Button>
        </div>
        <p className="mt-10 text-sm text-slate-500">
          Looking for something specific?{' '}
          <Link href="/blog" className="text-indigo-600 dark:text-indigo-400 underline underline-offset-2">
            Browse all posts
          </Link>
        </p>
      </div>
    </div>
  );
}

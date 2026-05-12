import { cn } from '@/lib/utils';

interface PostContentProps {
  children: React.ReactNode;
  className?: string;
}

export function PostContent({ children, className }: PostContentProps) {
  return (
    <article
      className={cn(
        'prose prose-slate dark:prose-invert max-w-none',
        'prose-headings:scroll-mt-24',
        'prose-code:before:content-none prose-code:after:content-none',
        className
      )}
    >
      {children}
    </article>
  );
}

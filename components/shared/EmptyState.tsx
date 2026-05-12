import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { RiSearchLine } from 'react-icons/ri';

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: { label: string; href: string };
  className?: string;
}

export function EmptyState({
  title = 'No posts found',
  description = 'Try a different search term or browse all posts.',
  action,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-20 text-center', className)}>
      <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
        <RiSearchLine className="h-8 w-8 text-slate-400" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm">{description}</p>
      {action && (
        <Button href={action.href} variant="outline" className="mt-6">
          {action.label}
        </Button>
      )}
    </div>
  );
}

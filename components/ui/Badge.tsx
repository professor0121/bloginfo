import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200',
        primary: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
        secondary: 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
        outline: 'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300',
        ai: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
        nextjs: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
        seo: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        tutorials: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };

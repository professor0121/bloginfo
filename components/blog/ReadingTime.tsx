import { RiTimeLine } from 'react-icons/ri';
import { cn } from '@/lib/utils';

interface ReadingTimeProps {
  readingTime: string;
  className?: string;
}

export function ReadingTime({ readingTime, className }: ReadingTimeProps) {
  return (
    <span className={cn('inline-flex items-center gap-1 text-sm text-slate-500', className)}>
      <RiTimeLine className="h-3.5 w-3.5" />
      {readingTime}
    </span>
  );
}

'use client';

import { useReadingProgress } from '@/hooks/useReadingProgress';

export function ReadingProgress() {
  const progress = useReadingProgress();
  return (
    <div
      className="fixed top-0 left-0 z-50 h-0.5 bg-indigo-600 transition-all duration-100"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
}

export * from './date';
export * from './string';
export * from './slug';
export * from './url';
export * from './constants';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

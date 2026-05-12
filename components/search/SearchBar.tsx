'use client';

import { Input } from '@/components/ui/Input';
import { RiSearchLine } from 'react-icons/ri';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder = 'Search posts...', className }: SearchBarProps) {
  return (
    <Input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      leftIcon={<RiSearchLine className="h-4 w-4" />}
      className={className}
      aria-label="Search"
    />
  );
}

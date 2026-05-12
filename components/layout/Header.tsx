'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { mainNav, categoryNav } from '@/config/navigation';
import { cn } from '@/lib/utils';
import { RiSearchLine, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { SearchDialog } from '@/components/search/SearchDialog';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <span className="text-indigo-600">⟡</span>
              {siteConfig.name}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Search"
              >
                <RiSearchLine className="h-5 w-5" />
              </button>
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Open menu"
              >
                <RiMenuLine className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Category Nav */}
          <div className="hidden md:flex items-center gap-1 pb-2 overflow-x-auto">
            {categoryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-full transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

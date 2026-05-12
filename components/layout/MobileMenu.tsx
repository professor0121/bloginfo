'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { mainNav, categoryNav } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { RiCloseLine } from 'react-icons/ri';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white">
                <span className="text-indigo-600">⟡</span> {siteConfig.name}
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close menu"
              >
                <RiCloseLine className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <hr className="my-3 border-slate-200 dark:border-slate-800" />
              <p className="px-3 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Categories
              </p>
              {categoryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block px-3 py-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };
  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl md:flex md:items-center md:justify-between md:px-8"
        >
          <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 md:mb-0">
            We use cookies to improve your experience and analyze traffic.{' '}
            <a href="/privacy-policy" className="underline text-indigo-600 dark:text-indigo-400">
              Learn more
            </a>
            .
          </p>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={decline}>
              Decline
            </Button>
            <Button size="sm" onClick={accept}>
              Accept all
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

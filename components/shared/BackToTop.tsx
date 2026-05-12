'use client';

import { useEffect, useState } from 'react';
import { RiArrowUpLine } from 'react-icons/ri';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-500 transition-colors"
          aria-label="Back to top"
        >
          <RiArrowUpLine className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

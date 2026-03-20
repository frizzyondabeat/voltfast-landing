'use client';

import { Loader } from './loader';
import { AnimatePresence, motion } from 'framer-motion';
import { createContext, useEffect, useState } from 'react';

export const LoadingContext = createContext(true);
const VISITED_KEY = 'voltfast_visited';

export function HomeClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasVisited = sessionStorage.getItem(VISITED_KEY) === 'true';
      setLoading(!hasVisited);
      setIsReady(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      sessionStorage.setItem(VISITED_KEY, 'true');
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isReady, loading]);

  return (
    <LoadingContext.Provider value={isReady && loading}>
      <AnimatePresence>
        {isReady && loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={
          isReady && loading ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }
        }
        animate={{
          opacity: isReady && loading ? 0 : 1,
          y: isReady && loading ? 20 : 0,
        }}
        transition={{
          duration: 0.8,
          delay: isReady && loading ? 0.2 : 0,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="relative"
      >
        {children}
      </motion.div>
    </LoadingContext.Provider>
  );
}

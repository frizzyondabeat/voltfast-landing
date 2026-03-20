'use client';

import { LoadingContext } from './home-client';
import { motion } from 'framer-motion';
import { useContext } from 'react';

export function HeroHighlight({ children }: { children: React.ReactNode }) {
  const loading = useContext(LoadingContext);

  return (
    <span className="relative inline-block">
      <span className="relative z-20">{children}</span>
      <motion.svg
        className="pointer-events-none absolute -bottom-[15%] left-0 z-10 h-[60%] w-[105%] overflow-visible"
        viewBox="0 0 100 30"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 15 18 C 30 16, 50 20, 65 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#b8f600]"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            !loading
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M 40 25 C 55 24, 75 28, 85 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#b8f600]"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            !loading
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            duration: 0.8,
            delay: 1.6,
            ease: 'easeInOut',
          }}
        />
      </motion.svg>
    </span>
  );
}

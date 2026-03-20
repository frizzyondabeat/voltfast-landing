'use client';

import { CopyIcon } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from 'lib/utils';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface CopyButtonProps {
  npmCommand: string;
  pnpmCommand: string;
  bunCommand: string;
  className?: string;
}

type PackageManager = 'npm' | 'pnpm' | 'bun';

export function CopyButton({
  npmCommand,
  pnpmCommand,
  bunCommand,
  className,
}: CopyButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedManager, setCopiedManager] = useState<PackageManager | null>(
    null
  );
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCopy = async (manager: PackageManager, command: string) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedManager(manager);
      setTimeout(() => {
        setCopiedManager(null);
        setIsOpen(false);
      }, 1000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex size-8 items-center justify-center rounded-[4px] border border-white/10 bg-white/5 text-[#9ca3af] transition-colors hover:bg-white/10 hover:text-[#e5e2e1]',
          className
        )}
        aria-label="Copy installation command"
      >
        <CopyIcon size={16} weight="bold" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-[calc(100%+8px)] right-0 z-50 flex min-w-[140px] flex-col overflow-hidden rounded-[8px] border border-white/10 bg-[#1c1b1b] p-1 shadow-xl"
          >
            <button
              onClick={() => handleCopy('npm', npmCommand)}
              className="flex items-center justify-between gap-3 rounded-[4px] px-3 py-2 text-left text-sm text-[#e5e2e1] transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/techs/npm.svg"
                  alt="npm"
                  width={14}
                  height={14}
                />
                <span className="font-mono text-[13px]">npm</span>
              </div>
              {copiedManager === 'npm' && (
                <span className="text-[11px] text-[#b8f600]">Copied</span>
              )}
            </button>
            <button
              onClick={() => handleCopy('pnpm', pnpmCommand)}
              className="flex items-center justify-between gap-3 rounded-[4px] px-3 py-2 text-left text-sm text-[#e5e2e1] transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/techs/pnpm.svg"
                  alt="pnpm"
                  width={14}
                  height={14}
                />
                <span className="font-mono text-[13px]">pnpm</span>
              </div>
              {copiedManager === 'pnpm' && (
                <span className="text-[11px] text-[#b8f600]">Copied</span>
              )}
            </button>
            <button
              onClick={() => handleCopy('bun', bunCommand)}
              className="flex items-center justify-between gap-3 rounded-[4px] px-3 py-2 text-left text-sm text-[#e5e2e1] transition-colors hover:bg-white/5"
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/techs/bun.svg"
                  alt="bun"
                  width={14}
                  height={14}
                />
                <span className="font-mono text-[13px]">bun</span>
              </div>
              {copiedManager === 'bun' && (
                <span className="text-[11px] text-[#b8f600]">Copied</span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

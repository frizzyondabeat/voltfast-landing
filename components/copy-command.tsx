'use client';

import { CheckIcon, CopyIcon, CaretDownIcon } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import * as React from 'react';

type PackageManager = 'npm' | 'pnpm' | 'bun';

export function CopyCommand({
  command,
  className,
}: {
  command: string; // The base string format provided originally, not used anymore with this change
  className?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeManager, setActiveManager] =
    React.useState<PackageManager>('npm');
  const [copiedManager, setCopiedManager] =
    React.useState<PackageManager | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const commands = {
    npm: 'npx @frizzyondabeat/volt-fast setup',
    pnpm: 'pnpx @frizzyondabeat/volt-fast setup',
    bun: 'bunx @frizzyondabeat/volt-fast setup',
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopy = async (manager: PackageManager) => {
    try {
      await navigator.clipboard.writeText(commands[manager]);
      setActiveManager(manager);
      setCopiedManager(manager);
      setIsOpen(false);
      setTimeout(() => setCopiedManager(null), 2000);
    } catch (err) {
      console.error('Failed to copy command:', err);
    }
  };

  const handleMainCopyClick = () => {
    handleCopy(activeManager);
  };

  return (
    <div
      className={`relative flex w-full max-w-[384px] shrink-0 flex-col items-start gap-[16px] ${className || ''}`}
    >
      <div className="relative flex w-full shrink-0 flex-col items-start">
        <div className="flex w-full shrink-0 flex-col justify-center font-mono text-[10px] leading-[0] tracking-[1px] text-white/40 uppercase not-italic">
          <p className="leading-[15px]">Instant Activation</p>
        </div>
      </div>

      {/* Code Block Window */}
      <div className="group relative flex w-full shrink-0 items-center justify-between border border-white/10 bg-white/5 p-[17px] pr-[12px]">
        <div className="scrollbar-hide z-10 flex h-[16px] flex-col justify-center overflow-x-auto font-mono text-[12px] leading-[0] whitespace-nowrap text-[#b8f600] not-italic">
          <p className="leading-[16px]">{commands[activeManager]}</p>
        </div>

        {/* Dropdown Selector */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 flex items-center gap-1.5 rounded-[4px] bg-white/5 px-2 py-1 transition-colors hover:bg-white/10"
          >
            <Image
              src={`/icons/techs/${activeManager}.svg`}
              alt={activeManager}
              width={14}
              height={14}
            />
            <span className="font-mono text-[11px] text-[#e5e2e1]">
              {activeManager}
            </span>
            <CaretDownIcon size={12} className="text-[#9ca3af]" />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 5, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="absolute top-[calc(100%+4px)] right-0 z-100 flex min-w-[120px] flex-col overflow-hidden rounded-[8px] border border-white/10 bg-[#1c1b1b] p-1 shadow-xl"
              >
                {(['npm', 'pnpm', 'bun'] as PackageManager[]).map((manager) => (
                  <button
                    key={manager}
                    onClick={() => handleCopy(manager)}
                    className="flex items-center justify-between gap-3 rounded-[4px] px-3 py-2 text-left text-sm text-[#e5e2e1] transition-colors hover:bg-white/5"
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={`/icons/techs/${manager}.svg`}
                        alt={manager}
                        width={14}
                        height={14}
                      />
                      <span className="font-mono text-[12px]">{manager}</span>
                    </div>
                    {copiedManager === manager ? (
                      <CheckIcon
                        size={14}
                        className="text-[#b8f600]"
                        weight="bold"
                      />
                    ) : (
                      <CopyIcon size={14} className="text-[#6b7280]" />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={handleMainCopyClick}
        className="group relative flex w-full shrink-0 flex-col items-center justify-center bg-white py-[16px] transition-colors hover:bg-white/90"
      >
        <div className="font-space-grotesk flex h-[15px] shrink-0 items-center justify-center gap-2 text-[10px] leading-[0] font-bold tracking-[2px] text-black uppercase">
          {copiedManager ? (
            <>
              <CheckIcon size={14} weight="bold" />
              <p className="leading-[15px]">Copied {copiedManager} command!</p>
            </>
          ) : (
            <>
              <CopyIcon
                size={14}
                weight="bold"
                className="transition-transform group-hover:scale-110"
              />
              <p className="leading-[15px]">Copy Command</p>
            </>
          )}
        </div>
      </button>
    </div>
  );
}

'use client';

import { MagnifyingGlass } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import { searchDocs, SearchEntry } from 'lib/search-data';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();

  const results = searchDocs(query);

  const open = useCallback(() => {
    setIsOpen(true);
    setQuery('');
    setActiveIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setActiveIndex(0);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      close();
      router.push(href);
    },
    [close, router]
  );

  // Custom event from DocsToc Pro Tip kbd click
  useEffect(() => {
    const handler = () => open();
    window.addEventListener('open-docs-search', handler);
    return () => window.removeEventListener('open-docs-search', handler);
  }, [open]);

  // Global `/` shortcut — only when not typing in an input
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (isOpen) return;
      if (e.key !== '/') return;
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target as HTMLElement).isContentEditable) return;
      e.preventDefault();
      open();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, open]);

  // Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, close]);

  // Arrow key navigation + Enter
  useEffect(() => {
    if (!isOpen || results.length === 0) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter') {
        const entry = results[activeIndex];
        if (entry) navigate(entry.href);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, results, activeIndex, navigate]);

  // Focus input when modal opens
  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    return () => clearTimeout(t);
  }, [isOpen]);

  // Reset active index when query changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Scroll active item into view
  useEffect(() => {
    const item = listRef.current?.children[activeIndex] as HTMLElement | undefined;
    item?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="search-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-sm"
            onClick={close}
          />

          {/* Dialog */}
          <motion.div
            key="search-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Search documentation"
            initial={{ opacity: 0, scale: 0.97, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-[18%] left-1/2 z-[301] w-[calc(100%-32px)] max-w-[560px] -translate-x-1/2 overflow-hidden rounded-[12px] border border-white/10 bg-[#1c1b1b] shadow-2xl"
          >
            {/* Input row */}
            <div className="flex items-center gap-[12px] border-b border-white/5 px-[20px] py-[14px]">
              <MagnifyingGlass
                size={17}
                weight="bold"
                className="shrink-0 text-[#6b7280]"
              />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation..."
                className="flex-1 bg-transparent font-mono text-[14px] leading-[20px] text-[#e5e2e1] placeholder:text-[#4b5563] outline-none"
                aria-label="Search query"
                aria-autocomplete="list"
                aria-controls="search-results"
                aria-activedescendant={
                  results[activeIndex]
                    ? `result-${results[activeIndex].id}`
                    : undefined
                }
              />
              <button
                type="button"
                onClick={close}
                className="flex shrink-0 items-center justify-center rounded-[4px] border border-white/10 bg-[#2a2a2a] px-[8px] py-[3px] font-mono text-[10px] tracking-[0.5px] text-[#6b7280] transition-colors hover:border-white/20 hover:text-[#9ca3af]"
                aria-label="Close search"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            {query.trim() ? (
              results.length > 0 ? (
                <ul
                  id="search-results"
                  ref={listRef}
                  role="listbox"
                  className="max-h-[320px] overflow-y-auto py-[8px]"
                >
                  {results.map((entry: SearchEntry, i: number) => (
                    <li
                      key={entry.id}
                      id={`result-${entry.id}`}
                      role="option"
                      aria-selected={i === activeIndex}
                    >
                      <button
                        type="button"
                        onClick={() => navigate(entry.href)}
                        onMouseEnter={() => setActiveIndex(i)}
                        className={`flex w-full items-center gap-[10px] px-[20px] py-[10px] text-left transition-colors ${
                          i === activeIndex
                            ? 'bg-[rgba(184,246,0,0.06)]'
                            : 'hover:bg-white/[0.03]'
                        }`}
                      >
                        {/* Page label */}
                        <span className="w-[110px] shrink-0 font-mono text-[10px] font-bold tracking-[1px] text-[#b8f600] uppercase">
                          {entry.page}
                        </span>

                        {/* Divider */}
                        <span
                          className="h-[14px] w-px shrink-0 bg-white/10"
                          aria-hidden="true"
                        />

                        {/* Section */}
                        <span className="truncate text-[13px] font-medium leading-[20px] text-[#e5e2e1]">
                          {entry.section ?? entry.page}
                        </span>

                        {/* Active indicator */}
                        {i === activeIndex && (
                          <span className="ml-auto shrink-0 font-mono text-[10px] text-[#4b5563]">
                            ↵
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-[20px] py-[36px] text-center">
                  <p className="text-[14px] text-[#4b5563]">
                    No results for{' '}
                    <span className="text-[#6b7280]">&ldquo;{query}&rdquo;</span>
                  </p>
                </div>
              )
            ) : (
              /* Quick-jump hints when query is empty */
              <div className="flex flex-wrap gap-[8px] px-[20px] py-[16px]">
                {[
                  'Quick Start',
                  'Features',
                  'Supported Stacks',
                  'Contributing',
                  'Tailwind',
                  'ESLint',
                  'Shadcn UI',
                  'TypeScript',
                ].map((hint) => (
                  <button
                    key={hint}
                    type="button"
                    onClick={() => setQuery(hint)}
                    className="rounded-[4px] border border-white/10 bg-[#2a2a2a] px-[10px] py-[4px] font-mono text-[11px] text-[#6b7280] transition-colors hover:border-[#b8f600]/30 hover:text-[#b8f600]"
                  >
                    {hint}
                  </button>
                ))}
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/5 px-[20px] py-[10px]">
              <div className="flex items-center gap-[16px]">
                <span className="flex items-center gap-[5px] font-mono text-[10px] text-[#4b5563]">
                  <kbd className="rounded-[2px] border border-white/10 bg-[#2a2a2a] px-[5px] py-[1px]">
                    ↑↓
                  </kbd>
                  navigate
                </span>
                <span className="flex items-center gap-[5px] font-mono text-[10px] text-[#4b5563]">
                  <kbd className="rounded-[2px] border border-white/10 bg-[#2a2a2a] px-[5px] py-[1px]">
                    ↵
                  </kbd>
                  open
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#4b5563]">
                Voltfast Docs
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

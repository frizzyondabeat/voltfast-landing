'use client';

import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface NavItem {
  name: string;
  href: string;
}

interface DocsSidebarProps {
  items: NavItem[];
  version: string;
  isToc?: boolean;
}

export function DocsSidebar({
  items,
  version,
  isToc = false,
}: DocsSidebarProps) {
  const [activeId, setActiveId] = useState<string>('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px', threshold: 0.1 }
    );

    const elements = items.map((item) => {
      const id = item.href.split('#')[1] || 'introduction';
      return document.getElementById(id);
    });

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (isToc) {
    return (
      <aside className="sticky top-[64px] hidden h-[calc(100vh-64px)] w-[256px] shrink-0 flex-col gap-[24px] self-start overflow-y-auto border-l border-white/5 bg-[#131313] px-[32px] py-[32px] xl:flex">
        <div className="w-full">
          <h4 className="text-[10px] leading-[15px] font-bold tracking-[2px] text-[#4b5563] uppercase">
            On this page
          </h4>
        </div>

        <nav className="flex w-full flex-col gap-[16px] pb-[24px]">
          {items.map((item) => {
            const id = item.href.split('#')[1] || 'introduction';
            const isActive = activeId === id;

            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'relative flex items-center text-[12px] leading-[16px] font-medium transition-colors',
                  isActive
                    ? 'text-[#b8f600]'
                    : 'text-[#6b7280] hover:text-[#e5e2e1]'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="toc-active-indicator"
                    className="absolute top-0 bottom-0 left-0 w-px bg-[#b8f600]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={cn(
                    'transition-all duration-300',
                    isActive ? 'pl-[17px]' : 'pl-[16px]'
                  )}
                >
                  {item.name}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="flex w-full flex-col gap-[8px] rounded-[8px] border border-[rgba(184,246,0,0.1)] bg-[rgba(184,246,0,0.05)] p-[24px]">
          <div className="font-mono text-[10px] leading-[15px] text-[#b8f600]">
            PRO TIP
          </div>
          <div className="text-[11px] leading-[16.5px] text-[#9ca3af]">
            Press{' '}
            <kbd className="mx-1 rounded-[2px] border border-white/10 bg-[#2a2a2a] px-[7px] py-[1.5px] font-mono text-white">
              /
            </kbd>{' '}
            to search the documentation instantly.
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="sticky top-[64px] hidden h-[calc(100vh-64px)] w-[256px] shrink-0 flex-col self-start overflow-y-auto border-r border-white/5 bg-[#1c1b1b] py-[32px] md:flex">
      <div className="px-[24px] pb-[32px]">
        <h3 className="font-['Space_Grotesk'] text-[18px] leading-[28px] font-bold text-[#bfff00]">
          Documentation
        </h3>
        <p className="font-mono text-[12px] leading-[16px] text-[#6b7280]">
          v{version}
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-[4px] px-[8px]">
        {items.map((item) => {
          const id = item.href.split('#')[1] || 'introduction';
          const isActive = activeId === id;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'relative flex items-center gap-[12px] rounded-tr-[12px] rounded-br-[12px] px-[16px] py-[8px] transition-colors',
                isActive
                  ? 'font-bold text-[#bfff00]'
                  : 'font-normal text-[#6b7280] hover:bg-white/5 hover:text-[#e5e2e1]'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active-indicator"
                  className="absolute inset-0 z-0 rounded-tr-[12px] rounded-br-[12px] border-l-4 border-[#bfff00] bg-[rgba(191,255,0,0.1)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 text-[14px] leading-[20px]">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-[24px] pt-[8px]">
        <Link
          href="https://github.com"
          target="_blank"
          className="flex items-center justify-center gap-[8px] rounded-[2px] border border-white/10 bg-[#2a2a2a] py-[9px] transition-colors hover:bg-[#333]"
        >
          <span className="font-mono text-[12px] leading-[16px] text-[#e5e2e1]">
            View on GitHub
          </span>
        </Link>
      </div>
    </aside>
  );
}

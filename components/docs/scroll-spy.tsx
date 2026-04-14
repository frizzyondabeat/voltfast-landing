'use client';

import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavItem {
  name: string;
  href: string;
}

interface DocsSidebarProps {
  items: NavItem[];
  version: string;
}

export function DocsSidebar({ items, version }: DocsSidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/docs') {
      return pathname === '/docs';
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

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
          const active = isActive(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'relative flex items-center gap-[12px] rounded-tr-[12px] rounded-br-[12px] px-[16px] py-[8px] transition-colors',
                active
                  ? 'font-bold text-[#bfff00]'
                  : 'font-normal text-[#6b7280] hover:bg-white/5 hover:text-[#e5e2e1]'
              )}
            >
              {active && (
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
          href="https://github.com/frizzyondabeat/volt-fast"
          target="_blank"
          rel="noopener noreferrer"
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

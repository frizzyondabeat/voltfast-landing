'use client';

import { cn } from 'lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from './scroll-spy';

interface DocsMobileNavProps {
  items: NavItem[];
}

export function DocsMobileNav({ items }: DocsMobileNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/docs'
      ? pathname === '/docs'
      : pathname === href || pathname.startsWith(href + '/');

  return (
    <nav
      aria-label="Docs section navigation"
      className="sticky top-[64px] z-40 w-full border-b border-white/5 bg-[#131313]/95 backdrop-blur-md md:hidden"
    >
      <div
        className="flex w-full items-center gap-[6px] overflow-x-auto px-[16px] py-[10px]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
      >
        {items.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex shrink-0 items-center gap-[6px] rounded-full px-[12px] py-[6px] font-mono text-[10px] font-bold tracking-[0.8px] uppercase transition-colors whitespace-nowrap',
                active
                  ? 'bg-[rgba(191,255,0,0.12)] text-[#bfff00] ring-[1px] ring-[rgba(191,255,0,0.2)]'
                  : 'text-[#6b7280] hover:bg-white/5 hover:text-[#e5e2e1]'
              )}
            >
              {active && (
                <span className="size-[5px] shrink-0 rounded-full bg-[#bfff00]" />
              )}
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

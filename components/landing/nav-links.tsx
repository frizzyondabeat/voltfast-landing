'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Docs', href: '/docs' },
  {
    name: 'GitHub',
    href: 'https://github.com/frizzyondabeat/volt-fast',
    external: true,
  },
  {
    name: 'NPM',
    href: 'https://npmx.dev/package/@frizzyondabeat/volt-fast',
    external: true,
  },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden shrink-0 items-center gap-[32px] md:flex">
      {NAV_LINKS.map((link) => {
        const isActive =
          pathname === link.href || pathname?.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.name}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="relative flex shrink-0 flex-col items-start pb-[6px]"
          >
            <div
              className={`font-space-grotesk flex h-[16px] flex-col justify-center text-[12px] font-bold tracking-[-0.3px] uppercase transition-colors ${
                isActive && !link.external
                  ? 'text-[#bfff00]'
                  : 'text-muted-foreground hover:text-foreground dark:text-[#a3a3a3] dark:hover:text-white'
              }`}
            >
              {link.name}
            </div>
            {isActive && !link.external && (
              <motion.div
                layoutId="navbar-active-indicator"
                className="absolute right-0 bottom-0 left-0 h-[2px] bg-[#bfff00]"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}

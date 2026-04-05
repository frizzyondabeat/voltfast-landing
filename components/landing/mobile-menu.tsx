'use client';

import { List, X, ArrowSquareOut } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

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

export function MobileMenu({ version }: { version: string }) {
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const pathname = usePathname();
  const isOpen = openPathname === pathname;
  const handleOpen = useCallback(() => setOpenPathname(pathname), [pathname]);
  const handleClose = useCallback(() => setOpenPathname(null), []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, isOpen]);

  return (
    <>
      {/* Hamburger trigger — mobile only */}
      <button
        type="button"
        onClick={handleOpen}
        className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-md transition-colors md:hidden dark:text-[#a3a3a3] dark:hover:text-white"
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-dialog"
      >
        <List weight="bold" size={22} />
      </button>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 32px)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 32px)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="bg-background fixed inset-0 z-[200] flex flex-col md:hidden dark:bg-[#131313]"
            id="mobile-menu-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Top bar — mirrors the desktop navbar */}
            <div className="border-border/40 flex items-center justify-between border-b px-6 py-4 dark:border-white/5">
              <Link
                href="/"
                onClick={handleClose}
                className="flex shrink-0 items-start gap-1"
              >
                <Image
                  src="/logo.svg"
                  alt="Volt Fast Logo"
                  width={32}
                  height={32}
                  priority={true}
                  loading='eager'
                  fetchPriority='high'
                />
                <div className="font-space-grotesk text-foreground flex h-[32px] flex-col justify-center text-[24px] font-bold tracking-[-1.2px] dark:text-white">
                  <p className="leading-[32px]">
                    Volt
                    <span className="text-[#b8f600]">Fast</span>
                  </p>
                </div>
              </Link>

              <button
                type="button"
                onClick={handleClose}
                className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-md transition-colors dark:text-[#a3a3a3] dark:hover:text-white"
                aria-label="Close menu"
              >
                <X weight="bold" size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-1 flex-col px-6 pt-6">
              {NAV_LINKS.map((link, i) => {
                const isActive =
                  !link.external &&
                  (pathname === link.href ||
                    pathname?.startsWith(`${link.href}/`));

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.28 + i * 0.07,
                      duration: 0.25,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      onClick={handleClose}
                      className={`border-border/40 group flex items-center justify-between border-b py-5 transition-colors dark:border-white/5 ${
                        isActive
                          ? 'text-[#bfff00]'
                          : 'text-foreground dark:text-white'
                      }`}
                    >
                      <span className="font-space-grotesk text-[28px] font-bold tracking-[-1px]">
                        {link.name}
                      </span>
                      {link.external && (
                        <ArrowSquareOut
                          size={20}
                          weight="bold"
                          className="text-muted-foreground dark:text-[#a3a3a3]"
                        />
                      )}
                      {isActive && (
                        <motion.div
                          layoutId="mobile-active-indicator"
                          className="h-2 w-2 rounded-full bg-[#bfff00]"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Footer — version + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.25, ease: 'easeOut' }}
              className="flex flex-col gap-4 px-6 pt-6 pb-12"
            >
              <Link
                href="#cta"
                onClick={handleClose}
                className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center rounded-[6px] py-4 transition-colors dark:bg-white dark:hover:bg-white/90"
              >
                <span className="font-space-grotesk text-primary-foreground text-[12px] font-bold tracking-[1px] uppercase dark:text-[#263500]">
                  Get Started
                </span>
              </Link>

              <p className="font-space-grotesk text-muted-foreground text-center text-[11px] font-bold tracking-[1px] uppercase dark:text-[#4a4a4a]">
                v{version}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

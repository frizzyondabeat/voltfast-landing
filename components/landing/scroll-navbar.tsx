'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { name: 'Docs', href: '/docs' },
  { name: 'GitHub', href: 'https://github.com/frizzyondabeat/volt-fast', external: true },
  { name: 'NPM', href: 'https://npmx.dev/package/@frizzyondabeat/volt-fast', external: true },
];

export function ScrollNavbar() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="scroll-nav"
          initial={{ y: -72, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -72, opacity: 0, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          className="fixed top-4 left-1/2 z-[200] -translate-x-1/2"
        >
          <nav
            aria-label="Floating navigation"
            className="flex items-center gap-3 rounded-full border border-white/10 bg-[#131313]/85 px-3 py-2 shadow-[0_0_0_1px_rgba(184,246,0,0.08),0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
          >
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-1.5 pl-1">
              <Image src="/logo.svg" alt="VoltFast" width={20} height={20} />
              <span className="font-['Space_Grotesk'] text-[15px] font-bold leading-none tracking-[-0.8px] text-white">
                Volt<span className="text-[#b8f600]">Fast</span>
              </span>
            </Link>

            <div className="h-4 w-px bg-white/10" />

            {/* Desktop links — hidden on small screens */}
            <div className="hidden items-center gap-4 sm:flex">
              {NAV_LINKS.map((link) => {
                const isActive =
                  !link.external &&
                  (pathname === link.href || pathname?.startsWith(`${link.href}/`));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className={`font-['Space_Grotesk'] text-[11px] font-bold tracking-[0.6px] uppercase transition-colors ${
                      isActive ? 'text-[#b8f600]' : 'text-[#9ca3af] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="h-4 w-px bg-white/10" />
            </div>

            {/* CTA */}
            <Link
              href="#cta"
              className="rounded-full bg-[#b8f600] px-4 py-1.5 font-['Space_Grotesk'] text-[10px] font-bold tracking-[1px] text-[#263500] uppercase transition-all hover:bg-[#c5ff00] hover:shadow-[0_0_16px_rgba(184,246,0,0.35)]"
            >
              Get Started
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { ScrollReveal } from 'components/landing/scroll-reveal';
import { CopyButton } from 'components/ui/copy-button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Introduction',
  description:
    'Get started with Voltfast CLI — zero-config scaffold for Next.js and React. Auto-configures Tailwind CSS, ESLint, Prettier & Shadcn UI in one command.',
  alternates: {
    canonical: '/docs',
  },
  openGraph: {
    title: 'Introduction | Voltfast',
    description:
      'Get started with Voltfast CLI — zero-config scaffold for Next.js and React. Auto-configures Tailwind CSS, ESLint, Prettier & Shadcn UI in one command.',
    url: '/docs',
  },
  twitter: {
    title: 'Introduction | Voltfast',
    description:
      'Get started with Voltfast CLI — zero-config scaffold for Next.js and React. Auto-configures Tailwind CSS, ESLint, Prettier & Shadcn UI in one command.',
  },
};

export default function DocsPage() {
  return (
    <div className="flex w-full flex-col items-start gap-[96px]">
      <ScrollReveal>
        <section
          className="flex w-full flex-col items-start gap-[16px]"
          id="introduction"
        >
          <div className="flex w-full items-center">
            <div className="flex flex-col items-start rounded-[2px] border border-[rgba(184,246,0,0.2)] bg-[rgba(184,246,0,0.1)] px-[9px] py-[3px]">
              <span className="font-mono text-[10px] leading-[15px] tracking-[1px] text-[#b8f600] uppercase">
                Open Source
              </span>
            </div>
          </div>

          <div className="flex w-full flex-col items-start">
            <h1 className="font-['Space_Grotesk'] text-[48px] leading-[1.1] font-bold tracking-[-3px] text-white md:text-[60px] md:leading-[60px]">
              Voltfast <br className="hidden md:block" />
              <span className="text-[#b8f600]">Documentation</span>
            </h1>
          </div>

          <div className="flex w-full max-w-[672px] flex-col items-start pt-[8px] pb-[24px]">
            <p className="text-[18px] leading-[1.6] text-[#c3caac] md:text-[20px] md:leading-[32.5px]">
              The ultra-fast CLI engine designed to scaffold, lint, and deploy
              modern applications with zero-config velocity. Built for
              developers who refuse to wait.
            </p>
          </div>

          {/* Install command */}
          <div className="self-start rounded-[4px] bg-gradient-to-r from-[rgba(184,246,0,0.5)] to-[rgba(184,246,0,0)] p-[4px]">
            <div className="flex items-center gap-[16px] rounded-[6px] bg-[#0e0e0e] py-[16px] pr-[16px] pl-[24px]">
              <span className="font-mono text-[16px] leading-[24px] text-[#b8f600]">
                $
              </span>
              <code className="mr-4 font-mono text-[16px] leading-[28px] text-[#e5e2e1] md:text-[18px]">
                npx @frizzyondabeat/volt-fast setup
              </code>
              <CopyButton
                npmCommand="npx @frizzyondabeat/volt-fast setup"
                pnpmCommand="pnpx @frizzyondabeat/volt-fast setup"
                bunCommand="bunx @frizzyondabeat/volt-fast setup"
              />
            </div>
          </div>

          {/* Internal links to sub-pages — important for crawl depth */}
          <nav
            className="mt-[8px] flex w-full max-w-[672px] flex-col gap-[12px]"
            aria-label="Documentation sections"
          >
            <p className="text-[14px] text-[#6b7280]">Jump to a section:</p>
            <ul className="flex flex-wrap gap-[8px]">
              {[
                { href: '/docs/quick-start', label: 'Quick Start' },
                { href: '/docs/features', label: 'Key Features' },
                { href: '/docs/supported-stacks', label: 'Supported Stacks' },
                { href: '/docs/contributing', label: 'Contributing' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center rounded-[4px] border border-white/10 bg-[#1c1b1b] px-[12px] py-[6px] font-mono text-[12px] text-[#c3caac] transition-colors hover:border-[#b8f600]/30 hover:text-[#b8f600]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </ScrollReveal>
    </div>
  );
}

import { IgnitionSequence } from '@/components/landing/ignition-sequence';
import { CTA } from 'components/landing/cta';
import { Features } from 'components/landing/features';
import { Hero } from 'components/landing/hero';
import { HomeClient } from 'components/landing/home-client';
import { ScrollReveal } from 'components/landing/scroll-reveal';
import { TechStack } from 'components/landing/tech-stack';
import { TerminalDemo } from 'components/landing/terminal-demo';
import { MainLayout } from 'components/layout/main-layout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Voltfast CLI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voltfast CLI is a zero-config command-line tool that scaffolds Next.js and React projects. It automatically installs and configures Tailwind CSS, ESLint, Prettier, TypeScript path aliases, and Shadcn UI — so you can start shipping features immediately without manual configuration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I install and use Voltfast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Run "npx @frizzyondabeat/volt-fast setup" (or "pnpx @frizzyondabeat/volt-fast setup" / "bunx @frizzyondabeat/volt-fast setup") inside any existing Next.js or React project. Voltfast detects your framework and configures all tooling automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'What frameworks does Voltfast support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voltfast currently supports Next.js 14+ (stable) and React with Vite (stable). Support for Astro and SvelteKit is planned for future releases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Voltfast free and open source?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Voltfast is completely free and open source under the MIT license. The source code is available on GitHub at github.com/frizzyondabeat/volt-fast.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Voltfast different from create-next-app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'create-next-app generates a new project from scratch. Voltfast runs inside an existing project and automatically wires up the full developer toolchain — Tailwind CSS, ESLint, Prettier, Shadcn UI, and TypeScript import aliases — eliminating hours of manual configuration.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Voltfast automatically configure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voltfast automatically installs and configures: Tailwind CSS with PostCSS, ESLint with React and TypeScript rules, Prettier with Tailwind and import-sort plugins, Shadcn UI with Radix primitives, TypeScript tsconfig path aliases, and Vitest for testing.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient>
        <MainLayout>
          <ScrollReveal>
            <Hero />
          </ScrollReveal>
          <ScrollReveal>
            <TechStack />
          </ScrollReveal>
          <ScrollReveal>
            <TerminalDemo />
          </ScrollReveal>
          <ScrollReveal>
            <Features />
          </ScrollReveal>
          <ScrollReveal>
            <IgnitionSequence />
          </ScrollReveal>
          <ScrollReveal>
            <CTA />
          </ScrollReveal>
        </MainLayout>
      </HomeClient>
    </>
  );
}

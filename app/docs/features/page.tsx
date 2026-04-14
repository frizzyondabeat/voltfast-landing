import { ScrollReveal } from 'components/landing/scroll-reveal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features — What Voltfast CLI Configures',
  description:
    'Voltfast automatically configures Tailwind CSS, ESLint, Prettier, Shadcn UI, TypeScript path aliases & Vitest for Next.js and React projects in one command.',
  alternates: {
    canonical: '/docs/features',
  },
  openGraph: {
    title: 'Features — What Voltfast CLI Configures | Voltfast',
    description:
      'Automatic Tailwind CSS, ESLint, Prettier, TypeScript aliases & Shadcn UI — all configured in one command.',
    url: '/docs/features',
  },
  twitter: {
    title: 'Features — What Voltfast CLI Configures | Voltfast',
    description:
      'Automatic Tailwind CSS, ESLint, Prettier, TypeScript aliases & Shadcn UI — all configured in one command.',
  },
};

const FEATURES = [
  {
    id: 'automatic-tooling',
    title: 'Automatic Tooling',
    description:
      'Instantly configures TypeScript, Vitest, and Tailwind with zero manual file creation required. Voltfast writes every config file so you never have to touch a tsconfig or postcss.config again.',
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    description:
      'Built-in patterns used by high-performance engineering teams at scale. Strict ESLint rules, enforced Prettier formatting, and consistent import ordering across your entire codebase.',
  },
  {
    id: 'format-and-lint',
    title: 'Format & Lint',
    description:
      'Aggressive linting rules that ensure code consistency across distributed teams. Includes @typescript-eslint/parser, eslint-plugin-react, eslint-plugin-react-hooks, and prettier-plugin-tailwindcss.',
  },
  {
    id: 'project-scaffolding',
    title: 'Project Scaffolding',
    description:
      'Generates a ready-to-use project structure with pre-built custom React hooks included. Supports Next.js 14+ App Router and React Vite projects out of the box.',
  },
  {
    id: 'shadcn-ui',
    title: 'Shadcn UI Integration',
    description:
      'Automatically initializes Shadcn UI with Radix UI primitives, writes components.json, and configures the component registry — ready for accessible, production-grade UI immediately.',
  },
  {
    id: 'typescript-aliases',
    title: 'TypeScript Path Aliases',
    description:
      'Updates tsconfig.json with sensible import aliases so you can import from @/components instead of ../../../../components across your entire project.',
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex w-full flex-col items-start gap-[96px]">
      <ScrollReveal>
        <section
          className="flex w-full flex-col items-start gap-[48px]"
          id="features"
        >
          <h1 className="font-['Space_Grotesk'] text-[48px] leading-[1.1] font-bold tracking-[-3px] text-white md:text-[60px] md:leading-[60px]">
            Key <span className="text-[#b8f600]">Features</span>
          </h1>

          <p className="max-w-[672px] text-[18px] leading-[1.6] text-[#c3caac] md:text-[20px]">
            Everything Voltfast configures automatically — so your project is
            production-ready from the first command.
          </p>

          <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                id={feature.id}
                className="flex h-full flex-col gap-[16px] rounded-[16px] border border-white/5 bg-[#1c1b1b] p-[32px]"
              >
                <h2 className="text-[18px] leading-[28px] font-bold text-[#e5e2e1]">
                  {feature.title}
                </h2>
                <p className="text-[14px] leading-[22.75px] text-[#c3caac]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}

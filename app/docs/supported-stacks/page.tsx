import { ScrollReveal } from 'components/landing/scroll-reveal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Supported Frameworks — Next.js, React, Vite',
  description:
    'Voltfast CLI supports Next.js 14+ and React with Vite (stable). Astro and SvelteKit support is planned. See the full framework compatibility matrix.',
  alternates: {
    canonical: '/docs/supported-stacks',
  },
  openGraph: {
    title: 'Supported Frameworks — Next.js, React, Vite | Voltfast',
    description:
      'Framework support matrix for Voltfast CLI — Next.js 14+, React Vite, Astro, and SvelteKit.',
    url: '/docs/supported-stacks',
  },
  twitter: {
    title: 'Supported Frameworks — Next.js, React, Vite | Voltfast',
    description:
      'Framework support matrix for Voltfast CLI — Next.js 14+, React Vite, Astro, and SvelteKit.',
  },
};

const STACKS = [
  {
    name: 'Next.js 14+',
    support: 'Full Scaffolding',
    status: 'STABLE',
    stable: true,
    description:
      'Full App Router scaffolding with Tailwind CSS, ESLint, Prettier, Shadcn UI, and TypeScript path aliases. Supports the latest Next.js 14+ App Router conventions.',
  },
  {
    name: 'React (Vite)',
    support: 'Core Engine',
    status: 'STABLE',
    stable: true,
    description:
      'Vite-based React projects with complete toolchain setup including Tailwind CSS, ESLint, Prettier, and Vitest for testing.',
  },
  {
    name: 'Astro',
    support: 'Basic Tooling',
    status: 'Planned',
    stable: false,
    description:
      'ESLint and Prettier configuration for Astro projects. Scaffolding support is on the roadmap.',
  },
  {
    name: 'SvelteKit',
    support: 'Project Scaffolding',
    status: 'Planned',
    stable: false,
    description:
      'Full project scaffolding for SvelteKit applications with Tailwind CSS integration.',
  },
];

export default function SupportedStacksPage() {
  return (
    <div className="flex w-full flex-col items-start gap-[96px]">
      <ScrollReveal>
        <section
          className="flex w-full flex-col items-start gap-[48px]"
          id="supported-stacks"
        >
          <h1 className="font-['Space_Grotesk'] text-[48px] leading-[1.1] font-bold tracking-[-3px] text-white md:text-[60px] md:leading-[60px]">
            Supported <span className="text-[#b8f600]">Stacks</span>
          </h1>

          <p className="max-w-[672px] text-[18px] leading-[1.6] text-[#c3caac] md:text-[20px]">
            Voltfast currently supports Next.js and React with Vite. Additional
            framework support is on the roadmap.
          </p>

          <div className="w-full overflow-hidden rounded-[8px] border border-white/5">
            <table className="w-full text-left">
              <thead className="border-b border-white/5 bg-[#2a2a2a]">
                <tr>
                  <th className="w-[33%] px-[24px] py-[16px] text-[12px] font-bold tracking-[1.2px] text-[#6b7280] uppercase">
                    Framework
                  </th>
                  <th className="w-[40%] px-[24px] py-[16px] text-[12px] font-bold tracking-[1.2px] text-[#6b7280] uppercase">
                    Support
                  </th>
                  <th className="w-[27%] px-[24px] py-[16px] text-[12px] font-bold tracking-[1.2px] text-[#6b7280] uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-[rgba(28,27,27,0.3)]">
                {STACKS.map((stack) => (
                  <tr key={stack.name}>
                    <td className="px-[24px] py-[16px] text-[16px] font-bold text-[#e5e2e1]">
                      {stack.name}
                    </td>
                    <td className="px-[24px] py-[16px] text-[14px] text-[#9ca3af]">
                      {stack.support}
                    </td>
                    <td className="px-[24px] py-[16px]">
                      <span
                        className={`rounded-[2px] px-[8px] py-[4px] font-mono text-[10px] uppercase ${
                          stack.stable
                            ? 'bg-[rgba(184,246,0,0.1)] text-[#b8f600]'
                            : 'bg-white/5 text-[#6b7280]'
                        }`}
                      >
                        {stack.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Keyword-rich descriptions for crawlers */}
          <div className="flex w-full flex-col gap-[32px]">
            {STACKS.map((stack) => (
              <div
                key={stack.name}
                id={stack.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                className="flex flex-col gap-[8px]"
              >
                <h2 className="text-[16px] font-bold text-[#e5e2e1]">
                  {stack.name} —{' '}
                  <span className="font-normal text-[#6b7280]">
                    {stack.support}
                  </span>
                </h2>
                <p className="max-w-[600px] text-[14px] leading-[22px] text-[#c3caac]">
                  {stack.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}

import { TerminalWindowIcon } from '@phosphor-icons/react/dist/ssr';
import { ScrollReveal } from 'components/landing/scroll-reveal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contributing to Voltfast CLI',
  description:
    'Contribute to Voltfast CLI — fork the repo, run the build, pass all tests, and submit a PR. All contributions welcome. Open source under MIT license.',
  alternates: {
    canonical: '/docs/contributing',
  },
  openGraph: {
    title: 'Contributing to Voltfast CLI | Voltfast',
    description:
      'Contribute to Voltfast CLI — fork the repo, run the build, pass all tests, and submit a PR.',
    url: '/docs/contributing',
  },
  twitter: {
    title: 'Contributing to Voltfast CLI | Voltfast',
    description:
      'Contribute to Voltfast CLI — fork the repo, run the build, pass all tests, and submit a PR.',
  },
};

export default function ContributingPage() {
  return (
    <div className="flex w-full flex-col items-start gap-[96px]">
      <ScrollReveal>
        <section
          className="flex w-full flex-col items-start gap-[32px]"
          id="contributing"
        >
          <h1 className="font-['Space_Grotesk'] text-[48px] leading-[1.1] font-bold tracking-[-3px] text-white md:text-[60px] md:leading-[60px]">
            <span className="text-[#b8f600]">Contributing</span>
          </h1>

          <div className="flex w-full max-w-[672px] flex-col items-start gap-[24px]">
            <p className="text-[16px] leading-[26px] text-[#c3caac]">
              Voltfast is an open ecosystem. We welcome contributions to the
              core CLI, framework templates, and documentation. The project is
              open source under the MIT license.
            </p>

            <div className="flex w-full flex-col gap-[16px] rounded-[4px] border-l-2 border-[#b8f600] bg-[#0e0e0e] p-[24px]">
              <div className="flex items-center gap-[8px]">
                <TerminalWindowIcon className="text-[#b8f600]" />
                <h2 className="text-[16px] leading-[24px] font-bold text-[#e5e2e1]">
                  Contribution Workflow
                </h2>
              </div>

              <ol className="flex list-inside list-decimal flex-col gap-[8px] text-[14px] text-[#9ca3af] marker:text-[#6b7280]">
                <li className="pl-[8px] leading-[20px]">
                  Fork the repository and create your feature branch.
                </li>
                <li className="pl-[8px] leading-[20px]">
                  Run{' '}
                  <code className="mx-[4px] rounded-[2px] bg-white/5 px-[4px] py-[1px] font-mono text-[14px] text-white">
                    npm run build
                  </code>{' '}
                  to check for type errors.
                </li>
                <li className="pl-[8px] leading-[20px]">
                  Ensure all tests pass using{' '}
                  <code className="mx-[4px] rounded-[2px] bg-white/5 px-[4px] py-[1px] font-mono text-[14px] text-white">
                    npm test
                  </code>
                  .
                </li>
                <li className="pl-[8px] leading-[20px]">
                  Submit a PR with a detailed description of your changes.
                </li>
              </ol>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h2 className="text-[16px] leading-[24px] font-bold text-[#e5e2e1]">
                What to Contribute
              </h2>
              <ul className="flex flex-col gap-[6px] text-[14px] leading-[22px] text-[#c3caac]">
                <li>
                  <span className="text-[#b8f600]">→</span> New framework
                  templates (Astro, SvelteKit, Remix)
                </li>
                <li>
                  <span className="text-[#b8f600]">→</span> Additional tooling
                  presets (Biome, Oxlint, Bun)
                </li>
                <li>
                  <span className="text-[#b8f600]">→</span> Bug fixes and
                  performance improvements
                </li>
                <li>
                  <span className="text-[#b8f600]">→</span> Documentation
                  improvements
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}

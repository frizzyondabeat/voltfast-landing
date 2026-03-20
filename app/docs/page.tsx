import { TerminalWindowIcon } from '@phosphor-icons/react/dist/ssr';
import { ScrollReveal } from 'components/landing/scroll-reveal';
import { CopyButton } from 'components/ui/copy-button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'The ultra-fast CLI engine designed to scaffold, lint, and deploy modern applications.',
  openGraph: {
    title: 'Documentation | Voltfast',
    description:
      'The ultra-fast CLI engine designed to scaffold, lint, and deploy modern applications.',
    url: '/docs',
  },
  twitter: {
    title: 'Documentation | Voltfast',
    description:
      'The ultra-fast CLI engine designed to scaffold, lint, and deploy modern applications.',
  },
};

export default function DocsPage() {
  return (
    <div className="flex w-full flex-col items-start gap-[96px]">
      {/* Introduction Section */}
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

          {/* Terminal Command Box */}
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
        </section>
      </ScrollReveal>

      {/* Quick Start Section */}
      <ScrollReveal>
        <section
          className="flex w-full flex-col items-start gap-[32px]"
          id="quick-start"
        >
          <div className="flex w-full items-center gap-[16px]">
            <div className="h-px flex-1 bg-white/5" />
            <h2 className="font-['Space_Grotesk'] text-[24px] leading-[36px] font-bold text-[#e5e2e1] md:text-[30px]">
              Quick Start
            </h2>
            <div className="h-px w-[96px] bg-[#b8f600]" />
          </div>

          <div className="flex w-full flex-col items-start gap-[48px]">
            {/* Step 1 */}
            <div className="flex w-full flex-col items-start gap-[24px] md:flex-row">
              <div className="flex flex-row items-center gap-[16px] self-stretch md:flex-col md:gap-0">
                <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[12px] border border-white/10 bg-[#2a2a2a]">
                  <span className="font-mono text-[12px] leading-[16px] text-[#b8f600]">
                    01
                  </span>
                </div>
                <div className="my-[8px] h-px flex-1 bg-white/5 md:h-auto md:min-h-[100px] md:w-px" />
              </div>

              <div className="flex w-full flex-col items-start gap-[12px] pb-[32px]">
                <h3 className="text-[20px] leading-[28px] font-bold text-[#e5e2e1]">
                  Create a New Project
                </h3>
                <p className="max-w-[600px] text-[16px] leading-[24px] text-[#c3caac]">
                  Start by generating a new Next.js or Vite React application.
                </p>

                <div className="mt-4 w-full overflow-hidden rounded-[8px] border border-white/5 bg-[#0e0e0e]">
                  <div className="flex items-center gap-[8px] border-b border-white/5 px-[24px] py-[16px]">
                    <div className="size-[12px] rounded-full bg-red-500/20" />
                    <div className="size-[12px] rounded-full bg-yellow-500/20" />
                    <div className="size-[12px] rounded-full bg-green-500/20" />
                  </div>
                  <div className="flex flex-col gap-[8px] p-[24px] font-mono text-[14px]">
                    <div className="flex items-center gap-[8px]">
                      <span className="text-[#b8f600]">❯</span>
                      <span className="text-[#e5e2e1]">
                        npx create-next-app@latest my-fast-app
                      </span>
                    </div>
                    <div className="mt-2 text-[#9ca3af]"># Or using Vite</div>
                    <div className="flex items-center gap-[8px]">
                      <span className="text-[#b8f600]">❯</span>
                      <span className="text-[#e5e2e1]">
                        npm create vite@latest my-fast-app -- --template
                        react-ts
                      </span>
                    </div>
                  </div>
                  <div className="h-[4px] w-full bg-gradient-to-r from-[#b8f600] to-transparent" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex w-full flex-col items-start gap-[24px] md:flex-row">
              <div className="flex flex-row items-center gap-[16px] self-stretch md:flex-col md:gap-0">
                <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[12px] border border-white/10 bg-[#2a2a2a]">
                  <span className="font-mono text-[12px] leading-[16px] text-[#b8f600]">
                    02
                  </span>
                </div>
                <div className="my-[8px] h-px flex-1 bg-white/5 md:h-auto md:min-h-[100px] md:w-px" />
              </div>

              <div className="flex w-full flex-col items-start gap-[12px] pb-[32px]">
                <h3 className="text-[20px] leading-[28px] font-bold text-[#e5e2e1]">
                  Initialize Voltfast
                </h3>
                <p className="max-w-[600px] text-[16px] leading-[24px] text-[#c3caac]">
                  Navigate into your project and run the Voltfast setup command
                  to configure Tailwind, animations, and essential utilities.
                </p>

                <div className="mt-4 w-full overflow-hidden rounded-[8px] border border-white/5 bg-[#0e0e0e]">
                  <div className="flex items-center gap-[8px] border-b border-white/5 px-[24px] py-[16px]">
                    <div className="size-[12px] rounded-full bg-red-500/20" />
                    <div className="size-[12px] rounded-full bg-yellow-500/20" />
                    <div className="size-[12px] rounded-full bg-green-500/20" />
                  </div>
                  <div className="flex flex-col gap-[8px] p-[24px] font-mono text-[14px]">
                    <div className="flex items-center gap-[8px]">
                      <span className="text-[#b8f600]">❯</span>
                      <span className="text-[#e5e2e1]">cd my-fast-app</span>
                    </div>
                    <div className="mt-2 flex items-center gap-[8px]">
                      <span className="text-[#b8f600]">❯</span>
                      <span className="text-[#e5e2e1]">
                        pnpx @frizzyondabeat/volt-fast setup
                      </span>
                    </div>
                    <div className="mt-4 text-[#9cf0ff]">
                      ✔ Detected framework: nextjs
                    </div>
                    <div className="text-[#9cf0ff]">
                      ✔ Installing dependencies...
                    </div>
                    <div className="text-[#9cf0ff]">
                      ✔ Configuring Tailwind CSS...
                    </div>
                    <div className="text-[#9cf0ff]">
                      ✔ Adding utility functions...
                    </div>
                    <div className="mt-2 text-[#b8f600]">
                      ✨ Setup complete!
                    </div>
                  </div>
                  <div className="h-[4px] w-full bg-[#b8f600]" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex w-full flex-col items-start gap-[24px] md:flex-row">
              <div className="flex flex-row items-center gap-[16px] self-stretch md:flex-col md:gap-0">
                <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[12px] border border-white/10 bg-[#2a2a2a]">
                  <span className="font-mono text-[12px] leading-[16px] text-[#b8f600]">
                    03
                  </span>
                </div>
                <div className="my-[8px] h-px flex-1 bg-transparent md:h-auto md:min-h-[100px] md:w-px" />
              </div>

              <div className="flex w-full flex-col items-start gap-[12px] pb-[32px]">
                <h3 className="text-[20px] leading-[28px] font-bold text-[#e5e2e1]">
                  Start Development Server
                </h3>
                <p className="max-w-[600px] text-[16px] leading-[24px] text-[#c3caac]">
                  Fire up the kinetic engine. Our Turbopack-powered dev server
                  boots in milliseconds.
                </p>

                <div className="mt-4 w-full overflow-hidden rounded-[8px] border border-white/5 bg-[#0e0e0e]">
                  <div className="flex items-center gap-[8px] border-b border-white/5 px-[24px] py-[16px]">
                    <div className="size-[12px] rounded-full bg-red-500/20" />
                    <div className="size-[12px] rounded-full bg-yellow-500/20" />
                    <div className="size-[12px] rounded-full bg-green-500/20" />
                  </div>
                  <div className="flex flex-col gap-[8px] p-[24px] font-mono text-[14px]">
                    <div className="flex items-center gap-[8px]">
                      <span className="text-[#b8f600]">❯</span>
                      <span className="text-[#e5e2e1]">npm run dev</span>
                    </div>
                    <div className="mt-2 text-[#9cf0ff]">
                      ▲ Next.js 14.2.0 (Turbopack)
                    </div>
                    <div className="text-[#9ca3af]">
                      - Local: http://localhost:3000
                    </div>
                    <div className="mt-2 text-[#b8f600]">✓ Ready in 142ms</div>
                  </div>
                  <div className="h-[4px] w-full bg-gradient-to-r from-transparent to-[#b8f600]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Key Features Section */}
      <ScrollReveal>
        <section
          className="flex w-full flex-col items-start gap-[48px]"
          id="features"
        >
          <div className="flex w-full items-center gap-[16px]">
            <div className="h-px flex-1 bg-white/5" />
            <h2 className="font-['Space_Grotesk'] text-[24px] leading-[36px] font-bold text-[#e5e2e1] md:text-[30px]">
              Key Features
            </h2>
            <div className="h-px w-[96px] bg-[#b8f600]" />
          </div>

          <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2">
            {/* Feature 1 */}
            <div className="flex h-full flex-col gap-[24px] rounded-[16px] border border-white/5 bg-[#1c1b1b] p-[32px]">
              <div className="flex size-[48px] items-center justify-center rounded-[8px] bg-[rgba(184,246,0,0.1)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V12"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8H12.01"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h4 className="text-[18px] leading-[28px] font-bold text-[#e5e2e1]">
                  Automatic Tooling
                </h4>
                <p className="text-[14px] leading-[22.75px] text-[#c3caac]">
                  Instantly configures TypeScript, Vitest, and Tailwind with
                  zero manual file creation required.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex h-full flex-col gap-[24px] rounded-[16px] border border-white/5 bg-[#1c1b1b] p-[32px]">
              <div className="flex size-[48px] items-center justify-center rounded-[8px] bg-[rgba(184,246,0,0.1)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h4 className="text-[18px] leading-[28px] font-bold text-[#e5e2e1]">
                  Best Practices
                </h4>
                <p className="text-[14px] leading-[22.75px] text-[#c3caac]">
                  Built-in patterns used by high-performance engineering teams
                  at scale.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex h-full flex-col gap-[24px] rounded-[16px] border border-white/5 bg-[#1c1b1b] p-[32px]">
              <div className="flex size-[48px] items-center justify-center rounded-[8px] bg-[rgba(184,246,0,0.1)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V8H20"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 13H8"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17H8"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 9H8"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h4 className="text-[18px] leading-[28px] font-bold text-[#e5e2e1]">
                  Format & Lint
                </h4>
                <p className="text-[14px] leading-[22.75px] text-[#c3caac]">
                  Aggressive linting rules that ensure code consistency across
                  distributed teams.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex h-full flex-col gap-[24px] rounded-[16px] border border-white/5 bg-[#1c1b1b] p-[32px]">
              <div className="flex size-[48px] items-center justify-center rounded-[8px] bg-[rgba(184,246,0,0.1)]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 16V8C20.9996 7.64927 20.9071 7.30671 20.7315 7.00116C20.556 6.6956 20.303 6.43573 20 6.24L13 2.24C12.695 2.06411 12.3511 1.97168 12 1.97168C11.6489 1.97168 11.305 2.06411 11 2.24L4 6.24C3.69701 6.43573 3.44403 6.6956 3.26846 7.00116C3.09289 7.30671 3.0004 7.64927 3 8V16C3.0004 16.3507 3.09289 16.6933 3.26846 16.9988C3.44403 17.3044 3.69701 17.5643 4 17.76L11 21.76C11.305 21.9359 11.6489 22.0283 12 22.0283C12.3511 22.0283 12.695 21.9359 13 21.76L20 17.76C20.303 17.5643 20.556 17.3044 20.7315 16.9988C20.9071 16.6933 20.9996 16.3507 21 16Z"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.27002 6.95996L12 12.01L20.73 6.95996"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22.0801V12"
                    stroke="#B8F600"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h4 className="text-[18px] leading-[28px] font-bold text-[#e5e2e1]">
                  Project Scaffolding
                </h4>
                <p className="text-[14px] leading-[22.75px] text-[#c3caac]">
                  Generate components, services, and routes with a single
                  kinetic command.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Supported Stacks Section */}
      <ScrollReveal>
        <section
          className="flex w-full flex-col items-start gap-[32px]"
          id="supported-stacks"
        >
          <div className="flex w-full items-center gap-[16px]">
            <div className="h-px flex-1 bg-white/5" />
            <h2 className="font-['Space_Grotesk'] text-[24px] leading-[36px] font-bold text-[#e5e2e1] md:text-[30px]">
              Supported Stacks
            </h2>
            <div className="h-px w-[96px] bg-[#b8f600]" />
          </div>

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
                <tr>
                  <td className="px-[24px] py-[16px] text-[16px] font-bold text-[#e5e2e1]">
                    Next.js 14+
                  </td>
                  <td className="px-[24px] py-[16px] text-[14px] text-[#9ca3af]">
                    Full Scaffolding
                  </td>
                  <td className="px-[24px] py-[16px]">
                    <span className="rounded-[2px] bg-[rgba(184,246,0,0.1)] px-[8px] py-[4px] font-mono text-[10px] text-[#b8f600] uppercase">
                      STABLE
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-[24px] py-[16px] text-[16px] font-bold text-[#e5e2e1]">
                    React (Vite)
                  </td>
                  <td className="px-[24px] py-[16px] text-[14px] text-[#9ca3af]">
                    Core Engine
                  </td>
                  <td className="px-[24px] py-[16px]">
                    <span className="rounded-[2px] bg-[rgba(184,246,0,0.1)] px-[8px] py-[4px] font-mono text-[10px] text-[#b8f600] uppercase">
                      STABLE
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-[24px] py-[16px] text-[16px] font-bold text-[#e5e2e1]">
                    Astro
                  </td>
                  <td className="px-[24px] py-[16px] text-[14px] text-[#9ca3af]">
                    Basic Tooling
                  </td>
                  <td className="px-[24px] py-[16px]">
                    <span className="rounded-[2px] bg-white/5 px-[8px] py-[4px] font-mono text-[10px] text-[#6b7280] uppercase">
                      Planned
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-[24px] py-[16px] text-[16px] font-bold text-[#e5e2e1]">
                    SvelteKit
                  </td>
                  <td className="px-[24px] py-[16px] text-[14px] text-[#9ca3af]">
                    Project Scaffolding
                  </td>
                  <td className="px-[24px] py-[16px]">
                    <span className="rounded-[2px] bg-white/5 px-[8px] py-[4px] font-mono text-[10px] text-[#6b7280] uppercase">
                      Planned
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </ScrollReveal>

      {/* Contributing Section */}
      <ScrollReveal>
        <section
          className="flex w-full flex-col items-start gap-[32px]"
          id="contributing"
        >
          <div className="flex w-full items-center gap-[16px]">
            <div className="h-px flex-1 bg-white/5" />
            <h2 className="font-['Space_Grotesk'] text-[24px] leading-[36px] font-bold text-[#e5e2e1] md:text-[30px]">
              Contributing
            </h2>
            <div className="h-px w-[96px] bg-[#b8f600]" />
          </div>

          <div className="flex w-full max-w-[672px] flex-col items-start gap-[24px]">
            <p className="text-[16px] leading-[26px] text-[#c3caac]">
              Voltfast is an open ecosystem. We welcome contributions to the
              core CLI, framework templates, and documentation.
            </p>

            <div className="flex w-full flex-col gap-[16px] rounded-[4px] border-l-2 border-[#b8f600] bg-[#0e0e0e] p-[24px]">
              <div className="flex items-center gap-[8px]">
                <TerminalWindowIcon className="text-[#b8f600]" />
                <h5 className="text-[16px] leading-[24px] font-bold text-[#e5e2e1]">
                  Workflow
                </h5>
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
                  Submit a PR with a detailed description of changes.
                </li>
              </ol>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}

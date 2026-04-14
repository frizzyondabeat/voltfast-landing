import { ScrollReveal } from 'components/landing/scroll-reveal';
import { CopyButton } from 'components/ui/copy-button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quick Start — Scaffold Next.js in Seconds',
  description:
    '3-step guide: scaffold a Next.js or React project, run Voltfast CLI to auto-configure Tailwind CSS, ESLint & Prettier, then start your dev server.',
  alternates: {
    canonical: '/docs/quick-start',
  },
  openGraph: {
    title: 'Quick Start — Scaffold Next.js in Seconds | Voltfast',
    description:
      '3-step guide: scaffold a Next.js or React project, run Voltfast CLI to auto-configure Tailwind CSS, ESLint & Prettier, then start your dev server.',
    url: '/docs/quick-start',
  },
  twitter: {
    title: 'Quick Start — Scaffold Next.js in Seconds | Voltfast',
    description:
      '3-step guide: scaffold a Next.js or React project, run Voltfast CLI to auto-configure Tailwind CSS, ESLint & Prettier, then start your dev server.',
  },
};

const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to set up a Next.js project with Voltfast CLI',
  description:
    'Scaffold and configure a production-ready Next.js project with Tailwind CSS, ESLint, Prettier, and Shadcn UI using the Voltfast CLI in three steps.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Create a new project',
      text: 'Generate a new Next.js or Vite React application using create-next-app or create-vite.',
      url: 'https://voltfast.vercel.app/docs/quick-start#create-project',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Initialize Voltfast',
      text: 'Run "npx @frizzyondabeat/volt-fast setup" inside your project. Voltfast auto-detects your framework and configures Tailwind CSS, ESLint, Prettier, TypeScript aliases, and Shadcn UI.',
      url: 'https://voltfast.vercel.app/docs/quick-start#initialize',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Start the development server',
      text: 'Run "npm run dev". Your environment is fully configured and ready to ship features.',
      url: 'https://voltfast.vercel.app/docs/quick-start#start-server',
    },
  ],
};

export default function QuickStartPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <div className="flex w-full flex-col items-start gap-[96px]">
        <ScrollReveal>
          <section
            className="flex w-full flex-col items-start gap-[32px]"
            id="quick-start"
          >
            <h1 className="font-['Space_Grotesk'] text-[48px] leading-[1.1] font-bold tracking-[-3px] text-white md:text-[60px] md:leading-[60px]">
              Quick <span className="text-[#b8f600]">Start</span>
            </h1>

            <div className="flex w-full flex-col items-start gap-[48px]">
              {/* Step 1 */}
              <div
                className="flex w-full flex-col items-start gap-[24px] md:flex-row"
                id="create-project"
              >
                <div className="flex flex-row items-center gap-[16px] self-stretch md:flex-col md:gap-0">
                  <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[12px] border border-white/10 bg-[#2a2a2a]">
                    <span className="font-mono text-[12px] leading-[16px] text-[#b8f600]">
                      01
                    </span>
                  </div>
                  <div className="my-[8px] h-px flex-1 bg-white/5 md:h-auto md:min-h-[100px] md:w-px" />
                </div>
                <div className="flex w-full flex-col items-start gap-[12px] pb-[32px]">
                  <h2 className="text-[20px] leading-[28px] font-bold text-[#e5e2e1]">
                    Create a New Project
                  </h2>
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
              <div
                className="flex w-full flex-col items-start gap-[24px] md:flex-row"
                id="initialize"
              >
                <div className="flex flex-row items-center gap-[16px] self-stretch md:flex-col md:gap-0">
                  <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[12px] border border-white/10 bg-[#2a2a2a]">
                    <span className="font-mono text-[12px] leading-[16px] text-[#b8f600]">
                      02
                    </span>
                  </div>
                  <div className="my-[8px] h-px flex-1 bg-white/5 md:h-auto md:min-h-[100px] md:w-px" />
                </div>
                <div className="flex w-full flex-col items-start gap-[12px] pb-[32px]">
                  <h2 className="text-[20px] leading-[28px] font-bold text-[#e5e2e1]">
                    Initialize Voltfast
                  </h2>
                  <p className="max-w-[600px] text-[16px] leading-[24px] text-[#c3caac]">
                    Navigate into your project and run the Voltfast setup
                    command to configure Tailwind, animations, and essential
                    utilities.
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
                  <div className="mt-2 flex items-center gap-[12px]">
                    <p className="text-[14px] leading-[20px] text-[#c3caac]">
                      Also works with:
                    </p>
                    <div className="rounded-[6px] bg-[#0e0e0e] px-[16px] py-[8px]">
                      <CopyButton
                        npmCommand="npx @frizzyondabeat/volt-fast setup"
                        pnpmCommand="pnpx @frizzyondabeat/volt-fast setup"
                        bunCommand="bunx @frizzyondabeat/volt-fast setup"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div
                className="flex w-full flex-col items-start gap-[24px] md:flex-row"
                id="start-server"
              >
                <div className="flex flex-row items-center gap-[16px] self-stretch md:flex-col md:gap-0">
                  <div className="flex size-[32px] shrink-0 items-center justify-center rounded-[12px] border border-white/10 bg-[#2a2a2a]">
                    <span className="font-mono text-[12px] leading-[16px] text-[#b8f600]">
                      03
                    </span>
                  </div>
                  <div className="my-[8px] h-px flex-1 bg-transparent md:h-auto md:min-h-[100px] md:w-px" />
                </div>
                <div className="flex w-full flex-col items-start gap-[12px] pb-[32px]">
                  <h2 className="text-[20px] leading-[28px] font-bold text-[#e5e2e1]">
                    Start Development Server
                  </h2>
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
                      <div className="mt-2 text-[#b8f600]">
                        ✓ Ready in 142ms
                      </div>
                    </div>
                    <div className="h-[4px] w-full bg-gradient-to-r from-transparent to-[#b8f600]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </>
  );
}

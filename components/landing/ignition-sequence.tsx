import { Section, SectionContainer } from 'components/layout/section';
import { cn } from 'lib/utils';

const SEQUENCE_STEPS = [
  {
    number: '01',
    title: 'SCAFFOLD',
    description:
      'Spin up your foundation. Whether it is Next.js, React, or Vite, start with a clean slate ready for augmentation.',
    command: 'pnpx create-next-app@latest',
    highlight: false,
  },
  {
    number: '02',
    title: 'INJECT',
    description:
      'Execute the Voltfast engine. We automatically install, configure, and wire up your entire developer toolchain in seconds.',
    command: 'pnpx @frizzyondabeat/volt-fast setup',
    highlight: false,
  },
  {
    number: '03',
    title: 'ACCELERATE',
    description:
      'Start building immediately. Your environment is perfectly optimized with strict typing, linting, and formatting out of the box.',
    command: 'pnpm dev',
    highlight: true,
  },
];

export function IgnitionSequence() {
  return (
    <Section>
      <SectionContainer className="px-8 py-24 md:px-16 md:py-32">
        <div className="mb-20 flex w-full flex-col items-center">
          <h2 className="font-space-grotesk text-center text-[24px] font-bold tracking-[3px] text-[#e5e2e3] uppercase md:text-[30px]">
            IGNITION_SEQUENCE
          </h2>
        </div>

        <div className="grid w-full grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-12">
          {SEQUENCE_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative flex h-full w-full flex-col items-start"
            >
              {/* Background Number */}
              <div className="font-space-grotesk absolute top-[-2px] left-[-16px] -translate-y-1/2 text-[60px] leading-none font-bold text-[#3b494b]/40 select-none md:text-[#3b494b]/20">
                {step.number}
              </div>

              <div className="relative z-10 flex h-full w-full flex-col gap-4 pt-4">
                <h3 className="font-space-grotesk text-[20px] leading-[28px] font-bold text-[#e5e2e3] uppercase">
                  {step.title}
                </h3>

                <p className="font-inter min-h-[48px] text-[14px] leading-[20px] text-[#b9cacb]">
                  {step.description}
                </p>

                <div
                  className={cn(
                    'mt-auto flex w-full flex-col items-start rounded-[2px] border p-[13px]',
                    step.highlight
                      ? 'border-[#bfff00]/30 bg-[#bfff00]/10'
                      : 'border-[#3b494b]/10 bg-[#201f20]'
                  )}
                >
                  <code
                    className={cn(
                      'font-mono text-[12px] leading-[16px]',
                      step.highlight ? 'text-[#bfff00]' : 'text-[#e5e2e3]'
                    )}
                  >
                    {step.command}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
}

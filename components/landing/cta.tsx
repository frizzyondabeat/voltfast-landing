import { CopyCommand } from 'components/copy-command';
import { Section } from 'components/layout/section';

export function CTA() {
  return (
    <Section id="cta" className="border-b-0">
      <div className="flex w-full max-w-[1440px] flex-col border-x border-white/5 md:flex-row">
        <div className="flex w-full flex-col gap-8 border-white/5 px-8 py-[96px] md:w-1/2 md:border-r md:px-[96px]">
          <h2 className="font-space-grotesk max-w-[800px] text-5xl leading-none font-bold tracking-[-3.6px] text-white uppercase md:text-[72px]">
            READY TO BREAK THE SOUND BARRIER?
          </h2>
          <p className="font-inter max-w-[448px] text-lg leading-[28px] font-light text-[#737373]">
            Join the elite circle of developers building at the speed of
            thought. Your next project starts with a single command.
          </p>
        </div>

        {/* CTA Overlay Component */}
        <div className="z-10 flex w-full flex-col items-center justify-center bg-[#b8f600]/5 px-8 py-[96px] md:w-1/2 md:py-[190px]">
          <CopyCommand command="pnpx @frizzyondabeat/volt-fast setup" />
        </div>
      </div>
    </Section>
  );
}

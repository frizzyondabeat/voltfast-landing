import { HeroEvervaultBg } from './hero-evervault-bg';
import { HeroHighlight } from './hero-highlight';
import { Section, SectionContainer } from 'components/layout/section';
import Link from 'next/link';

export function Hero() {
  return (
    <Section>
      <SectionContainer className="group/hero overflow-hidden px-4 pt-32 pb-16">
        <HeroEvervaultBg />

        <h1 className="font-space-grotesk relative z-10 mb-8 text-center text-6xl leading-none font-light tracking-[-0.05em] md:text-[128px]">
          <span className="sr-only">Voltfast CLI — Zero-Config Scaffold for Next.js &amp; React. </span>
          Setup,{' '}
          <HeroHighlight>
            <span className="font-bold">Simplified.</span>
          </HeroHighlight>
        </h1>

        <p className="font-inter relative z-10 mb-12 max-w-[580px] text-center text-lg leading-relaxed font-light text-[#737373] md:text-xl">
          A high-velocity toolkit designed for builders who value precision over
          noise. Deploy your next project in milliseconds, not minutes.
        </p>

        <div className="relative z-10 flex flex-row items-center gap-4">
          <Link
            href={'#cta'}
            className="font-space-grotesk cursor-pointer bg-white px-8 py-3.5 text-[10px] font-bold tracking-[1px] text-black uppercase transition-colors hover:bg-white/90"
          >
            Initialize Project
          </Link>
          <Link
            href={'/docs'}
            className="font-space-grotesk border border-white/10 px-8 py-3.5 text-[10px] font-bold tracking-[1px] text-[#e5e2e1] uppercase transition-colors hover:bg-white/5"
          >
            Read Docs
          </Link>
        </div>
      </SectionContainer>
    </Section>
  );
}

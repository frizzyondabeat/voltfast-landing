import { IgnitionSequence } from '@/components/landing/ignition-sequence';
import { CTA } from 'components/landing/cta';
import { Features } from 'components/landing/features';
import { Hero } from 'components/landing/hero';
import { HomeClient } from 'components/landing/home-client';
import { ScrollReveal } from 'components/landing/scroll-reveal';
import { TechStack } from 'components/landing/tech-stack';
import { TerminalDemo } from 'components/landing/terminal-demo';
import { MainLayout } from 'components/layout/main-layout';

export default function Home() {
  return (
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
  );
}

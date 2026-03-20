'use client';

import { Lightning, Wrench, TreeStructure } from '@phosphor-icons/react';
import { Section } from 'components/layout/section';
import { CanvasRevealEffect } from 'components/ui/canvas-reveal-effect';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const FEATURES = [
  {
    title: 'Accelerated Setup',
    description:
      'Skip the boilerplate phase. Voltfast dramatically accelerates your project setup so you can start shipping features in milliseconds.',
    icon: Lightning,
    colors: [[191, 255, 0]], // Lime
  },
  {
    title: 'Automated Tooling',
    description:
      'Zero-friction environments. Automatically configures ESLint, Prettier, Tailwind, and all your essential developer tooling.',
    icon: Wrench,
    colors: [[0, 229, 255]], // Cyan
  },
  {
    title: 'Scalable Architecture',
    description:
      'Start on solid ground. Built-in best practices, strict formatting rules, and production-ready project architecture out of the box.',
    icon: TreeStructure,
    colors: [[255, 136, 0]], // Orange
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group/canvas-card relative flex w-full flex-col items-start overflow-hidden px-8 py-16 md:px-16 ${
        index !== 2 ? 'border-b border-white/5 md:border-b-0' : ''
      } ${index !== 0 ? 'md:border-l md:border-white/5' : ''}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute inset-0 z-0 h-full w-full"
      >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-transparent"
          colors={feature.colors}
          dotSize={2}
        />
        <div className="absolute inset-0 bg-transparent [mask-image:radial-gradient(400px_at_center,white,transparent)]" />
      </motion.div>

      <div className="relative z-10 flex w-full flex-col">
        <div className="relative mb-12 h-8 w-8">
          <feature.icon
            weight="duotone"
            className={`h-full w-full text-[#b8f600] transition-opacity duration-300 ${
              index !== 2
                ? 'opacity-70 group-hover/canvas-card:opacity-100'
                : ''
            }`}
          />
        </div>
        <h3 className="font-space-grotesk mb-4 text-2xl font-bold tracking-[-0.6px] text-white uppercase transition-all duration-300 group-hover/canvas-card:-translate-y-1">
          {feature.title}
        </h3>
        <p className="font-inter max-w-[280px] text-sm leading-[22.75px] font-light text-[#737373] transition-all duration-300 group-hover/canvas-card:-translate-y-1 group-hover/canvas-card:text-neutral-300">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <Section>
      <div className="grid w-full max-w-[1440px] grid-cols-1 border-x border-white/5 md:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </Section>
  );
}

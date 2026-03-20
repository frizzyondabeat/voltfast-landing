'use client';

import { Section, SectionContainer } from 'components/layout/section';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TECH_STACK = [
  { name: 'React', icon: '/icons/techs/react.svg' },
  { name: 'Next.js', icon: '/icons/techs/next.js.svg' },
  { name: 'TypeScript', icon: '/icons/techs/typescript.svg' },
  { name: 'Vite', icon: '/icons/techs/vite.svg' },
  { name: 'Tailwind CSS', icon: '/icons/techs/tailwind.svg' },
  { name: 'ESLint', icon: '/icons/techs/eslint.svg' },
  { name: 'Prettier', icon: '/icons/techs/prettier.svg' },
  { name: 'Jest', icon: '/icons/techs/jest.svg' },
  { name: 'Storybook', icon: '/icons/techs/storybook.svg' },
];

export function TechStack() {
  // Duplicate the array so it can loop seamlessly
  const duplicatedStack = [...TECH_STACK, ...TECH_STACK];

  return (
    <Section className="flex-row justify-center bg-[#0e0e0e]/10">
      <SectionContainer className="overflow-hidden border-dashed py-12 opacity-50">
        <div className="relative flex w-full overflow-hidden">
          {/* Gradient mask to fade out the edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#131313] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#131313] to-transparent"></div>

          <motion.div
            className="flex w-max shrink-0 items-center gap-16 pr-16"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {duplicatedStack.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex shrink-0 items-center gap-2"
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={25}
                  height={25}
                  className="h-5 w-auto opacity-70"
                />
                <span className="font-mono text-[10px] tracking-[1px] text-[#e5e2e1] uppercase">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </SectionContainer>
    </Section>
  );
}

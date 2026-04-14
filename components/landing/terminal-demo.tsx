'use client';

import { Section, SectionContainer } from 'components/layout/section';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const TERMINAL_STEPS = [
  <p key="1" className="mb-4 text-[#B8F600]">
    ➜ <span className="text-cyan-400">voltfast</span>{' '}
    <span className="text-white">pnpx @frizzyondabeat/volt-fast setup</span>
  </p>,
  <p key="2" className="text-orange-400">
    Boilerplate CLI 🤓
  </p>,
  <p key="3" className="mb-4 text-white">
    Let&apos;s set up your project!
  </p>,
  <div key="4" className="mb-2 flex gap-2">
    <span className="text-[#B8F600]">◇</span>
    <div>
      <p className="text-white">What tools would you like to use?</p>
      <p className="text-xs text-[#a3a3a3]">
        Recommended: All of them. They work really well together.
      </p>
      <p className="text-[#a3a3a3]">Tailwind, ESLint, Prettier, Shadcn UI</p>
    </div>
  </div>,
  <div key="5" className="mb-4 flex gap-2">
    <span className="text-[#B8F600]">◇</span>
    <p className="text-white">
      Write Tailwind CSS file? <span className="text-[#a3a3a3]">Yes</span>
    </p>
  </div>,
  <div key="6" className="mb-4 rounded border border-purple-500/30 p-3">
    <p className="mb-2 text-purple-400">
      <span className="mr-2">i</span>CLI will run the following npm command:
    </p>
    <p className="text-xs text-[#a3a3a3]">
      pnpm add -D tailwindcss postcss @tailwindcss/postcss eslint
      eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser
      eslint-plugin-prettier prettier @trivago/prettier-plugin-sort-imports
      prettier-plugin-tailwindcss
    </p>
  </div>,
  <div key="7" className="mb-4 flex gap-2">
    <span className="text-[#B8F600]">◇</span>
    <p className="text-white">
      Continue? <span className="text-[#a3a3a3]">Yes</span>
    </p>
  </div>,
  <p key="8" className="mb-1">
    <span className="mr-2 text-green-500">✔</span>Installed dependencies
  </p>,
  <p key="9" className="mb-1">
    <span className="mr-2 text-green-500">✔</span>Added Tailwind
  </p>,
  <p key="10" className="mb-1">
    <span className="mr-2 text-green-500">✔</span>Added Prettier
  </p>,
  <p key="11" className="mb-1">
    <span className="mr-2 text-green-500">✔</span>Added ESLint
  </p>,
  <p key="12" className="mb-1">
    <span className="mr-2 text-green-500">✔</span>Updated tsconfig.json with
    import aliases.
  </p>,
  <p key="13" className="mb-1">
    <span className="mr-2 text-green-500">✔</span>Select a component library »{' '}
    <span className="text-[#a3a3a3]">Radix</span>
  </p>,
  <p key="14" className="mb-1">
    <span className="mr-2 text-green-500">✔</span>Which preset would you like to
    use? » <span className="text-[#a3a3a3]">Lyra</span>
  </p>,
  <p key="15" className="mb-1">
    <span className="mr-2 text-green-500">✔</span>Writing components.json.
  </p>,
  <p key="16" className="mb-4">
    <span className="mr-2 text-green-500">✔</span>Shadcn UI initialized
    successfully.
  </p>,
  <p key="17" className="mb-4 text-[#e879f9]">
    🌸 Done! You just saved{' '}
    <span className="bg-purple-500/20 px-1">a few minutes</span> in your day.
    Enjoy the little things in life. ✨
  </p>,
  <p key="18" className="text-[#B8F600]">
    ➜ <span className="text-cyan-400">voltfast</span>{' '}
    <span className="text-white">pnpm dev</span>
    <span className="animate-pulse text-white">_</span>
  </p>,
];

const TEXT_STEPS = [
  {
    title: 'Instant Setup',
    description:
      'Initialize your project with a single command. Voltfast handles the boilerplate so you don’t have to.',
  },
  {
    title: 'Modern Tooling',
    description:
      'Get Tailwind, ESLint, and Prettier perfectly configured out of the box. No more configuration fatigue.',
  },
  {
    title: 'Beautiful Components',
    description:
      'Integrated with Shadcn UI and Radix primitives. Build accessible, beautiful interfaces in minutes.',
  },
  {
    title: 'Ready to Ship',
    description:
      'Your project is ready. Start your dev server and focus on building features, not infrastructure.',
  },
];

export function TerminalDemo() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeTextIndex, setActiveTextIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Map scroll progress to terminal width/position (0 to 0.2 represents the initial animation)
  const terminalWidth = useTransform(scrollYProgress, (latest) => {
    if (isMobile) return '100%';
    if (latest <= 0) return '100%';
    if (latest >= 0.2) return '50%';
    // interpolate between 100% and 50%
    const progress = latest / 0.2;
    return `${100 - progress * 50}%`;
  });

  const terminalScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const terminalX = useTransform(scrollYProgress, (latest) => {
    if (isMobile) return '0%';
    if (latest <= 0) return '0%';
    if (latest >= 0.2) return '100%';
    // interpolate between 0% and 100%
    const progress = latest / 0.2;
    return `${progress * 100}%`;
  });

  const terminalY = useTransform(scrollYProgress, (latest) => {
    if (!isMobile) return 0;
    if (latest <= 0) return 0;
    if (latest >= 0.2) return 150; // push down 150px on mobile
    const progress = latest / 0.2;
    return progress * 150;
  });

  const textY = useTransform(scrollYProgress, (latest) => {
    if (!isMobile) return 0;
    if (latest <= 0) return 0;
    if (latest >= 0.2) return -180; // push up 180px on mobile
    const progress = latest / 0.2;
    return -(progress * 180);
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [0, 0, 1]); // Force opacity 0 from 0 to 0.2

  const [hasReachedRight, setHasReachedRight] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Determine if terminal has reached the right
    setHasReachedRight((prev) => {
      if (latest >= 0.2 && !prev) return true;
      if (latest < 0.2 && prev) return false;
      return prev;
    });

    // Start terminal typing *after* the initial shrink/move animation (after 0.2 progress)
    // We map 0.2 -> 0.85 to 0 -> 1.0 for the terminal steps
    // This leaves the last 15% of scroll for the final state to remain fully visible
    const typingProgress = Math.max(0, Math.min(1, (latest - 0.2) / 0.65));

    // Ensure smooth progression up to the total number of steps
    const count =
      typingProgress === 0
        ? 1
        : Math.min(
            TERMINAL_STEPS.length,
            Math.ceil(typingProgress * TERMINAL_STEPS.length)
          );

    setVisibleCount((prev) => (prev !== count ? count : prev));

    // Determine active text phase based on visibleCount
    let newIndex = 0;
    if (count >= 16) {
      newIndex = 3;
    } else if (count >= 12) {
      newIndex = 2;
    } else if (count >= 4) {
      newIndex = 1;
    }

    setActiveTextIndex((prev) => (prev !== newIndex ? newIndex : prev));
  });

  useEffect(() => {
    if (scrollContainerRef.current) {
      const el = scrollContainerRef.current;
      el.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleCount]);

  return (
    <Section ref={containerRef} className="relative z-10 h-[600vh]">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        <SectionContainer className="h-full justify-center px-8 md:px-16">
          <div className="relative w-full">
            <div className="flex w-full items-center justify-between">
              {/* Left/Top: Sticky Text */}
              <motion.div
                className="absolute left-0 z-10 flex w-full flex-col justify-center md:w-1/2 md:pr-12"
                style={{ opacity: textOpacity, y: textY }}
              >
                <div className="relative h-[220px] w-full md:h-[180px] lg:h-[220px]">
                  {TEXT_STEPS.map((step, index) => {
                    const isActive =
                      activeTextIndex === index && hasReachedRight;

                    const isPast = index < activeTextIndex;

                    return (
                      <motion.div
                        key={index}
                        className="absolute top-0 left-0 w-full"
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0,
                          filter: isActive ? 'blur(0px)' : 'blur(12px)',
                          scale: isActive ? 1 : isPast ? 1.1 : 0.9,
                          y: isActive ? 0 : isPast ? -40 : 40,
                          pointerEvents: isActive ? 'auto' : 'none',
                        }}
                        transition={{
                          duration: 0.5,
                          ease: 'easeInOut',
                        }}
                      >
                        <h2 className="font-space-grotesk mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          {step.title}
                        </h2>
                        <p className="text-lg text-[#a3a3a3]">
                          {step.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right/Center: Terminal */}
              <motion.div
                className="w-full"
                style={{
                  width: terminalWidth,
                  x: terminalX,
                  y: terminalY,
                  scale: terminalScale,
                }}
              >
                <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-[#0e0e0e] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 border-b border-white/10 bg-[#1c1b1b] px-4 py-3">
                    <div className="flex shrink-0 gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400/20" />
                    </div>
                    <div className="ml-4">
                      <p className="font-mono text-[10px] tracking-[1px] text-[#525252] uppercase">
                        volt-terminal — zsh
                      </p>
                    </div>
                  </div>
                  {/* Terminal Body */}
                  <div
                    ref={scrollContainerRef}
                    className="scrollbar-hide h-[350px] w-full overflow-hidden font-mono text-sm leading-relaxed text-[#a3a3a3] lg:h-[400px]"
                    style={{
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      pointerEvents: 'none', // Prevent scroll hijacking completely
                    }}
                  >
                    <div className="p-6">
                      {TERMINAL_STEPS.slice(0, visibleCount).map(
                        (step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {step}
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </Section>
  );
}

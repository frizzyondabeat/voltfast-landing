'use client';

import { useActiveSection } from '@/hooks/use-active-section';
import { motion } from 'framer-motion';
import { cn } from 'lib/utils';
import { usePathname } from 'next/navigation';

interface TocItem {
  name: string;
  href: string;
}

const TOC_BY_PATH: Record<string, TocItem[]> = {
  '/docs': [
    { name: 'Introduction', href: '/docs#introduction' },
  ],
  '/docs/quick-start': [
    { name: 'Create a New Project', href: '/docs/quick-start#create-project' },
    { name: 'Initialize Voltfast', href: '/docs/quick-start#initialize' },
    { name: 'Start Dev Server', href: '/docs/quick-start#start-server' },
  ],
  '/docs/features': [
    { name: 'Automatic Tooling', href: '/docs/features#automatic-tooling' },
    { name: 'Best Practices', href: '/docs/features#best-practices' },
    { name: 'Format & Lint', href: '/docs/features#format-and-lint' },
    { name: 'Project Scaffolding', href: '/docs/features#project-scaffolding' },
    { name: 'Shadcn UI', href: '/docs/features#shadcn-ui' },
    { name: 'TypeScript Aliases', href: '/docs/features#typescript-aliases' },
  ],
  '/docs/supported-stacks': [
    { name: 'Next.js 14+', href: '/docs/supported-stacks#next-js-14-' },
    { name: 'React (Vite)', href: '/docs/supported-stacks#react--vite-' },
    { name: 'Astro', href: '/docs/supported-stacks#astro' },
    { name: 'SvelteKit', href: '/docs/supported-stacks#sveltekit' },
  ],
  '/docs/contributing': [
    { name: 'Contribution Workflow', href: '/docs/contributing#contributing' },
  ],
};

export function DocsToc({ version }: { version: string }) {
  const pathname = usePathname();
  const items = TOC_BY_PATH[pathname] ?? [];
  const { activeId, setActiveId } = useActiveSection(items);

  return (
    <aside className="sticky top-[64px] hidden h-[calc(100vh-64px)] w-[256px] shrink-0 flex-col gap-[24px] self-start overflow-y-auto border-l border-white/5 bg-[#131313] px-[32px] py-[32px] xl:flex">
      <div className="w-full">
        <h4 className="text-[10px] leading-[15px] font-bold tracking-[2px] text-[#4b5563] uppercase">
          On this page
        </h4>
      </div>

      <nav className="flex w-full flex-col gap-[16px] pb-[24px]">
        {items.map((item) => {
          const id = item.href.split('#')[1] || '';
          const active = activeId === id;

          return (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'relative flex items-center text-[12px] leading-[16px] font-medium transition-colors',
                active
                  ? 'text-[#b8f600]'
                  : 'text-[#6b7280] hover:text-[#e5e2e1]'
              )}
              onClick={() => setActiveId(id)}
            >
              {active && (
                <motion.div
                  layoutId="toc-active-indicator"
                  className="absolute top-0 bottom-0 left-0 w-px bg-[#b8f600]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span
                className={cn(
                  'transition-all duration-300',
                  active ? 'pl-[17px]' : 'pl-[16px]'
                )}
              >
                {item.name}
              </span>
            </a>
          );
        })}
      </nav>

      <div className="flex w-full flex-col gap-[8px] rounded-[8px] border border-[rgba(184,246,0,0.1)] bg-[rgba(184,246,0,0.05)] p-[24px]">
        <div className="font-mono text-[10px] leading-[15px] text-[#b8f600]">
          PRO TIP
        </div>
        <div className="text-[11px] leading-[16.5px] text-[#9ca3af]">
          Press{' '}
          <kbd className="mx-1 rounded-[2px] border border-white/10 bg-[#2a2a2a] px-[7px] py-[1.5px] font-mono text-white">
            /
          </kbd>{' '}
          to search the documentation instantly.
        </div>
      </div>
    </aside>
  );
}

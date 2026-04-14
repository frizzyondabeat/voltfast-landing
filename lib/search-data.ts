export interface SearchEntry {
  id: string;
  page: string;
  section?: string;
  keywords: string;
  href: string;
}

export const SEARCH_INDEX: SearchEntry[] = [
  // Introduction
  {
    id: 'intro',
    page: 'Introduction',
    section: 'Overview',
    keywords:
      'voltfast cli zero config scaffold open source npm install setup introduction what is',
    href: '/docs',
  },
  {
    id: 'intro-install',
    page: 'Introduction',
    section: 'Installation',
    keywords:
      'npx pnpx bunx install @frizzyondabeat/volt-fast setup command run',
    href: '/docs#introduction',
  },

  // Quick Start
  {
    id: 'qs-create',
    page: 'Quick Start',
    section: 'Create a New Project',
    keywords:
      'create next app vite react typescript new project scaffold generate create-next-app',
    href: '/docs/quick-start#create-project',
  },
  {
    id: 'qs-init',
    page: 'Quick Start',
    section: 'Initialize Voltfast',
    keywords:
      'initialize voltfast setup run tailwind eslint prettier typescript configure detect framework',
    href: '/docs/quick-start#initialize',
  },
  {
    id: 'qs-server',
    page: 'Quick Start',
    section: 'Start Development Server',
    keywords:
      'npm run dev start development server turbopack localhost 3000 ready boot',
    href: '/docs/quick-start#start-server',
  },

  // Features
  {
    id: 'feat-tooling',
    page: 'Features',
    section: 'Automatic Tooling',
    keywords:
      'typescript vitest tailwind config postcss tsconfig automatic zero config file generation',
    href: '/docs/features#automatic-tooling',
  },
  {
    id: 'feat-practices',
    page: 'Features',
    section: 'Best Practices',
    keywords:
      'eslint strict rules prettier formatting import order best practices engineering teams',
    href: '/docs/features#best-practices',
  },
  {
    id: 'feat-lint',
    page: 'Features',
    section: 'Format & Lint',
    keywords:
      'eslint prettier @typescript-eslint react hooks tailwindcss plugin format lint code style consistency',
    href: '/docs/features#format-and-lint',
  },
  {
    id: 'feat-scaffold',
    page: 'Features',
    section: 'Project Scaffolding',
    keywords:
      'scaffolding components custom react hooks hooks useDebounce useFetch project structure nextjs vite',
    href: '/docs/features#project-scaffolding',
  },
  {
    id: 'feat-shadcn',
    page: 'Features',
    section: 'Shadcn UI Integration',
    keywords:
      'shadcn radix ui components.json registry accessible production grade component library init',
    href: '/docs/features#shadcn-ui',
  },
  {
    id: 'feat-aliases',
    page: 'Features',
    section: 'TypeScript Path Aliases',
    keywords:
      'typescript tsconfig paths aliases @/components imports absolute paths resolve',
    href: '/docs/features#typescript-aliases',
  },

  // Supported Stacks
  {
    id: 'stacks-nextjs',
    page: 'Supported Stacks',
    section: 'Next.js 14+',
    keywords:
      'nextjs 14 15 app router tailwind shadcn typescript eslint stable full scaffolding support',
    href: '/docs/supported-stacks#next-js-14-',
  },
  {
    id: 'stacks-vite',
    page: 'Supported Stacks',
    section: 'React (Vite)',
    keywords:
      'react vite tailwind eslint prettier vitest testing stable core engine support',
    href: '/docs/supported-stacks#react--vite-',
  },
  {
    id: 'stacks-astro',
    page: 'Supported Stacks',
    section: 'Astro',
    keywords: 'astro eslint prettier planned roadmap coming soon basic tooling',
    href: '/docs/supported-stacks#astro',
  },
  {
    id: 'stacks-svelte',
    page: 'Supported Stacks',
    section: 'SvelteKit',
    keywords:
      'sveltekit tailwind planned roadmap coming soon project scaffolding',
    href: '/docs/supported-stacks#sveltekit',
  },

  // Contributing
  {
    id: 'contrib',
    page: 'Contributing',
    section: 'Contribution Workflow',
    keywords:
      'fork repository feature branch build test npm pr pull request MIT open source contribute contributing',
    href: '/docs/contributing#contributing',
  },
];

export function searchDocs(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return SEARCH_INDEX.filter(
    (entry) =>
      entry.page.toLowerCase().includes(q) ||
      entry.section?.toLowerCase().includes(q) ||
      entry.keywords.toLowerCase().includes(q)
  ).slice(0, 10);
}

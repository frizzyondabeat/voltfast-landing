import { DocsSidebar } from 'components/docs/scroll-spy';
import { DocsToc } from 'components/docs/docs-toc';
import { SearchModal } from 'components/docs/search-modal';
import { MainLayout } from 'components/layout/main-layout';
import { getLatestVersion } from 'lib/utils';
import { ReactNode } from 'react';

export const navigation = [
  { name: 'Introduction', href: '/docs' },
  { name: 'Quick Start', href: '/docs/quick-start' },
  { name: 'Features', href: '/docs/features' },
  { name: 'Supported Stacks', href: '/docs/supported-stacks' },
  { name: 'Contributing', href: '/docs/contributing' },
];

export default async function DocsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const version = await getLatestVersion();

  return (
    <MainLayout>
      <SearchModal />
      <div className="relative flex w-full max-w-[1440px] flex-1 items-start">
        {/* Left Sidebar — path-based navigation */}
        <DocsSidebar items={navigation} version={version} />

        {/* Main Content Area */}
        <div className="max-w-[1024px] flex-1 px-[24px] py-[48px] md:px-[80px]">
          {children}
        </div>

        {/* Right Sidebar — per-page TOC, self-managed via usePathname */}
        <DocsToc version={version} />
      </div>
    </MainLayout>
  );
}

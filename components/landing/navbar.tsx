import { MobileMenu } from './mobile-menu';
import { NavLinks } from './nav-links';
import { cn, getLatestVersion } from 'lib/utils';
import Image from 'next/image';
import Link from 'next/link';








export async function Navbar({ className }: { className?: string }) {
  const version = await getLatestVersion();

  return (
    <nav
      className={cn('border-border/40 border-b dark:border-white/5', className)}
    >
      <div className="border-border/40 bg-background relative z-50 mx-auto flex w-full max-w-[1440px] items-center justify-between border-x px-6 py-4 md:px-8 dark:border-white/5 dark:bg-[#131313]">
        {/* Logo */}
        <Link href={'/'} className="flex shrink-0 items-start gap-1">
          <Image
            src="/logo.svg"
            alt="Volt Fast Logo"
            width={32}
            height={32}
            priority={true}
            loading="eager"
            fetchPriority='high'
          />
          <div className="font-space-grotesk text-foreground flex h-[32px] flex-col justify-center text-[24px] font-bold tracking-[-1.2px] dark:text-white">
            <p className="leading-[32px]">
              Volt
              <span className="text-[#b8f600]">Fast</span>
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <NavLinks />

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-4 pr-[2.82px] md:flex">
          {/* <OnlineStatus /> */}
          <div className="flex shrink-0 flex-col items-center justify-center">
            <div className="font-space-grotesk text-muted-foreground flex h-[15px] flex-col justify-center text-[10px] font-bold tracking-[1px] uppercase dark:text-[#a3a3a3]">
              v{version}
            </div>
          </div>
          <Link
            href="#cta"
            className="bg-primary hover:bg-primary/90 flex shrink-0 items-center justify-center rounded-[6px] px-[20px] py-[8px] transition-colors dark:bg-white dark:hover:bg-white/90"
          >
            <div className="font-space-grotesk text-primary-foreground flex h-[15px] flex-col justify-center text-[10px] font-bold tracking-[1px] uppercase dark:text-[#263500]">
              Get Started
            </div>
          </Link>
        </div>

        {/* Mobile hamburger + full-screen menu */}
        <MobileMenu version={version} />
      </div>
    </nav>
  );
}

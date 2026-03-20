import { Footer } from 'components/landing/footer';
import { Navbar } from 'components/landing/navbar';
import { cn } from 'lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div
      className={cn(
        'bg-background text-foreground relative flex min-h-screen w-full flex-col font-sans dark:bg-[#131313] dark:text-white',
        className
      )}
    >
      <Navbar />
      <main className="border-border/40 relative z-10 flex w-full flex-1 flex-col items-center border-b dark:border-white/5">
        {children}
      </main>
      <Footer />
    </div>
  );
}

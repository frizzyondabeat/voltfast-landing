import './globals.css';
import { LenisProvider } from 'components/providers/lenis-provider';
import { ThemeProvider } from 'components/providers/theme-provider';
import { cn } from 'lib/utils';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  ),
  title: {
    default: 'Voltfast - Setup, Simplified',
    template: '%s | Voltfast',
  },
  description:
    'A high-velocity toolkit designed for builders. Scaffold, lint, and deploy modern applications.',
  keywords: [
    'CLI',
    'scaffold',
    'lint',
    'deploy',
    'Next.js',
    'React',
    'Tailwind CSS',
    'TypeScript',
    'Voltfast',
  ],
  authors: [
    {
      name: 'frizzyondabeat',
      url: 'https://github.com/frizzyondabeat',
    },
  ],
  creator: 'frizzyondabeat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Voltfast - Setup, Simplified',
    description:
      'A high-velocity toolkit designed for builders. Scaffold, lint, and deploy modern applications.',
    siteName: 'Voltfast',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voltfast - Setup, Simplified',
    description:
      'A high-velocity toolkit designed for builders. Scaffold, lint, and deploy modern applications.',
    creator: '@frizzyondabeat',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'h-full antialiased',
        inter.variable,
        spaceGrotesk.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="bg-background text-foreground flex min-h-screen flex-col font-sans dark:bg-[#131313] dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

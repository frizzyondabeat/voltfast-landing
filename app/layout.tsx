import './globals.css';
import { Analytics } from '@vercel/analytics/next';
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

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'https://voltfast.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: 'Voltfast CLI — Zero-Config Next.js & React Setup',
    template: '%s | Voltfast',
  },
  description:
    'Zero-config CLI that scaffolds Next.js & React projects — auto-configures Tailwind CSS, ESLint, Prettier & Shadcn UI in seconds. Run npx @frizzyondabeat/volt-fast setup to start.',
  keywords: [
    'Voltfast CLI',
    'zero-config CLI',
    'scaffold Next.js project',
    'Next.js CLI tool',
    'React project scaffold CLI',
    'auto configure Tailwind CSS',
    'Next.js setup tool',
    'create Next.js app CLI',
    'Tailwind ESLint Prettier setup',
    'Shadcn UI setup CLI',
    'TypeScript React scaffold',
    'npx scaffold nextjs tailwind typescript',
    'developer CLI tool',
    'project scaffolding tool',
    'Voltfast',
  ],
  authors: [
    {
      name: 'frizzyondabeat',
      url: 'https://github.com/frizzyondabeat',
    },
  ],
  creator: 'frizzyondabeat',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: [
      {
        url: `/api/og`,
        width: 1200,
        height: 630,
        alt: 'Voltfast CLI — Zero-Config Setup for Next.js & React',
      },
    ],
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Voltfast CLI — Zero-Config Next.js & React Setup',
    description:
      'Zero-config CLI that scaffolds Next.js & React projects — auto-configures Tailwind CSS, ESLint, Prettier & Shadcn UI in seconds.',
    siteName: 'Voltfast',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voltfast CLI — Zero-Config Next.js & React Setup',
    description:
      'Zero-config CLI that scaffolds Next.js & React projects — auto-configures Tailwind CSS, ESLint, Prettier & Shadcn UI in seconds.',
    creator: '@frizzyondabeat',
  },
  verification: {
    google: 'K4geIT8fNMI29xFGOG__MLyI_3SngOull-aBvrkiZ9Q',
  },
};

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Voltfast CLI',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Windows, macOS, Linux',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Zero-config CLI for scaffolding Next.js and React projects — auto-configures Tailwind CSS, ESLint, Prettier, TypeScript aliases, and Shadcn UI.',
  url: APP_URL,
  downloadUrl: 'https://www.npmjs.com/package/@frizzyondabeat/volt-fast',
  installUrl: 'https://www.npmjs.com/package/@frizzyondabeat/volt-fast',
  softwareVersion: 'latest',
  keywords:
    'CLI, Next.js, React, scaffold, Tailwind CSS, ESLint, Prettier, TypeScript, Shadcn UI',
  author: {
    '@type': 'Person',
    name: 'frizzyondabeat',
    url: 'https://github.com/frizzyondabeat',
  },
  license: 'https://opensource.org/licenses/MIT',
  isAccessibleForFree: true,
  featureList: [
    'Auto-configure Tailwind CSS',
    'Auto-configure ESLint',
    'Auto-configure Prettier',
    'Shadcn UI initialization',
    'TypeScript path aliases',
    'Next.js 14+ full scaffolding',
    'React Vite project scaffolding',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Voltfast',
  url: APP_URL,
  description:
    'Zero-config CLI for scaffolding Next.js and React projects.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${APP_URL}/docs?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground flex min-h-screen flex-col font-sans dark:bg-[#131313] dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

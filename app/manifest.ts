import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Voltfast - Setup, Simplified',
    short_name: 'Voltfast',
    description: 'A high-velocity toolkit designed for builders. Scaffold, lint, and deploy modern applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#131313',
    theme_color: '#b8f600',
    icons: [
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

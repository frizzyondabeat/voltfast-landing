import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Voltfast OpenGraph Image';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  try {
    const logoData = await fetch(
      new URL('../public/logo.svg', import.meta.url)
    ).then((res) => res.arrayBuffer());

    const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logoData).toString('base64')}`;

    return new ImageResponse(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#131313', // Using the dark theme background color
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
          }}
        >
          <img src={logoSrc} alt="Voltfast Logo" height={120} width={120} />
          
        </div>
        
      </div>,
      {
        ...size,
      }
    );
  } catch (e: any) {
    return new Response('Failed to generate OG image', {
      status: 500,
      statusText: e.message,
    });
  }
}

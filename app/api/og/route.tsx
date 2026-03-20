import { ImageResponse } from 'next/og';

export const runtime = 'edge'; // Use Edge for better performance

export async function GET() {
  try {
    const logoData = await fetch(
      new URL(
        '../../../public/logo.svg',
        import.meta.url
      )
    ).then((res) => res.arrayBuffer());

    const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logoData).toString('base64')}`;

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--grey-1)',
          }}
        >
          <img src={logoSrc} alt="Voltfast OpenGraph Image" height={350} />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response('Failed to generate OG image', {
      status: 500,
      statusText: e.message,
    });
  }
}

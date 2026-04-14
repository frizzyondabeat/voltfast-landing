import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  try {
    return new ImageResponse(
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          backgroundColor: '#131313',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Lime accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            background: 'linear-gradient(to bottom, #b8f600, rgba(184,246,0,0))',
          }}
        />

        {/* Open source badge */}
        <div
          style={{
            position: 'absolute',
            top: '72px',
            left: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#b8f600',
            }}
          />
          <span
            style={{
              fontSize: '14px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#b8f600',
              fontWeight: 700,
            }}
          >
            Open Source CLI
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '40px',
          }}
        >
          <span
            style={{
              fontSize: '80px',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1,
              letterSpacing: '-3px',
            }}
          >
            Voltfast CLI
          </span>
          <span
            style={{
              fontSize: '30px',
              fontWeight: 300,
              color: '#737373',
              lineHeight: 1.3,
              maxWidth: '680px',
            }}
          >
            Zero-config scaffold for Next.js &amp; React. Tailwind, ESLint,
            Prettier — wired up in seconds.
          </span>
        </div>

        {/* Install command */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            backgroundColor: '#0e0e0e',
            border: '1px solid rgba(184,246,0,0.3)',
            borderRadius: '6px',
            padding: '16px 28px',
          }}
        >
          <span style={{ fontSize: '22px', color: '#b8f600', fontWeight: 700 }}>
            $
          </span>
          <span
            style={{
              fontSize: '22px',
              color: '#e5e2e1',
              letterSpacing: '0.5px',
            }}
          >
            npx @frizzyondabeat/volt-fast setup
          </span>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Unknown error';
    return new Response('Failed to generate OG image', {
      status: 500,
      statusText: message,
    });
  }
}

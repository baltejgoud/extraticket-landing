import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const DownloadCTA: React.FC = () => {
  const revealRef = useScrollReveal({ threshold: 0.5 });

  return (
    <section id="download" className="section" style={{ padding: '6rem 0', background: 'var(--bg-color)' }}>
      <div className="container">
        <div
          ref={revealRef}
          className="reveal glass-panel"
          style={{
            padding: '4rem 2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(15, 118, 110, 0.08), rgba(249, 115, 22, 0.08))',
            border: '1px solid rgba(15, 118, 110, 0.2)',
            borderRadius: 'var(--radius-2xl)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '300px',
              height: '300px',
              border: '2px solid var(--primary-light)',
              borderRadius: '50%',
              animation: 'pulse-ring 4s infinite',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '520px',
              height: '520px',
              border: '1px solid var(--primary-light)',
              borderRadius: '50%',
              animation: 'pulse-ring 4s infinite 1s',
              zIndex: 0,
            }}
          />

          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Ready to <span className="text-gradient">get extra seats</span>?
            </h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
              Join thousands of fans already buying and selling tickets securely.
              Download Extra Ticket today and never miss a show again.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  padding: '0.75rem 1.75rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  background: '#1f1a14',
                  color: '#fff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 13.5c-.73 2.58.37 4.81 2.84 5.75 1.03.37 2.25.44 3.12.1.52-.2.97-.52 1.33-.93.52-.62.89-1.44 1.01-2.3.04-.3.04-.6 0-.9-.12-.86-.49-1.68-1.01-2.3-.36-.41-.81-.73-1.33-.93-.87-.34-2.09-.27-3.12.1-2.47.94-3.57 3.17-2.84 5.75zm3.14-5.84c.36-.4.81-.72 1.33-.92.87-.34 2.09-.27 3.12.1 2.47.94 3.57 3.17 2.84 5.75-.73 2.58-3.48 4.08-6.29 3.34-1.03-.37-1.97-1.09-2.63-2.04-.4-.57-.68-1.24-.82-1.95-.04-.3-.04-.6 0-.9.14-.71.42-1.38.82-1.95.66-.95 1.6-1.67 2.63-2.04zM7.5 1C3.36 1 0 4.36 0 8.5S3.36 16 7.5 16c2.14 0 4.08-.88 5.47-2.29L20.29.21C19.97.08 19.63 0 19.26 0 17.5 0 16 1.5 16 3.26v8.48c-1.39 1.41-3.33 2.29-5.47 2.29C3.36 16 0 12.64 0 8.5h7.5V1zm0 13c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
                <span>App Store</span>
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  padding: '0.75rem 1.75rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  background: '#1f1a14',
                  color: '#fff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186A1.5 1.5 0 0 1 1.5 20.804V3.196a1.5 1.5 0 0 1 2.109-1.382zM15.5 1h7a1.5 1.5 0 0 1 1.5 1.5v19a1.5 1.5 0 0 1-1.5 1.5h-7V1z" />
                </svg>
                <span>Google Play</span>
              </a>
            </div>

            <p style={{ marginTop: '2rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              Requires iOS 15.0 or later / Android 10.0 or later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;

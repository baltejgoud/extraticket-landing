import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HowItWorks: React.FC = () => {
  const revealRef = useScrollReveal({ threshold: 0.2 });

  const steps = [
    {
      num: '01',
      title: 'Browse events',
      desc: 'Find the show you want to attend. Filter by date, artist, or venue to get exactly what you need.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Book securely',
      desc: 'Pay with confidence. Funds are held safely until the ticket is transferred.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Go to the show',
      desc: 'Receive your ticket instantly. Scan at the door and enjoy the event without stress.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9h18" />
          <path d="M7 4v16" />
          <path d="M17 4v16" />
          <rect x="3" y="9" width="18" height="10" rx="2" ry="2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="section" style={{ background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>How It Works</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Three simple steps to secure your spot at the next big event.
          </p>
        </div>

        <div
          ref={revealRef}
          className="reveal reveal-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '15%',
              right: '15%',
              height: '2px',
              background: 'var(--border)',
              zIndex: 0,
              display: 'none',
            }}
            className="hidden md-block"
          />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-panel hover-lift"
              style={{ padding: '2.5rem 2rem', textAlign: 'center', position: 'relative', zIndex: 10 }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--surface)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  boxShadow: 'var(--shadow-sm)',
                  color: 'var(--primary)',
                  border: '1px solid var(--border)',
                }}
              >
                {step.icon}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.1em',
                }}
              >
                STEP {step.num}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

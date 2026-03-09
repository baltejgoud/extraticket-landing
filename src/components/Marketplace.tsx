import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Marketplace: React.FC = () => {
  const revealRef = useScrollReveal({ threshold: 0.2 });
  const panelRef = useScrollReveal({ threshold: 0.2 });

  const tickets = [
    { title: 'Taylor Swift - Eras Tour', date: 'Oct 24 - Miami, FL', originalPrice: 450, discountPrice: 380, seller: 'Alex M.', saving: '15% off' },
    { title: 'Formula 1 Grand Prix', date: 'Nov 18 - Las Vegas, NV', originalPrice: 1200, discountPrice: 950, seller: 'Jordan T.', saving: '20% off' },
    { title: 'Coldplay - Spheres', date: 'Sep 12 - London, UK', originalPrice: 180, discountPrice: 150, seller: 'Sam R.', saving: '17% off' },
  ];

  const checkIcon = (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <section
      id="marketplace"
      className="section"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="container marketplace-grid">
        <div ref={revealRef} className="reveal reveal-grid">
          <div
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'var(--accent-light)',
              color: 'var(--accent)',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              fontSize: '0.875rem',
              marginBottom: '1rem',
            }}
          >
            Extra Ticket MVP
          </div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Score last minute deals on <span className="text-gradient">sold out</span> shows.
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Plans change. When fans cannot make it, they list their tickets here, often at a discount.
            Escrow protection means sellers get paid and buyers get guaranteed entry without scalper markup.
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
              <span className="list-icon">{checkIcon}</span>
              Browse discounted tickets
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
              <span className="list-icon">{checkIcon}</span>
              Sellers set fair prices
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
              <span className="list-icon">{checkIcon}</span>
              0% buyer fees on the MVP
            </li>
          </ul>
          <button className="btn btn-primary" type="button">Browse Marketplace</button>
        </div>

        <div
          ref={panelRef}
          className="reveal reveal-delay-2 glass-panel"
          style={{ padding: '2rem', background: 'rgba(255, 249, 242, 0.95)' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem' }}>Live Listings</h3>
            <span style={{ fontSize: '0.875rem', color: 'var(--primary)', fontWeight: 600, cursor: 'pointer' }}>View all</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {tickets.map((t, i) => (
              <div
                key={i}
                className="hover-lift"
                style={{
                  padding: '1.25rem',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'white',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <span
                      style={{
                        background: 'var(--accent-light)',
                        color: 'var(--accent)',
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '4px',
                        fontWeight: 700,
                      }}
                    >
                      {t.saving}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{t.title}</h4>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    {t.date} - Listed by {t.seller}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '0.875rem' }}>₹{t.originalPrice}</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>₹{t.discountPrice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;

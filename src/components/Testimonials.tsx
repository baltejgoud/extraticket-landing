import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Testimonials: React.FC = () => {
  const revealRef = useScrollReveal({ threshold: 0.1 });

  const reviews = [
    { name: 'Sarah J.', role: 'Music Fan', content: 'Extra Ticket saved my life! Finally got to see my favorite band without paying 3x the price on other reseller sites.', rating: 5 },
    { name: 'Michael T.', role: 'Season Ticket Holder', content: 'Selling my extra sports tickets takes literally 30 seconds. The secure escrow gives me total peace of mind.', rating: 5 },
    { name: 'Elena R.', role: 'Festival Goer', content: 'The slickest UI in the ticketing space. Buying is instant, and the digital transfer worked perfectly at the gate.', rating: 5 },
    { name: 'David K.', role: 'Frequent Buyer', content: 'I love the price cap feature. It keeps things fair for real fans instead of scalpers. Support team is great too.', rating: 4 },
  ];

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--surface-hover)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Trusted by <span className="text-gradient">Real Fans</span></h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
            See what thousands of event-goers are saying about Extra Ticket.
          </p>
        </div>

        <div 
          ref={revealRef}
          className="reveal reveal-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}
        >
          {reviews.map((review, i) => (
            <div key={i} className="glass-panel hover-lift" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} style={{ color: j < review.rating ? '#fbbf24' : '#e5e7eb', fontSize: '1.25rem' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-primary)', fontStyle: 'italic', flexGrow: 1 }}>
                "{review.content}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-light), var(--accent-light))' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem' }}>{review.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SocialProof: React.FC = () => {
  const revealRef = useScrollReveal({ threshold: 0.5 });

  const stats = [
    { value: '10,000+', label: 'Tickets Booked' },
    { value: '4.9/5', label: 'App Store Rating' },
    { value: '₹0', label: 'Hidden Fees' },
    { value: '100%', label: 'Secure Transfers' },
  ];

  return (
    <section className="section" style={{ padding: '3rem 0', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div 
          ref={revealRef} 
          className="reveal reveal-grid" 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '2rem' 
          }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif' }} className="text-gradient">
                {stat.value}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

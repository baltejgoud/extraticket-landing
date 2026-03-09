import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Showcase: React.FC = () => {
  const revealRef = useScrollReveal({ threshold: 0.3 });
  const copyRef = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: 'var(--bg-color)', overflow: 'hidden' }}>
      <div className="container showcase-grid">
        
        {/* Left Side: Mockups */}
        <div ref={revealRef} className="reveal reveal-grid" style={{ position: 'relative', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1000px' }}>
          
          {/* Mockup 1: Event List (Background) */}
          <div className="glass-panel" style={{ position: 'absolute', width: '220px', height: '480px', transform: 'translateX(-80px) translateY(-30px) rotate(-10deg)', zIndex: 1, border: '4px solid white', background: '#f3f4f6', overflow: 'hidden' }}>
             <div style={{ padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.5 }}>
                <div style={{ height: '20px', width: '60%', background: 'var(--border)', borderRadius: '4px' }} />
                {[1,2,3].map(i => <div key={i} style={{ height: '80px', background: 'white', borderRadius: '8px' }} />)}
             </div>
          </div>

          {/* Mockup 2: Ticket Detail (Foreground) */}
          <div className="glass-panel" style={{ position: 'absolute', width: '260px', height: '540px', transform: 'translateX(40px) translateY(20px) rotate(5deg)', zIndex: 10, border: '6px solid white', background: 'white', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
             {/* Ticket Graphic */}
             <div style={{ height: '200px', background: 'var(--primary)', position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: '-20px', left: 0, width: '100%', height: '40px', background: 'white', borderRadius: '50% 50% 0 0' }} />
             </div>
             <div style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>Eras Tour - VIP</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Sec 104, Row B, Seat 12</div>
                
                {/* QR Code Placeholder */}
                <div style={{ width: '120px', height: '120px', border: '2px dashed var(--border)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9fafb' }}>
                  <span style={{ fontSize: '2rem', color: 'var(--border)' }}>QR</span>
                </div>
             </div>
          </div>

        </div>

        {/* Right Side: Copy */}
        <div ref={copyRef} className="reveal reveal-delay-2" style={{ zIndex: 20 }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>Everything you need in <span className="text-gradient">one perfect app</span>.</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            From discovering sold-out local gigs to managing your VIP stadium passes, the Extra Ticket app gives you total control over your live event experiences.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              'Real-time notifications for price drops',
              'Apple Wallet & Google Pay integration',
              '1-click secure resale listing',
              'Interactive venue seat maps'
            ].map((feature, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.125rem', fontWeight: 500 }}>
                <span style={{ color: 'var(--primary)', backgroundColor: 'var(--primary-light)', padding: '0.25rem', borderRadius: '50%', display: 'flex' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Showcase;

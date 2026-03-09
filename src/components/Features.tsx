import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Features: React.FC = () => {
  const revealRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="features" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Why Extra Ticket?</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Built for genuine fans, not scalpers. A platform that ensures transparency, security, and true market value.
          </p>
        </div>

        <div ref={revealRef} className="reveal reveal-grid features-grid">
          {/* Feature 1 - Large Box */}
          <div className="glass-panel hover-lift feature-card feature-large">
            <div style={{ position: 'absolute', right: '-20%', bottom: '-20%', width: '300px', height: '300px', background: 'var(--primary-light)', borderRadius: '50%', filter: 'blur(50px)', opacity: 0.5 }} />
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', zIndex: 10 }}>100% Verified Accounts</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '400px', zIndex: 10 }}>
              Say goodbye to bots and fake profiles. Every user on Extra Ticket is verified using multi-factor identity checks to keep the ecosystem safe.
            </p>
          </div>

          {/* Feature 2 - Small Box */}
          <div className="glass-panel hover-lift feature-card feature-small">
            <div style={{ position: 'absolute', top: '-20%', left: '-20%', width: '150px', height: '150px', background: 'var(--accent-light)', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.5 }} />
            <svg width="36" height="36" viewBox="0 0 24 24" fill="var(--accent)" style={{ marginBottom: '1rem' }}>
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', zIndex: 10 }}>Instant Transfer</h3>
            <p style={{ color: 'var(--text-secondary)', zIndex: 10 }}>
              No waiting around. Receive your digital ticket immediately upon purchase.
            </p>
          </div>

          {/* Feature 3 - Small Box */}
          <div className="glass-panel hover-lift feature-card feature-small">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="var(--primary)" style={{ marginBottom: '1rem' }}>
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', zIndex: 10 }}>Group Bookings</h3>
            <p style={{ color: 'var(--text-secondary)', zIndex: 10 }}>
              Easily reserve blocks of tickets for your whole crew. Pay together or split the cost instantly.
            </p>
          </div>

          {/* Feature 4 - Large Box */}
          <div className="glass-panel hover-lift feature-card feature-large feature-right">
            <div style={{ position: 'absolute', left: '-10%', top: '10%', width: '250px', height: '250px', background: 'rgba(56,189,248,0.1)', borderRadius: '50%', filter: 'blur(50px)' }} />
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', zIndex: 10 }}>Smart Price Caps</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '450px', zIndex: 10 }}>
              We prevent price gouging by capping resale values at a fair market margin above face value, ensuring true fans can afford the show.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;

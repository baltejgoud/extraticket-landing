import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero: React.FC = () => {
  const revealRef = useScrollReveal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ticketTransform = `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.02 - 2}deg)`;
  const chipFloat = `translateY(${scrollY * 0.06}px)`;
  const chipFloatReverse = `translateY(${scrollY * -0.05}px)`;

  return (
    <section id="hero" className="section hero">
      <div className="container hero-grid">
        <div ref={revealRef} className="reveal reveal-grid hero-copy">
          <div className="badge">Private beta now open</div>

          <h1 className="hero-title text-balance">
            Buy the seat you want. Sell the seat you cannot use.
          </h1>

          <p className="hero-subtitle">
            Extra Ticket is a fan-first marketplace with escrow protection, verified sellers, and instant ticket
            transfers so every seat goes to someone who actually wants to be there.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" type="button">Join the beta</button>
            <button className="btn btn-secondary" type="button">See how it works</button>
          </div>

          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-dot" />
              Escrow protected payouts
            </div>
            <div className="trust-item">
              <span className="trust-dot" />
              Verified seller profiles
            </div>
            <div className="trust-item">
              <span className="trust-dot" />
              Instant ticket transfer
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="ticket-stack" style={{ transform: ticketTransform }}>
            <div className="ticket-card ticket-card-back" aria-hidden="true" />
            <div className="ticket-card ticket-card-mid" aria-hidden="true" />

            <div className="ticket-card ticket-card-front">
              <div className="ticket-hole left" />
              <div className="ticket-hole right" />
              <div className="ticket-perf" />

              <div className="ticket-header">
                <span className="ticket-tag">Exclusive Access</span>
                <div className="flex items-center gap-2">
                  <span className="ticket-price">₹9,999</span>
                </div>
              </div>

              <div>
                <div className="ticket-title">Grand Symphony Gala</div>
                <div className="ticket-subtitle">Metropolitan Opera House • Dec 12</div>
              </div>

              <div className="ticket-row">
                <div>
                  <div className="ticket-label">Section</div>
                  <div className="ticket-value">Orchestra Row A</div>
                </div>
                <div>
                  <div className="ticket-label">Access</div>
                  <div className="ticket-value">VIP Backstage</div>
                </div>
              </div>

              <div className="ticket-barcode" aria-hidden="true" />
            </div>
          </div>

          <div className="hero-chip chip-top" style={{ transform: chipFloat }}>
            <span className="chip-dot" />
            Verified listings
          </div>

          <div className="hero-chip chip-bottom" style={{ transform: chipFloatReverse }}>
            <span className="chip-dot accent" />
            Instant transfer
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

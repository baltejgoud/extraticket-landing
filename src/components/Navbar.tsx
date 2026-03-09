import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        zIndex: 50,
        transition: 'all 0.3s ease',
      }}
      className={scrolled ? 'glass-nav' : ''}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--font-display)', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-gradient"
        >
          Extra Ticket
        </div>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <button type="button" onClick={() => scrollTo('how-it-works')} style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>
            How it Works
          </button>
          <button type="button" onClick={() => scrollTo('features')} style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>
            Features
          </button>
          <button type="button" onClick={() => scrollTo('testimonials')} style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>
            Testimonials
          </button>

          <button
            type="button"
            onClick={() => scrollTo('download')}
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}
          >
            Download App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

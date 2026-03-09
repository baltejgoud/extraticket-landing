import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: 'var(--footer-bg)', color: 'var(--footer-text)', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '3rem',
          }}
        >
          <div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: 'white', marginBottom: '1rem' }}>
              Extra Ticket
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
              The safe, secure, and smart way to buy and sell spare tickets to live events everywhere.
            </p>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.25rem', fontSize: '1rem' }}>Product</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#download">Download App</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.25rem', fontSize: '1rem' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Trust and Safety</a></li>
              <li><a href="#">Report an Issue</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '1.25rem', fontSize: '1rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Seller Agreement</a></li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.875rem',
          }}
        >
          <div>&copy; {new Date().getFullYear()} Extra Ticket, Inc. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {['Twitter', 'Instagram', 'TikTok'].map((social, i) => (
              <a key={i} href="#" style={{ color: 'white', textDecoration: 'underline' }}>{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

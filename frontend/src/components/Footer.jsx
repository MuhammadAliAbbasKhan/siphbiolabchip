// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

export function Footer({ setCurrentPage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        paddingTop: '4.5rem',
        paddingBottom: '3.5rem',
        color: '#475569',
        fontFamily: 'Inter, system-ui, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Curved Light Lines Accent */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.35,
          zIndex: 0,
        }}
        viewBox="0 0 1440 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 200C320 100 640 300 960 150C1280 0 1440 100 1440 100V400H0V200Z"
          fill="url(#footer_wave)"
        />
        <defs>
          <linearGradient id="footer_wave" x1="0" y1="0" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2bbdb9" stopOpacity="0.04" />
            <stop offset="1" stopColor="#f8fafc" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        {/* TOP MAIN GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* LEFT COLUMN: LOGO & MISSION TAGLINE */}
          <div style={{ maxWidth: '360px' }}>
            <Link
              to="/"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}
            >
              <span
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  letterSpacing: '-0.03em',
                }}
              >
                SiPhBio
              </span>
              
              {/* Crossed X Icon */}
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5L23 23" stroke="#2bbdb9" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M5 23L23 5" stroke="#f97316" strokeWidth="4.5" strokeLinecap="round" />
                <circle cx="14" cy="14" r="3.2" fill="#2bbdb9" />
              </svg>

              {/* LABCHIP text with cyan underline */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 400,
                    letterSpacing: '0.16em',
                    color: '#0f172a',
                    textTransform: 'uppercase',
                    lineHeight: '1.1',
                  }}
                >
                  LABCHIP
                </span>
                <div
                  style={{
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#2bbdb9',
                    marginTop: '1px',
                    borderRadius: '1px',
                  }}
                />
              </div>
            </Link>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#64748b', fontWeight: 400 }}>
              Our mission is to empower everyday people and researchers with silicon photonics lab-on-a-chip diagnostics for accessible biomarker detection.
            </p>
          </div>

          {/* MIDDLE COLUMN: QUICK LINKS */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
              Quick Links
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
                <li><Link to="/company" style={footerLinkStyle}>Partner With Us</Link></li>
                <li><Link to="/company" style={footerLinkStyle}>About Us</Link></li>
                <li><Link to="/company" style={footerLinkStyle}>Careers</Link></li>
              </ul>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
                <li><Link to="/science" style={footerLinkStyle}>LabChip Tech</Link></li>
                <li><Link to="/news" style={footerLinkStyle}>Content Hub</Link></li>
                <li><Link to="/news" style={footerLinkStyle}>Research Articles</Link></li>
              </ul>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem' }}>
                <li><Link to="/assays" style={footerLinkStyle}>What We Measure</Link></li>
                <li><Link to="/faq" style={footerLinkStyle}>FAQs</Link></li>
                <li><Link to="/contact-us" style={footerLinkStyle}>Support Center</Link></li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: COMPANY & FLOATING BACK-TO-TOP BUTTON */}
          <div style={{ position: 'relative' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
              Company
            </h3>
            
            <div style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.5, marginBottom: '0.5rem', fontWeight: 500 }}>
              SiPhBioLabChip, Inc.
            </div>

            <div style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '0.5rem' }}>
              Email coming soon
            </div>

            <div style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '0.5rem' }}>
              Phone coming soon
            </div>

            <div style={{ fontSize: '0.92rem', color: '#64748b' }}>
              Address coming soon
            </div>

            {/* ORANGE CIRCULAR BACK-TO-TOP BUTTON */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff8a3d 0%, #f97316 100%)',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(249, 115, 22, 0.4)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(249, 115, 22, 0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(249, 115, 22, 0.4)';
              }}
            >
              <ChevronUp size={30} strokeWidth={2.8} />
            </button>
          </div>
        </div>

        {/* HORIZONTAL SEPARATOR */}
        <div style={{ borderTop: '1px solid #e2e8f0', marginBottom: '2.5rem' }} />

        {/* BOTTOM SECTION: DISCLAIMER & COPYRIGHT */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* MEDICAL DISCLAIMER */}
          <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.65, maxWidth: '820px' }}>
            <p style={{ marginBottom: '0.75rem' }}>
              The reference ranges and insights presented in the SiPhBioLabChip dashboard are meant to improve readability and provide context, however you should consult with your physician for a more formal interpretation of your results. No communication from SiPhBioLabChip is meant to be or should be taken as medical advice. SiPhBioLabChip is a wellness and analytical diagnostic platform. If you are concerned about any of the data in your dashboard please consult your physician immediately.
            </p>
            <p>
              SiPhBioLabChip testing and instrumentation are fulfilled and provided in compliance with accredited clinical laboratory standards.
            </p>
          </div>

          {/* COPYRIGHT */}
          <div style={{ fontSize: '0.88rem', color: '#94a3b8', whiteSpace: 'nowrap' }}>
            © {new Date().getFullYear()} SiPhBioLabChip. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinkStyle = {
  color: '#64748b',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
};

import React from 'react';
import { ShieldCheck, Cookie } from 'lucide-react';

export function CookiePolicyPage() {
  return (
    <div style={{ color: '#1a1a2e', paddingTop: '3rem', paddingBottom: '6rem', fontFamily: "'Fira Code', monospace" }}>
      <section style={{ padding: '3rem 0 2rem 0', textAlign: 'center', backgroundColor: '#f1f5f9' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#3661D6',
            marginBottom: '1rem',
            background: 'rgba(54, 97, 214, 0.1)',
            padding: '0.4rem 1rem',
            borderRadius: '100px'
          }}>
            <Cookie size={14} />
            <span>Cookie & Session Policy</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#1a1a2e', marginBottom: '0.75rem', fontWeight: 400 }}>
            Cookie Policy
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
            Domain: <strong>siphbiolabchip.com</strong>
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '3rem 2.5rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 4px 20px rgba(0,0,0,0.04)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.7 }}>
              <p>
                <strong>SiPhBioLabChip</strong> ("siphbiolabchip.com") uses essential session tokens and strictly functional cookies to deliver seamless laboratory user authentication, maintain active subscription session states, and load pre-configured assay preferences.
              </p>
              <h3 style={{ fontSize: '1.2rem', color: '#1a1a2e', fontWeight: 600 }}>Zero Advertising Trackers</h3>
              <p>
                We do not use third-party advertising cookies or cross-site tracking scripts. Your interaction with our diagnostic software and biochip service portal remains private and secure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

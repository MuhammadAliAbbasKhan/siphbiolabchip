import React from 'react';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export function PrivacyPolicyPage() {
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
            <ShieldCheck size={14} />
            <span>Compliance & Data Protection</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#1a1a2e', marginBottom: '0.75rem', fontWeight: 400 }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
            Official Data Governance Policy | Domain: <strong>siphbiolabchip.com</strong>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.7 }}>
              <p>
                At <strong>SiPhBioLabChip</strong> ("siphbiolabchip.com"), we are committed to safeguarding patient health telemetry, laboratory diagnostic records, and personal account information across our silicon photonic diagnostic platforms.
              </p>

              <h3 style={{ fontSize: '1.25rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                1. Data Encryption & HIPAA Compliance
              </h3>
              <p>
                All biochip telemetry transmitted from our bio-analyzers to our cloud infrastructure is encrypted in transit via TLS 1.3 and at rest using AES-256 encryption. We adhere strictly to HIPAA and GDPR health data privacy standards.
              </p>

              <h3 style={{ fontSize: '1.25rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                2. Information We Collect
              </h3>
              <p>
                We collect user account credentials, laboratory facility details, subscription payment records, and anonymized optical ring resonance kinetic telemetry used to optimize microfluidic assay calibration algorithms.
              </p>

              <h3 style={{ fontSize: '1.25rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                3. Third-Party Sharing & Security
              </h3>
              <p>
                We do not sell, rent, or lease clinical diagnostic data to third parties. Data is shared exclusively with integrated Electronic Medical Record (EMR) systems authorized by your laboratory organization.
              </p>

              <h3 style={{ fontSize: '1.25rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                4. Contact Information
              </h3>
              <p>
                If you have questions regarding data privacy or telemetry compliance, please contact our Privacy Officer at <strong>privacy@siphbiolabchip.com</strong> or <strong>contact@siphbiolabchip.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

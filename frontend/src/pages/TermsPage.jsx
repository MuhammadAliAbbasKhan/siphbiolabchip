import React from 'react';
import { FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function TermsPage() {
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
            <FileText size={14} />
            <span>Legal Master Agreement</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#1a1a2e', marginBottom: '0.75rem', fontWeight: 400 }}>
            Terms of Service
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
            Terms & Billing Governance | Domain: <strong>siphbiolabchip.com</strong>
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
                Welcome to <strong>SiPhBioLabChip</strong>. By accessing our platform, purchasing subscription plans ($100, $200, or $300), or operating our bio-analyzers, you agree to these Terms of Service.
              </p>

              <h3 style={{ fontSize: '1.25rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                1. Monthly Subscriptions & Payment Protection
              </h3>
              <p>
                Subscriptions automatically renew every 30 days. Our Single Monthly Payment Protection guarantees that active subscribers gain full access to the Paid Premium Services Portal for 30 days without duplicate billing during their active period.
              </p>

              <h3 style={{ fontSize: '1.25rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                2. Clinical & Diagnostic Operation
              </h3>
              <p>
                Assay cartridges are intended for authorized clinical diagnostic or biopharma research use strictly in accordance with FDA 510(k), Emergency Use Authorization (EUA), and CE-IVD package insert directions.
              </p>

              <h3 style={{ fontSize: '1.25rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                3. Intellectual Property
              </h3>
              <p>
                All silicon photonic waveguide geometry, optical ring resonator array designs, microfluidic channel architectures, and CloudLab software protocols are protected under 31 issued international patents owned by SiPhBioLabChip.
              </p>

              <h3 style={{ fontSize: '1.25rem', color: '#1a1a2e', fontWeight: 600, borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                4. Contact Legal
              </h3>
              <p>
                For official legal inquiries, email <strong>legal@siphbiolabchip.com</strong> or <strong>contact@siphbiolabchip.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

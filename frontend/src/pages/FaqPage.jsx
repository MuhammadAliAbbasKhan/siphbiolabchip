import React from 'react';
import { HelpCircle, ChevronRight, Zap } from 'lucide-react';

export function FaqPage() {
  const faqs = [
    {
      q: 'How does Silicon Photonics detect molecular binding without labels?',
      a: 'Silicon optical ring resonators measure minute changes in the local refractive index caused by biomolecules binding directly to the functionalized sensor surface. This eliminates the need for fluorescent tags, secondary enzymatic reactions, or time-consuming incubation steps.'
    },
    {
      q: 'What specimen volume is required for a biochip panel test?',
      a: 'A single 10 µL to 25 µL drop of whole blood (fingerstick or venous capillary input), serum, or plasma is sufficient to run up to 128 simultaneous multiplexed target channels.'
    },
    {
      q: 'How long does a test take on the SiPhBio Lab bio-analyzer?',
      a: 'Sample-to-result turnaround is under 30 minutes (typically 15 minutes), with continuous real-time kinetic curves generated during the molecular binding phase.'
    },
    {
      q: 'Are there any free subscription tiers available?',
      a: 'No. SiPhBioLabChip operates on a transparent paid subscription model with $100, $200, and $300 monthly plans. Once you pay for your subscription plan, your access covers 30 days and you do not have to pay again during that month.'
    },
    {
      q: 'Can custom antibody targets be immobilized on biochips?',
      a: 'Yes! Active monthly subscribers ($100, $200, or $300 plans) can access the Paid Premium Services Portal to request custom biochip cartridge functionalization for proprietary therapeutic targets or novel biomarkers.'
    },
    {
      q: 'Is CloudLab compatible with our existing EMR software?',
      a: 'Yes, CloudLab connects seamlessly via standard HL7 and FHIR protocols, allowing instant bidirectional order placement and auto-routing of quality-checked results directly into your Epic, Cerner, or LIMS system.'
    }
  ];

  return (
    <div style={{ color: '#1a1a2e', paddingTop: '3rem', paddingBottom: '6rem', fontFamily: "'Fira Code', monospace" }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 2rem 0', textAlign: 'center', backgroundColor: '#f1f5f9' }}>
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
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#1a1a2e', marginBottom: '0.75rem', fontWeight: 400 }}>
            Photonic Diagnostic FAQ
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto' }}>
            Everything you need to know about SiPhBioLabChip technology, subscription tiers, and clinical operations.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Grid */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '14px',
                  padding: '2rem',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#3661D6';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(54, 97, 214, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                }}
              >
                <h3 style={{ fontSize: '1.2rem', color: '#1a1a2e', marginBottom: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ChevronRight size={18} style={{ color: '#3661D6', flexShrink: 0 }} />
                  <span>{faq.q}</span>
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.7, paddingLeft: '28px' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

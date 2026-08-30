import React from 'react';
import { Building2, Microscope, Users, CheckCircle2, PlayCircle } from 'lucide-react';

export function SolutionsPage({ onOpenDemo }) {
  return (
    <div style={{ color: '#1a1a2e', paddingTop: '3rem', paddingBottom: '6rem', fontFamily: "'Fira Code', monospace" }}>
      
      {/* Header */}
      <section style={{ padding: '4rem 0 2rem 0', textAlign: 'center', backgroundColor: '#f1f5f9' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', padding: '0 1.5rem' }}>
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
            <Building2 size={14} />
            <span>Enterprise Biopharma & Clinical Solutions</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#1a1a2e', marginBottom: '1.25rem', fontWeight: 400 }}>
            Tailored Diagnostic <span style={{ color: '#3661D6' }}>Solutions</span>
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto' }}>
            Empowering biopharma sponsors, CROs, clinical laboratories, and decentralized trial networks with silicon photonics multiplex biochip technology.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ padding: '0 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '2.25rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(54,97,214,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3661D6', marginBottom: '1.25rem' }}>
                <Building2 size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#1a1a2e', marginBottom: '0.75rem', fontWeight: 600 }}>
                Biopharma Drug Discovery & CROs
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Accelerate therapeutic lead optimization, pharmacodynamic biomarker profiling, and immunogenicity anti-drug antibody (ADA) screening with real-time kinetic binding data.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#374151', fontSize: '0.88rem', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} /> Real-time rate constant measurement</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} /> Custom biochip array functionalization</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} /> High-throughput 384-well sample loading</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '2.25rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981', marginBottom: '1.25rem' }}>
                <Microscope size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#1a1a2e', marginBottom: '0.75rem', fontWeight: 600 }}>
                Clinical Reference Laboratories
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Replace labor-intensive indirect immunofluorescence (IFA) and individual ELISA test kits with single-cartridge 24-analyte autoimmune and rheumatology biochip panels.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#374151', fontSize: '0.88rem', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} /> 80% reduction in technician hands-on labor</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} /> CLIA / CAP compliant automated EMR integration</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} /> Sub-15 minute report delivery to physicians</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '2.25rem',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(54,97,214,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3661D6', marginBottom: '1.25rem' }}>
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#1a1a2e', marginBottom: '0.75rem', fontWeight: 600 }}>
                Decentralized Clinical Trials (DCT)
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Deploy portable SiPhBio™ bio-analyzers directly to decentralized trial sites or mobile nursing teams for immediate fingerstick blood biomarker collection.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#374151', fontSize: '0.88rem', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} /> Cold-chain eliminated biochip cartridges</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} /> Real-time encrypted cellular telemetry sync</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16} style={{ color: '#10B981', flexShrink: 0 }} /> Patient-centric 10 µL fingerstick volume</li>
              </ul>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button
              onClick={onOpenDemo}
              style={{
                padding: '0.85rem 2.25rem',
                borderRadius: '100px',
                backgroundColor: '#3661D6',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <PlayCircle size={18} />
              <span>Discuss Enterprise Custom Solution</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

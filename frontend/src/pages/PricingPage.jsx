import React, { useState } from 'react';
import { Check, ShieldCheck, Zap, Sparkles, ArrowRight, Lock, CheckCircle2, AlertCircle } from 'lucide-react';

export function PricingPage({ onSelectPlan, onNavigatePaidServices }) {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: 'starter-100',
      name: 'Starter Biochip Plan',
      monthlyPrice: 100,
      yearlyPrice: 90,
      description: 'Designed for single research workstations & academic bio-engineering labs.',
      features: [
        '1 SiPhBio™ Bio-Analyzer License',
        '25 Standard Biochip Cartridges / mo',
        'Autoimmune & Inflammation Panels',
        'Full Premium Services Form Access',
        'No Additional Monthly Charges'
      ],
      popular: false
    },
    {
      id: 'pro-200',
      name: 'Professional Clinical Plan',
      monthlyPrice: 200,
      yearlyPrice: 180,
      description: 'Built for clinical reference labs and regional diagnostic centers.',
      features: [
        '3 SiPhBio™ Bio-Analyzer Licenses',
        '100 Biochip Cartridges / mo',
        'Full Clinical Panel Access (24+ analytes)',
        'Priority Biochip Cartridge Foundry',
        '24/7 Priority Clinical Support',
        'Unlimited Form Submissions for 1 Month'
      ],
      popular: true
    },
    {
      id: 'enterprise-300',
      name: 'Enterprise Biochip Plan',
      monthlyPrice: 300,
      yearlyPrice: 270,
      description: 'Full-stack platform for biopharma sponsors, CROs & hospital networks.',
      features: [
        'Unlimited SiPhBio™ Analyzer Licenses',
        '300 Biochip Cartridges / mo',
        'Custom Biochip Foundry Access',
        'Real-time Kinetic Telemetry',
        'Dedicated Microfluidics Field Engineer',
        'MongoDB Atlas Cloud Sync',
        '30-Day Guaranteed Price Protection'
      ],
      popular: false
    }
  ];

  return (
    <div style={{ color: '#1a1a2e', paddingTop: '3rem', paddingBottom: '6rem', fontFamily: "'Fira Code', monospace" }}>
      
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 2rem 0', textAlign: 'center', backgroundColor: '#f1f5f9' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="eyebrow" style={{
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
            <Zap size={14} />
            <span>Monthly Subscription Plans ($100 - $200 - $300)</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#1a1a2e', marginBottom: '1.25rem', fontWeight: 400 }}>
            No Free Tier. Choose Your <span style={{ color: '#3661D6' }}>Subscription</span>
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto' }}>
            Subscribe to our $100, $200, or $300 monthly plans. Once paid via Stripe, your subscription is valid for 30 days — <strong>you do not have to pay again for that month</strong>.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '100px',
            padding: '6px 12px',
            marginTop: '2rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <button
              onClick={() => setIsYearly(false)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '100px',
                fontSize: '0.85rem',
                fontWeight: 600,
                background: !isYearly ? '#3661D6' : 'transparent',
                color: !isYearly ? '#FFFFFF' : '#4b5563',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsYearly(true)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '100px',
                fontSize: '0.85rem',
                fontWeight: 600,
                background: isYearly ? '#3661D6' : 'transparent',
                color: isYearly ? '#FFFFFF' : '#4b5563',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Annual Billing</span>
              <span style={{ background: '#10B981', color: '#ffffff', fontSize: '0.65rem', fontWeight: 800, padding: '2px 6px', borderRadius: '4px' }}>SAVE 10%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Subscription Notice Banner */}
      <section style={{ padding: '1.5rem 0' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '12px',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#1e40af',
            fontSize: '0.9rem'
          }}>
            <CheckCircle2 size={20} style={{ flexShrink: 0, color: '#3661D6' }} />
            <div>
              <strong>Single Monthly Payment Protection:</strong> Once you pay for your chosen plan ($100, $200, or $300), your subscription remains active for 30 full days. You can submit unlimited custom biochip requests without paying extra during your active month!
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section style={{ padding: '2rem 0' }}>
        <div className="container" style={{ padding: '0 1.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}>
            {plans.map((plan) => {
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
              return (
                <div
                  key={plan.id}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '2.25rem',
                    borderRadius: '16px',
                    border: plan.popular ? '2px solid #3661D6' : '1px solid #e5e7eb',
                    boxShadow: plan.popular ? '0 12px 30px rgba(54, 97, 214, 0.15)' : '0 4px 15px rgba(0,0,0,0.04)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  {plan.popular && (
                    <div style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#3661D6',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 16px',
                      borderRadius: '100px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Most Popular Plan
                    </div>
                  )}

                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: '#1a1a2e', marginBottom: '0.5rem', fontWeight: 600 }}>{plan.name}</h3>
                    <p style={{ fontSize: '0.88rem', color: '#6b7280', marginBottom: '1.5rem', minHeight: '40px' }}>{plan.description}</p>

                    <div style={{ marginBottom: '1.75rem' }}>
                      <span style={{ fontSize: '2.75rem', fontWeight: 800, color: '#3661D6' }}>${price}</span>
                      <span style={{ fontSize: '0.9rem', color: '#6b7280' }}> / month</span>
                    </div>

                    <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem', marginBottom: '1.75rem' }}>
                      <div style={{ fontSize: '0.8rem', color: '#3661D6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                        Included Features:
                      </div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#4b5563', padding: 0 }}>
                        {plan.features.map((feat, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <Check size={16} style={{ color: '#3661D6', flexShrink: 0 }} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan, isYearly)}
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      borderRadius: '100px',
                      backgroundColor: plan.popular ? '#3661D6' : '#1a1a2e',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Lock size={16} />
                    <span>Pay ${price} via Stripe & Activate</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

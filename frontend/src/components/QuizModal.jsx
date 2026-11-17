import React, { useState } from 'react';
import { X, Check, HelpCircle, ArrowRight, Activity, Zap, Heart, Shield, Sparkles } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export function QuizModal({ isOpen, onClose, onStartTesting }) {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [frequency, setFrequency] = useState('Quarterly');
  const [symptoms, setSymptoms] = useState([]);
  const { addToast } = useToast();

  if (!isOpen) return null;

  const toggleSymptom = (s) => {
    if (symptoms.includes(s)) {
      setSymptoms(symptoms.filter((item) => item !== s));
    } else {
      setSymptoms([...symptoms, s]);
    }
  };

  const handleFinish = () => {
    addToast('Quiz complete! Loading your customized biomarker recommendation panel.', 'success');
    if (onStartTesting) onStartTesting();
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          background: '#ffffff',
          borderRadius: '24px',
          padding: '2.5rem',
          position: 'relative',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.2)',
          border: '1px solid #e2e8f0',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#64748b',
          }}
        >
          <X size={20} />
        </button>

        {/* Progress Bar */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem' }}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: '4px',
                borderRadius: '2px',
                backgroundColor: i <= step ? '#2bbdb9' : '#e2e8f0',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>

        {step === 1 && (
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(43, 189, 185, 0.1)', color: '#2bbdb9', padding: '4px 12px', borderRadius: '100px', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              <Sparkles size={14} />
              <span>Step 1 of 3</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
              What is your primary health goal?
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
              Select the area of focus that matters most to you right now.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {[
                { title: 'Longevity & Healthspan', desc: 'Track key metabolic, inflammation, and cellular aging biomarkers', icon: <Zap size={20} color="#2bbdb9" /> },
                { title: 'Cardiovascular & Heart Health', desc: 'Monitor ApoB, hs-CRP, Lipid Subfractions, and HbA1c', icon: <Heart size={20} color="#f97316" /> },
                { title: 'Hormones & Energy Optimization', desc: 'Measure Cortisol, Testosterone, DHEA-S, and Thyroid', icon: <Activity size={20} color="#8b5cf6" /> },
                { title: 'Immune & Inflammation Control', desc: 'Track hs-CRP, Vitamin D, and inflammatory cytokines', icon: <Shield size={20} color="#3b82f6" /> },
              ].map((item) => (
                <div
                  key={item.title}
                  onClick={() => setGoal(item.title)}
                  style={{
                    padding: '1rem 1.25rem',
                    borderRadius: '16px',
                    border: goal === item.title ? '2px solid #2bbdb9' : '1px solid #e2e8f0',
                    backgroundColor: goal === item.title ? 'rgba(43, 189, 185, 0.04)' : '#ffffff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ padding: '8px', background: '#f8fafc', borderRadius: '12px' }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.98rem', fontWeight: 600, color: '#0f172a' }}>{item.title}</div>
                    <div style={{ fontSize: '0.82rem', color: '#64748b' }}>{item.desc}</div>
                  </div>
                  {goal === item.title && <Check size={20} color="#2bbdb9" />}
                </div>
              ))}
            </div>

            <button
              disabled={!goal}
              onClick={() => setStep(2)}
              style={{
                width: '100%',
                padding: '0.85rem',
                borderRadius: '9999px',
                background: goal ? 'linear-gradient(135deg, #2bbdb9 0%, #1ea5a1 100%)' : '#cbd5e1',
                color: '#ffffff',
                border: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: goal ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <span>Continue</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(43, 189, 185, 0.1)', color: '#2bbdb9', padding: '4px 12px', borderRadius: '100px', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              <Sparkles size={14} />
              <span>Step 2 of 3</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
              Select specific symptoms or interests
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem' }}>
              Select any that apply to tailor your lab recommendation.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
              {[
                'Fatigue / Low Energy',
                'Brain Fog / Focus',
                'Weight & Metabolism',
                'Sleep Quality',
                'Muscle Recovery',
                'Stress & Anxiety',
                'Heart Health Risk',
                'Hormonal Balance',
              ].map((item) => {
                const selected = symptoms.includes(item);
                return (
                  <div
                    key={item}
                    onClick={() => toggleSymptom(item)}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: selected ? '2px solid #2bbdb9' : '1px solid #e2e8f0',
                      backgroundColor: selected ? 'rgba(43, 189, 185, 0.06)' : '#f8fafc',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      color: selected ? '#1ea5a1' : '#334155',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{item}</span>
                    {selected && <Check size={16} color="#2bbdb9" />}
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={() => setStep(1)}
                style={{
                  flex: 1,
                  padding: '0.85rem',
                  borderRadius: '9999px',
                  background: '#f1f5f9',
                  color: '#475569',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                }}
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                style={{
                  flex: 2,
                  padding: '0.85rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #2bbdb9 0%, #1ea5a1 100%)',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <span>Generate Recommendation</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(43, 189, 185, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                color: '#2bbdb9',
              }}
            >
              <Sparkles size={32} />
            </div>

            <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
              Your Custom Health Panel match:
            </h2>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#2bbdb9', marginBottom: '0.75rem' }}>
              {goal || 'SiPhBio Full-Spectrum Longevity Panel'}
            </div>

            <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              Based on your selection, we recommend testing <strong>50+ essential biomarkers</strong> including ApoB, hs-CRP, Cortisol, Vitamin D, HbA1c, and Metabolic hormones using our painless arm collection kit.
            </p>

            <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '1.25rem', marginBottom: '2rem', textAlign: 'left' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.5rem' }}>
                Included with your test:
              </div>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.85rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>Painless EasyDraw™ upper-arm collection kit delivered to your door</li>
                <li>CLIA & CAP accredited lab analysis with 48-hour turn-around</li>
                <li>SiPhBio Interactive Dashboard with wearable data sync</li>
                <li>Actionable physician-backed wellness insights</li>
              </ul>
            </div>

            <button
              onClick={handleFinish}
              style={{
                width: '100%',
                padding: '0.9rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #2bbdb9 0%, #1ea5a1 100%)',
                color: '#ffffff',
                border: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(43, 189, 185, 0.4)',
              }}
            >
              Start Testing Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

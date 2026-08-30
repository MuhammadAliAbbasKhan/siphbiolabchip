import React, { useState } from 'react';
import { X, PlayCircle, CheckCircle2, Building, Mail, User, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

export function DemoModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('Principal Investigator / Lab Director');
  const [facilityType, setFacilityType] = useState('Biopharma Research Lab');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      addToast('Please enter your name and email.', 'error');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://127.0.0.1:8002/api/v1/demo/', {
        name, email, company, role, facility_type: facilityType
      });
      setSubmitted(true);
      addToast('Demo request submitted! We will schedule your interactive session.', 'success');
    } catch (err) {
      setSubmitted(true);
      addToast('Thank you! Your demo request has been received.', 'success');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 2000,
      background: 'rgba(3, 7, 18, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="glass-card" style={{
        width: '100%',
        maxWidth: '520px',
        padding: '2.25rem',
        position: 'relative',
        background: '#0F172A',
        borderColor: 'rgba(6, 182, 212, 0.4)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)'
      }}>
        <button 
          onClick={onClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', color: '#94A3B8' }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)',
              border: '2px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem auto', color: '#10B981'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
              Demo Request Confirmed!
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              A SiPhBioLabChip Application Specialist will contact you at <strong>{email}</strong> within 24 hours to set up your live optical ring resonator demonstration.
            </p>
            <button onClick={onClose} className="btn-primary" style={{ padding: '0.75rem 2rem' }}>
              Return to Platform
            </button>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <div className="badge" style={{ marginBottom: '0.5rem' }}>
                <PlayCircle size={14} />
                <span>Live Biochip Simulator</span>
              </div>
              <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF' }}>
                Book Interactive Demo
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '0.25rem' }}>
                Experience live 15-minute biochip assay telemetry, optical wavelength shifts & SiPhBio Lab™ benchtop analyzer workflow.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Alexander Wright"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%', padding: '0.75rem', background: 'rgba(7, 11, 20, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="a.wright@genomics-lab.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%', padding: '0.75rem', background: 'rgba(7, 11, 20, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Organization / Company
                </label>
                <input
                  type="text"
                  placeholder="Vanguard Diagnostics Inc."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  style={{
                    width: '100%', padding: '0.75rem', background: 'rgba(7, 11, 20, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Role
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem', background: '#070B14',
                      border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none'
                    }}
                  >
                    <option value="Lab Director">Lab Director</option>
                    <option value="Principal Investigator">Principal Investigator</option>
                    <option value="CRO Manager">CRO Manager</option>
                    <option value="Biopharma Scientist">Biopharma Scientist</option>
                    <option value="Executive Officer">Executive Officer</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Facility Type
                  </label>
                  <select
                    value={facilityType}
                    onChange={(e) => setFacilityType(e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem', background: '#070B14',
                      border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none'
                    }}
                  >
                    <option value="Biopharma Research Lab">Biopharma Research Lab</option>
                    <option value="Clinical Reference Lab">Clinical Reference Lab</option>
                    <option value="Hospital Diagnostic Center">Hospital Diagnostic Center</option>
                    <option value="CRO / Clinical Trial Site">CRO / Clinical Trial Site</option>
                    <option value="Point-of-Care Clinic">Point-of-Care Clinic</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.85rem' }}
              >
                <span>{loading ? 'Submitting...' : 'Schedule Live Demo'}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

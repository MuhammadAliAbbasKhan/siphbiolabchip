import React, { useState } from 'react';
import { X, Lock, Mail, User, Building, ArrowRight, ShieldCheck } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

export function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      addToast('Please enter both email and password.', 'error');
      return;
    }

    setLoading(true);
    try {
      const endpoint = isRegister ? 'http://127.0.0.1:8002/api/v1/auth/register/' : 'http://127.0.0.1:8002/api/v1/auth/login/';
      const payload = isRegister 
        ? { email, password, username, company }
        : { email, password };

      const res = await axios.post(endpoint, payload);
      if (res.data.success) {
        addToast(res.data.message, 'success');
        onAuthSuccess(res.data.user);
        onClose();
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Authentication failed. Please verify your credentials.';
      addToast(msg, 'error');
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
        maxWidth: '460px',
        padding: '2.25rem',
        position: 'relative',
        background: '#0F172A',
        borderColor: 'rgba(6, 182, 212, 0.4)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: '#94A3B8',
            padding: '0.25rem'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div className="badge" style={{ marginBottom: '0.5rem' }}>
            <ShieldCheck size={14} />
            <span>SiPhBioLabChip Portal Auth</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF' }}>
            {isRegister ? 'Create Account' : 'Sign In to Portal'}
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginTop: '0.25rem' }}>
            {isRegister ? 'Access biochip telemetry, custom cartridge orders & LIMS integration' : 'Sign in to access your laboratory subscription & diagnostic services'}
          </p>
        </div>

        {/* Tab Selector */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          background: 'rgba(7, 11, 20, 0.8)',
          borderRadius: '10px',
          padding: '4px',
          marginBottom: '1.5rem'
        }}>
          <button
            onClick={() => setIsRegister(false)}
            style={{
              padding: '0.6rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.88rem',
              background: !isRegister ? '#06B6D4' : 'transparent',
              color: !isRegister ? '#FFFFFF' : '#94A3B8',
              transition: 'all 0.2s'
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsRegister(true)}
            style={{
              padding: '0.6rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.88rem',
              background: isRegister ? '#06B6D4' : 'transparent',
              color: isRegister ? '#FFFFFF' : '#94A3B8',
              transition: 'all 0.2s'
            }}
          >
            Sign Up / Register
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
          {isRegister && (
            <>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Full Name / Username
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }} />
                  <input
                    type="text"
                    placeholder="Dr. Eleanor Vance"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.75rem 0.75rem 2.4rem',
                      background: 'rgba(7, 11, 20, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Organization / Laboratory
                </label>
                <div style={{ position: 'relative' }}>
                  <Building size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }} />
                  <input
                    type="text"
                    placeholder="Pacific Biopharma Research Labs"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.75rem 0.75rem 2.4rem',
                      background: 'rgba(7, 11, 20, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      borderRadius: '8px',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
              Work Email Address *
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }} />
              <input
                type="email"
                placeholder="lab.director@biopharma.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 2.4rem',
                  background: 'rgba(7, 11, 20, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
              Password *
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }} />
              <input
                type="password"
                placeholder="••••••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 2.4rem',
                  background: 'rgba(7, 11, 20, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.85rem' }}
          >
            <span>{loading ? 'Processing...' : isRegister ? 'Complete Registration' : 'Sign In Now'}</span>
            <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

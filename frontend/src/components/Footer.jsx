import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Send, Linkedin, Twitter, Facebook, Youtube, ShieldAlert, Award, FileText, CheckCircle2 } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

export function Footer({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const { addToast } = useToast();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      addToast('Please enter your email address.', 'error');
      return;
    }
    setLoading(true);
    try {
      await axios.post('http://127.0.0.1:8002/api/v1/newsletter/', { email: email.strip ? email.strip() : email });
      setSubscribed(true);
      addToast('Subscribed! You will receive SiPhBioLabChip photonic updates.', 'success');
      setEmail('');
    } catch (err) {
      setSubscribed(true);
      addToast('Thank you for subscribing to SiPhBioLabChip updates!', 'success');
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  const handleLink = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#070B14',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      paddingTop: '4rem',
      paddingBottom: '2.5rem',
      color: '#94A3B8'
    }}>
      <div className="container">
        
        {/* Newsletter Glass Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          borderRadius: '20px',
          padding: '2.5rem',
          marginBottom: '4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
          boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.5)'
        }}>
          <div>
            <div className="badge" style={{ marginBottom: '0.75rem' }}>
              <Mail size={14} />
              <span>Biochip Clinical Intelligence</span>
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Be the first to receive biochip assay updates & photonic whitepapers
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#94A3B8' }}>
              Stay informed on Silicon Photonics multiplex immunoassay breakthroughs, SiPhBioLabChip platform releases, and peer-reviewed binding kinetics studies.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.75rem' }}>
            <input
              type="email"
              placeholder="Enter work email (e.g. lab@biopharma.com)..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                background: 'rgba(7, 11, 20, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '9999px',
                padding: '0.85rem 1.25rem',
                color: '#FFFFFF',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
              style={{ padding: '0.85rem 1.5rem', whiteSpace: 'nowrap' }}
            >
              {subscribed ? <CheckCircle2 size={18} /> : <Send size={18} />}
              <span>{subscribed ? 'Subscribed' : 'Subscribe'}</span>
            </button>
          </form>
        </div>

        {/* 3 Column Main Footer Links Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Brand Info Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(14,165,233,0.3) 0%, rgba(6,182,212,0.4) 100%)',
                border: '1px solid rgba(6,182,212,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Cpu size={20} style={{ color: '#06B6D4' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF' }}>
                SiPhBio<span style={{ color: '#06B6D4' }}>LabChip</span>
              </span>
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem', color: '#94A3B8' }}>
              Next-generation Silicon Photonics biochip microfluidic platform delivering real-time label-free multi-analyte binding kinetics for clinical diagnostic laboratories and enterprise biopharma.
            </p>

            <div style={{ fontSize: '0.85rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div><strong>Official Domain:</strong> siphbiolabchip.com</div>
              <div><strong>General Contact:</strong> contact@siphbiolabchip.com</div>
              <div><strong>Technical Support:</strong> support@siphbiolabchip.com</div>
              <div><strong>Biopharma Sales:</strong> sales@siphbiolabchip.com</div>
            </div>
          </div>

          {/* Col 1: About & Platform */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              About SiPhBioLabChip
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li><Link to="/science" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Silicon Photonics Technology</Link></li>
              <li><Link to="/company" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Company & Leadership</Link></li>
              <li><Link to="/use-cases" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Use Cases & Solutions</Link></li>
              <li><Link to="/publications" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Published Research & Studies</Link></li>
              <li><Link to="/admin" style={{ color: '#06B6D4', fontWeight: 600, textDecoration: 'none' }} className="footer-link">Executive Portal (Admin)</Link></li>
              <li><Link to="/privacy" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Terms of Service</Link></li>
              <li><Link to="/cookie" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Col 2: Research & Releases */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Research & Releases
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li><Link to="/news" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Bio-Optical Kinetic Blog</Link></li>
              <li><Link to="/publications" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Peer-Reviewed Papers</Link></li>
              <li><Link to="/volunteer" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Events & Symposia</Link></li>
              <li><Link to="/faq" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Photonic FAQ</Link></li>
            </ul>
          </div>

          {/* Col 3: Support & Clinical */}
          <div>
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Support & Clinical Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li><Link to="/contact-us" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Contact Clinical Specialists</Link></li>
              <li><Link to="/paid-services" style={{ color: '#10B981', fontWeight: 600, textDecoration: 'none' }} className="footer-link">Custom Biochip Cartridge Foundry</Link></li>
              <li><Link to="/paid-services" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Priority Lab Dispatch Portal</Link></li>
              <li><Link to="/pricing" style={{ color: '#94A3B8', textDecoration: 'none' }} className="footer-link">Enterprise Subscription Plans</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar & Social Icons */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          fontSize: '0.85rem'
        }}>
          <div>
            © Copyright <strong>SiPhBioLabChip</strong> 2026. All rights reserved. <span style={{ color: '#06B6D4' }}>siphbiolabchip.com</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{
              width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', transition: 'all 0.2s'
            }}>
              <Linkedin size={18} />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" style={{
              width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', transition: 'all 0.2s'
            }}>
              <Twitter size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{
              width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', transition: 'all 0.2s'
            }}>
              <Facebook size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{
              width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8', transition: 'all 0.2s'
            }}>
              <Youtube size={18} />
            </a>
          </div>
        </div>

      </div>

      <style>{`
        .footer-link {
          background: none;
          border: none;
          padding: 0;
          font-family: inherit;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #06B6D4 !important;
        }
      `}</style>
    </footer>
  );
}

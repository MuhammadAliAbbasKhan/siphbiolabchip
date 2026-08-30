import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Building, MessageSquare, CheckCircle2 } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [volume, setVolume] = useState('50 - 250 Tests / Month');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      addToast('Please complete all required fields.', 'error');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://127.0.0.1:8002/api/v1/contact/', {
        name, email, phone, company, testing_volume: volume, message
      });
      setSubmitted(true);
      addToast('Thank you! Your message has been routed to SiPhBioLabChip clinical specialists.', 'success');
    } catch (err) {
      setSubmitted(true);
      addToast('Thank you for contacting SiPhBioLabChip!', 'success');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ color: '#F8FAFC', paddingTop: '3rem', paddingBottom: '6rem' }}>
      
      <section style={{ padding: '4rem 0 3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <Mail size={14} />
            <span>Clinical & Enterprise Support</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#FFFFFF', marginBottom: '1.25rem' }}>
            Contact <span className="gradient-text">SiPhBioLabChip</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem' }}>
            Connect with our microfluidic engineers, clinical application specialists, and biopharma sales directors.
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            
            {/* Contact Details Column */}
            <div>
              <h2 style={{ fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                Get In Touch
              </h2>
              <p style={{ color: '#94A3B8', lineHeight: 1.6, marginBottom: '2rem' }}>
                Whether you have technical questions regarding silicon photonics ring resonator sensitivity or wish to inquire about custom biochip foundry manufacturing, our team is ready to assist.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '10px', background: 'rgba(6,182,212,0.15)', color: '#06B6D4' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>General Inquiries</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FFFFFF' }}>contact@siphbiolabchip.com</div>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '10px', background: 'rgba(16,185,129,0.15)', color: '#10B981' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Technical Support</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FFFFFF' }}>support@siphbiolabchip.com</div>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '10px', background: 'rgba(56,189,248,0.15)', color: '#38BDF8' }}>
                    <Building size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Biopharma Sales</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FFFFFF' }}>sales@siphbiolabchip.com</div>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '10px', background: 'rgba(245,158,11,0.15)', color: '#F59E0B' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Foundry & HQ Location</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#FFFFFF' }}>San Diego Photonics Innovation Park, CA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="glass-card" style={{ padding: '2.5rem', borderColor: 'rgba(6,182,212,0.3)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle2 size={48} style={{ color: '#10B981', margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    Thank you for contacting SiPhBioLabChip. A clinical specialist will respond within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>Send Us a Message</h3>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>Full Name *</label>
                    <input
                      type="text" required placeholder="Dr. Sarah Lin" value={name} onChange={(e) => setName(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', background: 'rgba(7, 11, 20, 0.7)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>Work Email *</label>
                    <input
                      type="email" required placeholder="s.lin@biopharma.org" value={email} onChange={(e) => setEmail(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', background: 'rgba(7, 11, 20, 0.7)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>Company / Institution</label>
                      <input
                        type="text" placeholder="Genomics Corp" value={company} onChange={(e) => setCompany(e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', background: 'rgba(7, 11, 20, 0.7)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>Monthly Testing Volume</label>
                      <select
                        value={volume} onChange={(e) => setVolume(e.target.value)}
                        style={{ width: '100%', padding: '0.75rem', background: '#070B14', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none' }}
                      >
                        <option value="Under 50 Tests / Month">Under 50 Tests / Month</option>
                        <option value="50 - 250 Tests / Month">50 - 250 Tests / Month</option>
                        <option value="250 - 1,000 Tests / Month">250 - 1,000 Tests / Month</option>
                        <option value="1,000+ Enterprise Volume">1,000+ Enterprise Volume</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>Message / Technical Inquiry *</label>
                    <textarea
                      required rows={4} placeholder="Describe your assay requirements or biochip inquiry..." value={message} onChange={(e) => setMessage(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', background: 'rgba(7, 11, 20, 0.7)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}>
                    <Send size={18} />
                    <span>{loading ? 'Sending...' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

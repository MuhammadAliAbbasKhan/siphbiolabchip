import React, { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle2, Lock, Cpu, Truck, FileText, Send, Clock, AlertCircle, Zap } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

export function PaidServicesPage({ currentUser, onOpenAuth, onNavigatePricing, onSelectPlan }) {
  const [serviceType, setServiceType] = useState('Custom Biochip Cartridge Foundry');
  const [facilityLocation, setFacilityLocation] = useState('San Diego HQ Lab');
  const [cartridgeCount, setCartridgeCount] = useState('50 Cartridges / Month');
  const [urgency, setUrgency] = useState('Standard (7 Days)');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [myRequests, setMyRequests] = useState([]);
  const { addToast } = useToast();

  const isPaidUser = currentUser && currentUser.is_paid;

  useEffect(() => {
    if (currentUser?.email) {
      fetchMyRequests();
    }
  }, [currentUser]);

  const fetchMyRequests = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8002/api/v1/services/list/?email=${currentUser.email}`);
      if (res.data.success) {
        setMyRequests(res.data.requests || []);
      }
    } catch (err) {
      // Fail gracefully
    }
  };

  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      addToast('Please Sign In before submitting a biochip service request.', 'error');
      onOpenAuth();
      return;
    }

    if (!isPaidUser) {
      addToast('Access Denied: You must activate an active monthly subscription plan ($100, $200, or $300) to submit service requests.', 'error');
      onNavigatePricing();
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('http://127.0.0.1:8002/api/v1/services/request/', {
        user_email: currentUser.email,
        user_name: currentUser.username,
        company: currentUser.company,
        service_type: serviceType,
        facility_location: facilityLocation,
        cartridge_count: cartridgeCount,
        urgency,
        details
      });

      if (res.data.success) {
        addToast(res.data.message, 'success');
        setDetails('');
        fetchMyRequests();
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Error submitting service request.';
      addToast(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ color: '#1a1a2e', paddingTop: '3rem', paddingBottom: '6rem', fontFamily: "'Fira Code', monospace" }}>
      
      {/* Banner */}
      <section style={{ padding: '4rem 0 2rem 0', textAlign: 'center', backgroundColor: '#f1f5f9' }}>
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#10B981',
            marginBottom: '1rem',
            background: 'rgba(16,185,129,0.1)',
            padding: '0.4rem 1rem',
            borderRadius: '100px',
            border: '1px solid rgba(16,185,129,0.3)'
          }}>
            <Cpu size={14} />
            <span>Subscriber Premium Biochip Portal</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: '#1a1a2e', marginBottom: '1.25rem', fontWeight: 400 }}>
            Paid Biochip & <span style={{ color: '#3661D6' }}>Assay Services</span>
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto' }}>
            Exclusive portal for active $100, $200, and $300 monthly subscribers. Once paid for the month, you do not have to pay again during your active billing period.
          </p>
        </div>
      </section>

      <section style={{ padding: '2rem 0' }}>
        <div className="container" style={{ padding: '0 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* ACCESS DENIED / UNPAID USER PROMPT */}
          {!isPaidUser ? (
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '3.5rem 2.5rem',
              textAlign: 'center',
              maxWidth: '850px',
              margin: '0 auto',
              border: '2px solid #ef4444',
              boxShadow: '0 10px 30px rgba(239, 68, 68, 0.1)'
            }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)',
                border: '2px solid #EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.5rem auto', color: '#EF4444'
              }}>
                <Lock size={32} />
              </div>
              <h2 style={{ fontSize: '1.8rem', color: '#1a1a2e', marginBottom: '0.75rem', fontWeight: 600 }}>
                Paid Premium Portal Locked (No Free Tier)
              </h2>
              <p style={{ color: '#4b5563', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '650px', margin: '0 auto 2rem auto' }}>
                {currentUser 
                  ? `Your account (${currentUser.email}) does not have an active paid monthly subscription. Please subscribe to a $100, $200, or $300 plan to unlock custom biochip requests.`
                  : 'You must Sign In and subscribe to a paid monthly plan ($100, $200, or $300) to access the Premium Biochip Services Form.'}
              </p>

              {/* 3 Tier Quick Selection */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem', textAlign: 'left' }}>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1a1a2e' }}>Starter Plan</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3661D6', margin: '0.25rem 0' }}>$100 / mo</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>25 Biochips / month</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '2px solid #3661D6' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#3661D6' }}>Pro Clinical Plan</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3661D6', margin: '0.25rem 0' }}>$200 / mo</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>100 Biochips + Priority</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1a1a2e' }}>Enterprise Plan</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#3661D6', margin: '0.25rem 0' }}>$300 / mo</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>300 Biochips + Foundry</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {!currentUser && (
                  <button onClick={onOpenAuth} style={{
                    padding: '0.85rem 1.75rem', borderRadius: '100px', background: '#1a1a2e', color: '#ffffff',
                    fontWeight: 600, border: 'none', cursor: 'pointer'
                  }}>
                    Sign In / Register Account
                  </button>
                )}
                <button onClick={onNavigatePricing} style={{
                  padding: '0.85rem 2rem', borderRadius: '100px', background: '#3661D6', color: '#ffffff',
                  fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'
                }}>
                  <Zap size={18} />
                  <span>Subscribe to Paid Plan ($100, $200, $300)</span>
                </button>
              </div>
            </div>
          ) : (
            /* UNLOCKED PAID SERVICES PORTAL FOR ACTIVE SUBSCRIBERS */
            <div>
              
              {/* Active Monthly Protection Status Banner */}
              <div style={{
                backgroundColor: '#ecfdf5',
                border: '2px solid #10b981',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '0.5rem', borderRadius: '50%', background: '#10b981', color: '#ffffff' }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#065f46' }}>
                      Active Subscription: {currentUser.active_plan}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#047857' }}>
                      Subscriber Email: {currentUser.email} | Valid through: {currentUser.paid_until || 'Current Active Month'}
                    </div>
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #a7f3d0',
                  padding: '0.5rem 1rem',
                  borderRadius: '100px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#047857'
                }}>
                  ✓ Single Monthly Payment Active — No Extra Charges This Month
                </div>
              </div>

              {/* Grid: Form + History */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
                
                {/* Form Column */}
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '2.25rem',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(54,97,214,0.1)', color: '#3661D6' }}>
                      <FileText size={22} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.3rem', color: '#1a1a2e', fontWeight: 600 }}>Premium Service Request Form</h3>
                      <div style={{ fontSize: '0.8rem', color: '#3661D6', fontWeight: 500 }}>Included with your active monthly plan</div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitRequest} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#4b5563', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Service Type *
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        style={{
                          width: '100%', padding: '0.75rem', background: '#f8fafc',
                          border: '1px solid #cbd5e1', borderRadius: '8px', color: '#1a1a2e', outline: 'none', fontFamily: 'inherit'
                        }}
                      >
                        <option value="Custom Biochip Cartridge Foundry">Custom Biochip Cartridge Foundry</option>
                        <option value="Priority Clinical Lab Assay Run">Priority Clinical Lab Assay Run</option>
                        <option value="Onsite SiPhBio Analyzer Calibration">Onsite SiPhBio Analyzer Calibration</option>
                        <option value="Biopharma Kinetic Assay Validation">Biopharma Kinetic Assay Validation</option>
                        <option value="LIMS Custom Pipeline Integration">LIMS Custom Pipeline Integration</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#4b5563', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Laboratory Facility Location *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. San Diego HQ Lab, Building B"
                        value={facilityLocation}
                        onChange={(e) => setFacilityLocation(e.target.value)}
                        style={{
                          width: '100%', padding: '0.75rem', background: '#f8fafc',
                          border: '1px solid #cbd5e1', borderRadius: '8px', color: '#1a1a2e', outline: 'none', fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#4b5563', marginBottom: '0.35rem', fontWeight: 600 }}>
                          Cartridges / Batch
                        </label>
                        <input
                          type="text"
                          value={cartridgeCount}
                          onChange={(e) => setCartridgeCount(e.target.value)}
                          style={{
                            width: '100%', padding: '0.75rem', background: '#f8fafc',
                            border: '1px solid #cbd5e1', borderRadius: '8px', color: '#1a1a2e', outline: 'none', fontFamily: 'inherit'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: '#4b5563', marginBottom: '0.35rem', fontWeight: 600 }}>
                          Urgency
                        </label>
                        <select
                          value={urgency}
                          onChange={(e) => setUrgency(e.target.value)}
                          style={{
                            width: '100%', padding: '0.75rem', background: '#f8fafc',
                            border: '1px solid #cbd5e1', borderRadius: '8px', color: '#1a1a2e', outline: 'none', fontFamily: 'inherit'
                          }}
                        >
                          <option value="Urgent Dispatch (24-48 Hours)">Urgent Dispatch (24-48 Hours)</option>
                          <option value="Standard (7 Days)">Standard (7 Days)</option>
                          <option value="Scheduled Maintenance">Scheduled Maintenance</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: '#4b5563', marginBottom: '0.35rem', fontWeight: 600 }}>
                        Specific Reagent & Assay Instructions
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Specify target antibody clones, functionalization density, or custom buffer conditions..."
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        style={{
                          width: '100%', padding: '0.75rem', background: '#f8fafc',
                          border: '1px solid #cbd5e1', borderRadius: '8px', color: '#1a1a2e', outline: 'none', resize: 'vertical', fontFamily: 'inherit'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        borderRadius: '100px',
                        backgroundColor: '#3661D6',
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
                      <Send size={18} />
                      <span>{loading ? 'Submitting Request...' : 'Submit Premium Service Request'}</span>
                    </button>
                  </form>
                </div>

                {/* Tracker Column */}
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: '#1a1a2e', marginBottom: '1.25rem', fontWeight: 600 }}>
                    My Premium Service Requests
                  </h3>

                  {myRequests.length === 0 ? (
                    <div style={{
                      backgroundColor: '#ffffff', borderRadius: '16px', padding: '2rem',
                      textAlign: 'center', color: '#64748b', border: '1px solid #e5e7eb'
                    }}>
                      <Clock size={32} style={{ margin: '0 auto 0.75rem auto', opacity: 0.5 }} />
                      <p style={{ fontSize: '0.9rem' }}>No active service dispatches submitted yet.</p>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {myRequests.map((req) => (
                        <div key={req.id} style={{
                          backgroundColor: '#ffffff', borderRadius: '12px', padding: '1.25rem',
                          border: '1px solid #e5e7eb', boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#3661D6' }}>Request #{req.id}</span>
                            <span style={{
                              fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px',
                              background: req.status.includes('PENDING') ? '#fef3c7' : '#d1fae5',
                              color: req.status.includes('PENDING') ? '#d97706' : '#059669'
                            }}>
                              {req.status}
                            </span>
                          </div>
                          <div style={{ fontSize: '1rem', fontWeight: 600, color: '#1a1a2e', marginBottom: '0.25rem' }}>
                            {req.service_type}
                          </div>
                          <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                            Location: {req.facility_location} | Urgency: {req.urgency}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

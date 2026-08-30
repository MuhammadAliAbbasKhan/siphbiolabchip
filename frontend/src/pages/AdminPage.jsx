import React, { useState, useEffect } from 'react';
import { ShieldCheck, Lock, Cpu, Server, Users, DollarSign, Activity, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

export function AdminPage() {
  const [passcode, setPasscode] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [analytics, setAnalytics] = useState(null);
  const { addToast } = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!passcode) {
      addToast('Please enter executive admin passcode.', 'error');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.get('http://127.0.0.1:8002/api/v1/admin/analytics/', {
        headers: { 'X-Admin-Passcode': passcode }
      });

      if (res.data.success) {
        setAnalytics(res.data);
        setAuthenticated(true);
        addToast('Executive Admin Authentication Granted', 'success');
      }
    } catch (err) {
      addToast('Unauthorized admin passcode. Access denied.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const refreshAnalytics = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8002/api/v1/admin/analytics/', {
        headers: { 'X-Admin-Passcode': passcode }
      });
      if (res.data.success) {
        setAnalytics(res.data);
        addToast('Analytics refreshed from SQLite & MongoDB Atlas', 'info');
      }
    } catch (err) {}
  };

  if (!authenticated) {
    return (
      <div style={{ paddingTop: '5rem', paddingBottom: '6rem', color: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '440px' }}>
          <div className="glass-card" style={{ padding: '2.5rem', textAlign: 'center', borderColor: 'rgba(6,182,212,0.4)', background: '#0F172A' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(6,182,212,0.15)', border: '1px solid #06B6D4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto', color: '#06B6D4' }}>
              <Lock size={28} />
            </div>

            <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Executive Admin Portal
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginBottom: '1.75rem' }}>
              Enter administrative authorization passcode to view platform analytics, user accounts, and MongoDB sync logs.
            </p>

            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <input
                  type="password"
                  required
                  placeholder="Enter executive admin passcode..."
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  style={{
                    width: '100%', padding: '0.85rem', background: 'rgba(7, 11, 20, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '8px', color: '#FFFFFF', textAlign: 'center', outline: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
              >
                <span>{loading ? 'Authenticating...' : 'Unlock Admin Dashboard'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ color: '#F8FAFC', paddingTop: '3rem', paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <div className="badge" style={{ marginBottom: '0.4rem', borderColor: '#10B981', color: '#10B981' }}>
              <ShieldCheck size={14} />
              <span>AUTHENTICATED EXECUTIVE SESSION</span>
            </div>
            <h1 style={{ fontSize: '2rem', color: '#FFFFFF' }}>
              SiPhBioLabChip Administrative Dashboard
            </h1>
          </div>

          <button onClick={refreshAnalytics} className="btn-secondary" style={{ padding: '0.6rem 1.25rem' }}>
            <RefreshCw size={16} />
            <span>Refresh Analytics</span>
          </button>
        </div>

        {/* Analytics Gauges Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem'
        }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Analyzers Online</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#06B6D4' }}>{analytics?.activeAnalyzersOnline}</div>
            <div style={{ fontSize: '0.75rem', color: '#10B981' }}>● SiPhBio Telemetry Active</div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Biochips Deployed</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#38BDF8' }}>{analytics?.totalBiochipsDeployed?.toLocaleString()}</div>
            <div style={{ fontSize: '0.75rem', color: '#CBD5E1' }}>Global Clinical Deployments</div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Registered Users</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFFFFF' }}>{analytics?.totalUsers}</div>
            <div style={{ fontSize: '0.75rem', color: '#10B981' }}>{analytics?.paidSubscribers} Paid Subscribers</div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Monthly ARR Revenue</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#10B981' }}>${analytics?.monthlyRevenue?.toLocaleString()} USD</div>
            <div style={{ fontSize: '0.75rem', color: '#F59E0B' }}>Stripe Verified Intent</div>
          </div>
        </div>

        {/* Database Status Bar */}
        <div className="glass-card" style={{ padding: '1.25rem 1.75rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderColor: 'rgba(16,185,129,0.4)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Server size={20} style={{ color: '#10B981' }} />
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>Dual Persistence Sync Engine Status</div>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{analytics?.mongoSyncStatus}</div>
            </div>
          </div>
          <span className="badge" style={{ borderColor: '#10B981', color: '#10B981' }}>OPERATIONAL NOMINAL</span>
        </div>

        {/* Tables Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          
          {/* Service Requests */}
          <div className="glass-card" style={{ padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '1rem' }}>Active Service Requests</h3>
            {analytics?.serviceRequests?.length === 0 ? (
              <div style={{ color: '#94A3B8', fontSize: '0.9rem' }}>No service requests pending.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {analytics?.serviceRequests?.map((sr) => (
                  <div key={sr.id} style={{ background: 'rgba(7,11,20,0.6)', padding: '0.85rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#06B6D4' }}>#{sr.id} — {sr.service_type}</div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>User: {sr.user_email} | Co: {sr.company}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Subscriptions */}
          <div className="glass-card" style={{ padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '1rem' }}>Stripe Subscriptions</h3>
            {analytics?.subscriptions?.length === 0 ? (
              <div style={{ color: '#94A3B8', fontSize: '0.9rem' }}>No active subscription payments recorded yet.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {analytics?.subscriptions?.map((sub) => (
                  <div key={sub.id} style={{ background: 'rgba(7,11,20,0.6)', padding: '0.85rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10B981' }}>${sub.amount} USD — {sub.plan_name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>User: {sub.email} | Stripe ID: {sub.stripe_payment_id}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* System Telemetry Logs */}
        <div className="glass-card" style={{ padding: '1.75rem' }}>
          <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '1rem' }}>Live Biochip Telemetry System Logs</h3>
          <div style={{ background: '#070B14', borderRadius: '8px', padding: '1.25rem', fontFamily: 'monospace', fontSize: '0.85rem', color: '#38BDF8', height: '180px', overflowY: 'auto' }}>
            {analytics?.logs?.map((log, idx) => (
              <div key={idx} style={{ marginBottom: '0.4rem' }}>
                <span style={{ color: '#64748B' }}>[{log.timestamp}]</span> <span style={{ color: log.level === 'SUCCESS' ? '#10B981' : '#06B6D4' }}>{log.level}:</span> {log.message}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

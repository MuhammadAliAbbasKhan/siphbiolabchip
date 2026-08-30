import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../context/ToastContext';

export function CheckoutModal({ isOpen, onClose, selectedPlan, isYearly, currentUser, onOpenAuth, onNavigatePaidServices, onPaymentSuccess }) {
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [loading, setLoading] = useState(false);
  const [paidSuccess, setPaidSuccess] = useState(false);
  const { addToast } = useToast();

  if (!isOpen || !selectedPlan) return null;

  const price = isYearly ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice;

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      addToast('You must Sign In or Register an account first before checkout.', 'error');
      onOpenAuth();
      return;
    }

    if (!cardholder || !cardNumber || !expiry || !cvc) {
      addToast('Please fill in all credit card details.', 'error');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('http://127.0.0.1:8002/api/v1/checkout/subscribe/', {
        email: currentUser.email,
        plan_id: selectedPlan.id,
        plan_name: selectedPlan.name,
        amount: price,
        billing_cycle: isYearly ? 'yearly' : 'monthly',
        cardholder,
        cardNumber
      });

      if (res.data.success) {
        if (res.data.user && onPaymentSuccess) {
          onPaymentSuccess(res.data.user);
        }
        if (res.data.already_paid) {
          addToast(res.data.message, 'info');
        } else {
          addToast(res.data.message, 'success');
        }
        setPaidSuccess(true);
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Payment processing error. Please try again.';
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
        maxWidth: '500px',
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

        {paidSuccess ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)',
              border: '2px solid #10B981', display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 1.5rem auto', color: '#10B981'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '0.75rem' }}>
              Subscription Unlocked!
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              Your account <strong>{currentUser?.email}</strong> is now active on the <strong>{selectedPlan.name}</strong> tier. You have full access to custom biochip cartridge orders and lab service dispatches.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button 
                onClick={() => { onClose(); onNavigatePaidServices(); }} 
                className="btn-primary" 
                style={{ padding: '0.75rem 1.5rem' }}
              >
                Go to Paid Assays Portal
              </button>
            </div>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div className="badge" style={{ marginBottom: '0.5rem' }}>
                <ShieldCheck size={14} />
                <span>Stripe Encrypted Payment</span>
              </div>
              <h2 style={{ fontSize: '1.5rem', color: '#FFFFFF' }}>
                Checkout: {selectedPlan.name}
              </h2>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#06B6D4', marginTop: '0.25rem' }}>
                ${price} <span style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 500 }}>/ {isYearly ? 'year (billed annually)' : 'month'}</span>
              </div>
            </div>

            {!currentUser && (
              <div style={{
                background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)',
                padding: '0.85rem 1rem', borderRadius: '10px', color: '#FCA5A5', fontSize: '0.85rem',
                marginBottom: '1.25rem', textAlign: 'center'
              }}>
                Please Sign In or Register before completing checkout so your subscription can be bound to your account.
              </div>
            )}

            <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Cardholder Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Eleanor Vance"
                  value={cardholder}
                  onChange={(e) => setCardholder(e.target.value)}
                  style={{
                    width: '100%', padding: '0.75rem', background: 'rgba(7, 11, 20, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
                  Card Number *
                </label>
                <div style={{ position: 'relative' }}>
                  <CreditCard size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748B' }} />
                  <input
                    type="text"
                    required
                    placeholder="4242 •••• •••• 4242"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.4rem', background: 'rgba(7, 11, 20, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
                    Expiry (MM/YY) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="08/28"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem', background: 'rgba(7, 11, 20, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>
                    CVC Code *
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="•••"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    style={{
                      width: '100%', padding: '0.75rem', background: 'rgba(7, 11, 20, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', color: '#FFFFFF', outline: 'none'
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
                <Lock size={16} />
                <span>{loading ? 'Processing Payment...' : `Pay $${price} & Activate Subscription`}</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

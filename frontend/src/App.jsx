import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { ToastNotification } from './components/ToastNotification';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { DemoModal } from './components/DemoModal';
import { CheckoutModal } from './components/CheckoutModal';
import { QuizModal } from './components/QuizModal';

// Pages
import HomePage from './pages/HomePage';
import SciencePage from './pages/TechnologyPage';
import AboutPage from './pages/MerlinPlatformPage';
import UseCasesPage from './pages/AssaysPage';
import PublicationsPage from './pages/ResourcesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PaidServicesPage } from './pages/PaidServicesPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { EventsWebinarsPage } from './pages/EventsWebinarsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { FaqPage } from './pages/FaqPage';

export function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [authOpen, setAuthOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isYearly, setIsYearly] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('siphbiolabchip_user');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {}
    }
  }, []);

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    localStorage.setItem('siphbiolabchip_user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('siphbiolabchip_user');
  };

  const handleSelectPlan = (plan, yearly) => {
    setSelectedPlan(plan);
    setIsYearly(yearly);
    setCheckoutOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <Header 
        onOpenQuiz={() => setQuizOpen(true)}
        onStartTesting={() => setCheckoutOpen(true)}
      />

      {/* Spacer for Fixed Floating Header */}
      <div style={{ height: '85px' }} />

      {/* Main Content & Routes */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/science" element={<SciencePage />} />
          <Route path="/company" element={<AboutPage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/news" element={<BlogPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/volunteer" element={<EventsWebinarsPage />} />

          {/* Additional Platform Features */}
          <Route path="/assays" element={<SolutionsPage onOpenDemo={() => setDemoOpen(true)} />} />
          <Route path="/paid-services" element={<PaidServicesPage currentUser={currentUser} onOpenAuth={() => setAuthOpen(true)} onNavigatePricing={() => window.location.href = '/pricing'} onSelectPlan={handleSelectPlan} />} />
          <Route path="/pricing" element={<PricingPage onSelectPlan={handleSelectPlan} onNavigatePaidServices={() => setCurrentPage('paid-services')} />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookie" element={<CookiePolicyPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Modals */}
      <QuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onStartTesting={() => setCheckoutOpen(true)}
      />
      <AuthModal 
        isOpen={authOpen} 
        onClose={() => setAuthOpen(false)} 
        onAuthSuccess={handleAuthSuccess}
      />
      <DemoModal 
        isOpen={demoOpen} 
        onClose={() => setDemoOpen(false)} 
      />
      <CheckoutModal 
        isOpen={checkoutOpen} 
        onClose={() => setCheckoutOpen(false)} 
        selectedPlan={selectedPlan} 
        isYearly={isYearly}
        currentUser={currentUser}
        onOpenAuth={() => setAuthOpen(true)}
        onNavigatePaidServices={() => setCurrentPage('paid-services')}
        onPaymentSuccess={handleAuthSuccess}
      />

      <ToastNotification />

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </Router>
  );
}

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreServices from './components/CoreServices';
import PricingTiers from './components/PricingTiers';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Services from './components/Services';
import FAQ from './components/FAQ';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes('policy') && !location.pathname.includes('terms')) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function MainLayout() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black"
          style={{
            background: `
              radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 100%),
              radial-gradient(1px 1px at 40% 70%, rgba(255, 255, 255, 0.7) 0%, transparent 100%),
              radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.9) 0%, transparent 100%),
              radial-gradient(2px 2px at 70% 90%, rgba(255, 255, 255, 0.6) 0%, transparent 100%),
              radial-gradient(2px 2px at 90% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 100%)
            `,
            backgroundSize: '250px 250px',
            animation: 'twinkle 8s ease-in-out infinite alternate',
          }}
        />
        
        <div className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 20% 30%, rgba(0, 183, 255, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(255, 0, 221, 0.1) 0%, transparent 40%)
            `,
            filter: 'blur(20px)',
            animation: 'nebulaPulse 15s ease-in-out infinite',
          }}
        />
        
        <div className="absolute inset-0 grid-animation opacity-20" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <CoreServices />
        <PricingTiers />
        <HowItWorks />
        <Testimonials />
        <WhyUs />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><MainLayout /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
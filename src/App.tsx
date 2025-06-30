import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SeamlessIntegration from './components/SeamlessIntegration';
import MobileInteraction from './components/MobileInteraction';
import Solutions from './components/Solutions';
import AIAssistants from './components/AIAssistants';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Impressum from './components/Impressum';
import DeploymentForm from './components/DeploymentForm';
import SolutionSelector from './components/SolutionSelector';
import Security from './components/Security';
import AboutUs from './components/AboutUs';
import AIAssistantSelector from './components/AIAssistantSelector';
import AnnaDetails from './components/assistant-details/AnnaDetails';
import JohnDetails from './components/assistant-details/JohnDetails';
import MiraDetails from './components/assistant-details/MiraDetails';
import LeadCaptureDetails from './components/solution-details/LeadCaptureDetails';
import CrmIntegrationDetails from './components/solution-details/CrmIntegrationDetails';
import SmartSchedulingDetails from './components/solution-details/SmartSchedulingDetails';
import CustomerSupportDetails from './components/solution-details/CustomerSupportDetails';
import SocialMediaAutomationDetails from './components/solution-details/SocialMediaAutomationDetails';
import OrderFlowDetails from './components/solution-details/OrderFlowDetails';
import AICallCenterDetails from './components/solution-details/AICallCenterDetails';
import ChatbotDetails from './components/solution-details/ChatbotDetails';
import HRRecruitmentDetails from './components/solution-details/HRRecruitmentDetails';
import SalesCoachDetails from './components/solution-details/SalesCoachDetails';

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
        <SeamlessIntegration />
        <MobileInteraction />
        <AIAssistants />
        <Solutions />
        <Technologies />
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
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
        <Route path="/impressum" element={<PageTransition><Impressum /></PageTransition>} />
        <Route path="/deploy" element={<PageTransition><DeploymentForm /></PageTransition>} />
        <Route path="/solutions" element={<PageTransition><SolutionSelector /></PageTransition>} />
        <Route path="/security" element={<PageTransition><Security /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
        <Route path="/ai-assistants" element={<PageTransition><AIAssistantSelector /></PageTransition>} />
        <Route path="/anna-details" element={<PageTransition><AnnaDetails /></PageTransition>} />
        <Route path="/john-details" element={<PageTransition><JohnDetails /></PageTransition>} />
        <Route path="/mira-details" element={<PageTransition><MiraDetails /></PageTransition>} />
        <Route path="/lead-capture-details" element={<PageTransition><LeadCaptureDetails /></PageTransition>} />
        <Route path="/crm-integration-details" element={<PageTransition><CrmIntegrationDetails /></PageTransition>} />
        <Route path="/smart-scheduling-details" element={<PageTransition><SmartSchedulingDetails /></PageTransition>} />
        <Route path="/customer-support-ai-details" element={<PageTransition><CustomerSupportDetails /></PageTransition>} />
        <Route path="/social-media-automation-details" element={<PageTransition><SocialMediaAutomationDetails /></PageTransition>} />
        <Route path="/order-flow-details" element={<PageTransition><OrderFlowDetails /></PageTransition>} />
        <Route path="/ai-call-center-details" element={<PageTransition><AICallCenterDetails /></PageTransition>} />
        <Route path="/chatbot-details" element={<PageTransition><ChatbotDetails /></PageTransition>} />
        <Route path="/hr-recruitment-details" element={<PageTransition><HRRecruitmentDetails /></PageTransition>} />
        <Route path="/sales-coach-details" element={<PageTransition><SalesCoachDetails /></PageTransition>} />
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
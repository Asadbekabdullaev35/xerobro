import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { Languages } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const isVisible = useScrollDirection();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 bg-transparent transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${mounted ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={handleLogoClick} 
            className="text-white hover:text-gray-300 transition-colors flex items-center space-x-3"
          >
            <Languages className="h-8 w-8" />
            <span className="text-xl font-bold">GermanPath</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Success Stories
            </button>
            <button 
              onClick={() => navigate('/faq')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors border border-white/20"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
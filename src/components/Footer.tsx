import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, ExternalLink, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black relative">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Glow effect */}
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12">
          {/* Contact Information */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">StudienPrep</span>
            </div>
            <a 
              href="mailto:info@studienprep.com" 
              className="flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <Mail size={18} className="mr-3 group-hover:scale-110 transition-transform" />
              info@studienprep.com
            </a>
            <a 
              href="tel:+4915123456789" 
              className="flex items-center text-gray-400 hover:text-white transition-colors group"
            >
              <Phone size={18} className="mr-3 group-hover:scale-110 transition-transform" />
              +49 151 234 567 89
            </a>
            <div className="flex items-center text-gray-400 group">
              <MapPin size={18} className="mr-3" />
              <span>Based in Berlin, Germany</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-white font-semibold text-xl mb-2">Quick Links</h3>
            <a href="#services" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <ExternalLink size={16} className="mr-3 group-hover:translate-x-1 transition-transform" />
              Services
            </a>
            <a href="#testimonials" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <ExternalLink size={16} className="mr-3 group-hover:translate-x-1 transition-transform" />
              Testimonials
            </a>
            <Link to="/faq" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <ExternalLink size={16} className="mr-3 group-hover:translate-x-1 transition-transform" />
              FAQ
            </Link>
            <Link to="/privacy-policy" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <ExternalLink size={16} className="mr-3 group-hover:translate-x-1 transition-transform" />
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="flex items-center text-gray-400 hover:text-white transition-colors group">
              <ExternalLink size={16} className="mr-3 group-hover:translate-x-1 transition-transform" />
              Terms of Service
            </Link>
          </div>
          
          {/* Social Media */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-white font-semibold text-xl mb-2">Follow Us</h3>
            <div className="flex flex-col items-center space-y-4">
              <a 
                href="https://linkedin.com/company/studienprep" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-4 rounded-full text-white hover:bg-white/20 transition-colors hover:scale-110 transform duration-200 flex items-center space-x-2"
              >
                <Linkedin size={22} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a 
                href="https://instagram.com/studienprep" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-4 rounded-full text-white hover:bg-white/20 transition-colors hover:scale-110 transform duration-200 flex items-center space-x-2"
              >
                <Instagram size={22} />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a 
                href="https://facebook.com/studienprep" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-4 rounded-full text-white hover:bg-white/20 transition-colors hover:scale-110 transform duration-200 flex items-center space-x-2"
              >
                <Facebook size={22} />
                <span className="hidden sm:inline">Facebook</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} StudienPrep. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
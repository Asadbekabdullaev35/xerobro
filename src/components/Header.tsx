import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">AIRTHODOX</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Success Stories</a>
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </nav>
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
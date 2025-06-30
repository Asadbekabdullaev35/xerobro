import React, { useEffect } from 'react';
import PageHeader from './PageHeader';
import type { LucideIcon } from 'lucide-react';

interface AssistantDetailLayoutProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const AssistantDetailLayout: React.FC<AssistantDetailLayoutProps> = ({ title, subtitle, icon: Icon, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader title={title} />
      <div className="pt-32 pb-24 relative">
        <div className="matrix-bg" />
        <div className="grid-animation absolute inset-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Hero Section with Animated Icon */}
          <div className="text-center mb-20">
            <div className="inline-block relative mb-8">
              {/* Animated background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-full blur-xl animate-pulse" />
              
              {/* Icon container */}
              <div className="relative p-8 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/20">
                <Icon className="h-20 w-20 text-white transform group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          {/* Content Container */}
          <div className="max-w-5xl mx-auto">
            <div className="space-y-20">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantDetailLayout;
import React, { useEffect } from 'react';
import PageHeader from '../PageHeader';
import type { LucideIcon } from 'lucide-react';

interface DetailLayoutProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const DetailLayout: React.FC<DetailLayoutProps> = ({ title, subtitle, icon: Icon, children }) => {
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
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-block p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
              <Icon className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono">{title}</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          {/* Content Container with Max Width for Better Readability */}
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

export default DetailLayout;
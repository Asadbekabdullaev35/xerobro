import React, { useEffect } from 'react';
import PageHeader from './PageHeader';
import type { LucideIcon } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface DetailLayoutProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  children: React.ReactNode;
  profileImage?: string;
}

const DetailLayout: React.FC<DetailLayoutProps> = ({ title, subtitle, icon: Icon, children, profileImage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [featuresRef, featuresVisible] = useIntersectionObserver<HTMLDivElement>();
  const [metricsRef, metricsVisible] = useIntersectionObserver<HTMLDivElement>();
  const [specsRef, specsVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-black text-white">
      <PageHeader title={title} />
      <div className="pt-32 pb-24 relative">
        <div className="matrix-bg" />
        <div className="grid-animation absolute inset-0" />
        
        {/* Hero Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Profile Card */}
            {profileImage && (
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative h-full bg-black border border-white/10 rounded-lg transition-all duration-500 hover:bg-white/5 hover:border-white/30 hover:scale-[1.02]">
                    <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                      <img 
                        src={profileImage} 
                        alt={`${title} profile`}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: '50% 20%' }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black via-black/70 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Content Area */}
            <div className={`flex-1 ${!profileImage ? 'text-center mx-auto' : ''}`}>
              {/* Icon (shown only if no profile image) */}
              {!profileImage && (
                <div className="inline-block relative mb-8">
                  <div className="absolute -inset-4 bg-white/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative p-8 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/20">
                    <Icon className="h-20 w-20 text-white" />
                  </div>
                </div>
              )}
              
              {/* Title with gradient text */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-mono bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                {title}
              </h1>
              
              {/* Subtitle with max width for readability */}
              <div className="max-w-3xl mx-auto">
                <div className="text-xl text-gray-400 leading-relaxed">
                  <TypeAnimation
                    sequence={[subtitle]}
                    wrapper="p"
                    speed={90}
                    cursor={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative mt-32">
          {/* Large background icon */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="w-[150vh] h-[150vh] text-white transform -rotate-12" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          </div>

          {/* Content with sections */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-32">
                {/* Features Section */}
                <div
                  ref={featuresRef}
                  className={`transform transition-all duration-1000 ${
                    featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {React.Children.map(children, (child, index) => {
                    if (index === 0) return child; // Features section
                  })}
                </div>

                {/* Metrics Section */}
                <div
                  ref={metricsRef}
                  className={`transform transition-all duration-1000 ${
                    metricsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {React.Children.map(children, (child, index) => {
                    if (index === 1) return child; // Metrics section
                  })}
                </div>

                {/* Technical Details Section */}
                <div
                  ref={specsRef}
                  className={`transform transition-all duration-1000 ${
                    specsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  {React.Children.map(children, (child, index) => {
                    if (index === 2) return child; // Technical details section
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLayout;
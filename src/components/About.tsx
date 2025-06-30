import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from 'react-i18next';
import { Users, Award, Globe } from 'lucide-react';

const About = () => {
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>();
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: '1000+', label: t('about.stats.students') },
    { icon: Award, value: '98%', label: t('about.stats.success') },
    { icon: Globe, value: '50+', label: t('about.stats.universities') }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={contentRef}
          className={`transform transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="inline-block p-4 rounded-full bg-white/10 mb-4 group-hover:bg-white/20 transition-all">
                  <stat.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/70 text-lg mb-6">
              {t('about.description')}
            </p>
            <div className="h-[1px] w-24 bg-gradient-to-r from-white via-white/50 to-transparent mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
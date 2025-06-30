import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from 'react-i18next';
import { Users, Award, Clock, Globe } from 'lucide-react';

const WhyUs = () => {
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>();
  const { t } = useTranslation();

  const features = [
    {
      icon: Users,
      title: t('whyUs.expert.title'),
      description: t('whyUs.expert.description')
    },
    {
      icon: Award,
      title: t('whyUs.success.title'),
      description: t('whyUs.success.description')
    },
    {
      icon: Clock,
      title: t('whyUs.flexible.title'),
      description: t('whyUs.flexible.description')
    },
    {
      icon: Globe,
      title: t('whyUs.complete.title'),
      description: t('whyUs.complete.description')
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={contentRef}
          className={`transform transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent mb-6">
                {t('whyUs.title')}
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
                {t('whyUs.subtitle')}
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all">
                      <feature.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Team Photo Placeholder */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="relative bg-gradient-to-br from-white/10 to-transparent rounded-2xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-24 w-24 text-white/30 mx-auto mb-4" />
                    <p className="text-white/60 text-lg">{t('whyUs.teamPhoto.title')}</p>
                    <p className="text-white/40 text-sm mt-2">
                      {t('whyUs.teamPhoto.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
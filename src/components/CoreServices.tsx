import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from 'react-i18next';
import { BookOpen, FileText, Home, MessageCircle } from 'lucide-react';

const CoreServices = () => {
  const [gridRef, gridVisible] = useIntersectionObserver<HTMLDivElement>();
  const { t } = useTranslation();

  const services = [
    {
      icon: BookOpen,
      title: t('services.german.title'),
      description: t('services.german.description'),
      features: t('services.german.features', { returnObjects: true }) as string[]
    },
    {
      icon: FileText,
      title: t('services.university.title'),
      description: t('services.university.description'),
      features: t('services.university.features', { returnObjects: true }) as string[]
    },
    {
      icon: Home,
      title: t('services.visa.title'),
      description: t('services.visa.description'),
      features: t('services.visa.features', { returnObjects: true }) as string[]
    },
    {
      icon: MessageCircle,
      title: t('services.support.title'),
      description: t('services.support.description'),
      features: t('services.support.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-mono mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative h-full p-8 bg-black border border-white/10 rounded-lg transition-all duration-500 hover:bg-white/5 hover:border-white/30 hover:scale-[1.02] flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative h-12 w-12 bg-gradient-to-br from-white/10 to-transparent rounded-lg p-2.5 border border-white/20">
                    <service.icon className="h-7 w-7 text-white transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>

                <div className="flex-1 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-start text-sm text-gray-400 group/feature"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-white/50 mr-3 mt-2 flex-shrink-0 group-hover/feature:bg-white transition-colors" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
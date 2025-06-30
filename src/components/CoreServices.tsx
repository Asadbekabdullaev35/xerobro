import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { BookOpen, FileText, Home, MessageCircle } from 'lucide-react';

const CoreServices = () => {
  const [gridRef, gridVisible] = useIntersectionObserver<HTMLDivElement>();

  const services = [
    {
      icon: BookOpen,
      title: 'German Language Courses',
      description: 'A1–A2, B1–B2, C1 & Studienkolleg C-Test with one-on-one coaching',
      features: [
        'Structured A1-C1 curriculum',
        'Studienkolleg C-Test preparation',
        'One-on-one coaching sessions',
        'Interactive learning materials'
      ]
    },
    {
      icon: FileText,
      title: 'University Applications',
      description: 'Expert guidance on applications, documents & deadlines',
      features: [
        'University selection guidance',
        'Application document preparation',
        'Deadline management',
        'Admission strategy consulting'
      ]
    },
    {
      icon: Home,
      title: 'Visa & Accommodation',
      description: 'Blocked account, insurance, visa paperwork & housing search',
      features: [
        'Blocked account setup',
        'Health insurance arrangement',
        'Visa application support',
        'Housing search assistance'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Ongoing Support',
      description: 'Chat, phone & in-person assistance in Germany and Uzbekistan',
      features: [
        '24/7 chat support',
        'Phone consultation',
        'In-person meetings',
        'Emergency assistance'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-mono mb-6">
            Complete German Journey Support
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need from language learning to settling in Germany
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
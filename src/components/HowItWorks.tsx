import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { UserPlus, BookOpen, GraduationCap, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>();

  const steps = [
    {
      icon: UserPlus,
      title: 'Enroll',
      description: 'Choose language level & service tier',
      details: 'Select your German proficiency level and the support package that fits your needs'
    },
    {
      icon: BookOpen,
      title: 'Prepare',
      description: 'Language training & application prep',
      details: 'Intensive German courses and comprehensive university application preparation'
    },
    {
      icon: GraduationCap,
      title: 'Succeed',
      description: 'Visa, arrival & ongoing support',
      details: 'Complete visa processing, arrival assistance, and continuous support in Germany'
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-mono mb-6">
              Your Journey to Germany
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our proven three-step process to German university success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-white/20 via-white/50 to-white/20 transform -translate-y-1/2" />
            
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>

                <div className="text-center p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:bg-white/10 transition-all group-hover:scale-105">
                  <div className="inline-block p-6 rounded-full bg-white/10 mb-6 group-hover:bg-white/20 transition-all">
                    <step.icon className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-300 mb-4">{step.description}</p>
                  <p className="text-sm text-gray-400">{step.details}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="h-6 w-6 text-white/50 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
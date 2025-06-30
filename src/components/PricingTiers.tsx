import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Check, Star, Crown, Zap } from 'lucide-react';

const PricingTiers = () => {
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tiers = [
    {
      name: 'Standard',
      price: '$200',
      icon: Star,
      description: 'Perfect for document preparation and basic consultation',
      features: [
        'Documents application',
        'Personal consultation with an applications expert',
        'Delivery: up to 10 days',
        'Format: fully online'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$699',
      icon: Crown,
      description: 'Comprehensive support for your entire application process',
      features: [
        'Everything in Standard',
        'Visa application assistance',
        'Accommodation search support',
        'Insurance & blocked account setup',
        'Emergency university liaison',
        'Format: online + bot notifications'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$999',
      icon: Zap,
      description: 'Complete end-to-end journey with personal accompaniment',
      features: [
        'Everything in Standard & Pro',
        'End-to-end process accompaniment',
        'Anmeldung, bank & insurance setup',
        'Residence permit application help',
        'Bureaucratic question support',
        'Format: online + chat/phone + in-person'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={contentRef}
          className={`transform transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-mono mb-6">
              Choose Your Support Level
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From basic document help to complete journey accompaniment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => (
              <div 
                key={index}
                className={`group relative ${tier.popular ? 'scale-105' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className={`relative h-full p-8 bg-black border rounded-lg transition-all duration-500 hover:bg-white/5 hover:scale-[1.02] flex flex-col ${
                  tier.popular 
                    ? 'border-white/50 bg-white/5' 
                    : 'border-white/10 hover:border-white/30'
                }`}>
                  <div className="text-center mb-8">
                    <div className="inline-block p-4 rounded-full bg-white/10 mb-4 group-hover:bg-white/20 transition-all">
                      <tier.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-white mb-4">{tier.price}</div>
                    <p className="text-gray-400 text-sm">{tier.description}</p>
                  </div>

                  <div className="flex-1 space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-start text-sm text-gray-400 group/feature"
                      >
                        <Check className="h-4 w-4 mr-3 mt-0.5 text-white/70 flex-shrink-0 group-hover/feature:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={scrollToContact}
                    className={`w-full py-3 rounded-lg font-mono transition-all duration-300 ${
                      tier.popular
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    } relative overflow-hidden group/btn`}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
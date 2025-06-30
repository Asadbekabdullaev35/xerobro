import React from 'react';
import PricingCard from './PricingCard';

const plans = [
  {
    name: 'Basic',
    price: '199',
    description: 'For small businesses starting with automation',
    features: [
      'Basic AI Automation',
      'Customer Support Bot',
      '5 Team Members',
      'Basic Analytics'
    ],
    disabledFeatures: [
      'Advanced Integrations',
      'Custom Workflows'
    ]
  },
  {
    name: 'Professional',
    price: '399',
    description: 'For mid-sized businesses with growing needs',
    features: [
      'Advanced AI Automation',
      'Multi-Channel Support',
      '15 Team Members',
      'Advanced Analytics',
      'Advanced Integrations',
      'Custom Workflows'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Fully customizable for large-scale operations',
    features: [
      'Enterprise AI Solutions',
      'Unlimited Support Channels',
      'Unlimited Team Members',
      'Custom Analytics',
      'Custom Integrations',
      'Custom Workflows'
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16">
          <div className="inline-block">
            <div className="flex flex-col items-start">
              <span className="font-mono text-white/70 mb-2"># DEPLOYMENT_PLANS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                System Access Tiers_
              </h2>
              <p className="text-gray-400 mt-4 font-mono">
                Select optimal configuration for your infrastructure
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
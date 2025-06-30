import React from 'react';
import { Cpu, Network, Workflow, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: Cpu,
    title: 'Neural Processing',
    description: 'Advanced AI algorithms optimized for your business logic',
    gradient: 'from-white to-white/80'
  },
  {
    icon: Network,
    title: 'Quantum Integration',
    description: 'Seamless connection with existing enterprise systems',
    gradient: 'from-white/90 to-white/70'
  },
  {
    icon: Workflow,
    title: 'Smart Workflows',
    description: 'Self-optimizing process automation with ML',
    gradient: 'from-white/80 to-white/60'
  },
  {
    icon: Zap,
    title: 'Instant Deploy',
    description: 'Zero-latency implementation with live monitoring',
    gradient: 'from-white to-white/80'
  }
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16">
          <div className="inline-block">
            <div className="flex flex-col items-start">
              <span className="font-mono text-white/70 mb-2"># SYSTEM_CAPABILITIES</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-mono">
                Advanced Neural Architecture_
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
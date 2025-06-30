import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    disabledFeatures?: string[];
    popular?: boolean;
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const navigate = useNavigate();

  return (
    <div className="group relative">
      {/* Glow effect - positioned behind */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main card */}
      <div
        className={`relative rounded-lg p-8 transition-all duration-500 
          ${plan.popular 
            ? 'bg-white/10 border-2 border-white group-hover:border-white/80' 
            : 'bg-black/50 border border-white/20 group-hover:border-white/50'
          } hover:transform hover:scale-[1.02]`}
      >
        {plan.popular && (
          <div className="absolute -top-4 left-4 bg-white text-black px-4 py-1 rounded-full text-sm font-mono">
            RECOMMENDED
          </div>
        )}
        
        <h3 className="text-2xl font-bold text-white mb-2 font-mono group-hover:text-white transition-colors">
          {plan.name}
        </h3>
        <p className="text-gray-400 mb-6 font-mono text-sm">{plan.description}</p>
        
        <div className="mb-6 font-mono">
          <span className="text-4xl font-bold text-white group-hover:text-white transition-colors">
            ${plan.price}
          </span>
          {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
        </div>
        
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center text-white font-mono text-sm group-hover:transform group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${index * 50}ms` }}>
              <Check className="h-5 w-5 text-white mr-2" />
              {feature}
            </li>
          ))}
          {plan.disabledFeatures?.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600 font-mono text-sm">
              <Check className="h-5 w-5 text-gray-700 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        
        <button 
          onClick={() => navigate('/deploy')}
          className={`w-full py-3 rounded-lg font-mono text-sm transition-all duration-300
            ${plan.popular
              ? 'bg-white text-black hover:bg-gray-100 hover:shadow-lg hover:shadow-white/25'
              : 'bg-white/10 text-white hover:bg-white/20'
            } relative overflow-hidden group`}
        >
          <span className="relative z-10">Initialize Plan</span>
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-500" />
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
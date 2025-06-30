import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Solution } from '../data/solutions';

interface SolutionCardProps {
  solution: Solution;
  showCollapsible?: boolean;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution, showCollapsible = false }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const { icon: Icon, title, description, features } = solution;
  
  const getDetailPath = () => {
    switch (title) {
      case 'Leadgenerering':
        return '/lead-capture-details';
      case 'CRM-integration':
        return '/crm-integration-details';
      case 'Smart-bokningar':
        return '/smart-scheduling-details';
      case 'Kundsupport':
        return '/customer-support-ai-details';
      case 'Sociala Medier':
        return '/social-media-automation-details';
      case 'Offert & Orderflöde':
        return '/order-flow-details';
      case 'AI-callcenter':
        return '/ai-call-center-details';
      case 'Chatbots':
        return '/chatbot-details';
      case 'Rekrytering':
        return '/hr-recruitment-details';
      case 'Säljcoach':
        return '/sales-coach-details';
      default:
        return '/';
    }
  };

  const toggleFeatures = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };
  
  return (
    <div className="group relative h-full">
      {/* Large background icon */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-5 transition-opacity duration-500">
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-64 h-64 text-white transform -rotate-12" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Main card content */}
      <div className="relative h-full p-6 bg-black border border-white/10 rounded-lg transition-all duration-500 hover:bg-white/5 hover:border-white/30 hover:scale-[1.02] flex flex-col">
        {/* Header section */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative h-12 w-12 bg-gradient-to-br from-white/10 to-transparent rounded-lg p-2.5 border border-white/20">
            <Icon className="h-7 w-7 text-white transform group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 rounded-lg border border-white/10 animate-ping opacity-0 group-hover:opacity-100" />
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-4">
          {description}
        </p>

        {/* Features section */}
        {showCollapsible ? (
          <>
            {/* Features toggle button */}
            <button 
              onClick={toggleFeatures}
              className="flex items-center text-white/70 hover:text-white mb-2 transition-colors"
            >
              <ChevronDown className={`h-4 w-4 mr-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
              <span className="text-sm">{isExpanded ? 'Dölj funktioner' : 'Visa funktioner'}</span>
            </button>

            {/* Expandable features list */}
            <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="space-y-2 mb-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start text-sm text-gray-400 group/feature"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-white/50 group-hover/feature:translate-x-1 transition-transform flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 space-y-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start text-sm text-gray-400 group/feature"
              >
                <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-white/50 group-hover/feature:translate-x-1 transition-transform flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Read More link */}
        <div 
          onClick={() => navigate(getDetailPath())}
          className="mt-auto self-end flex items-center text-sm text-white/70 hover:text-white cursor-pointer group/link"
        >
          <span>Läs mer</span>
          <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
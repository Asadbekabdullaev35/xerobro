import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, Zap, Settings } from 'lucide-react';
import PageHeader from './PageHeader';
import annaImage from '../data/logo/ANNA.png';
import johnImage from '../data/logo/Maleassistant.png';
import miraImage from '../data/logo/MIRA.png';

interface Assistant {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  detailPath: string;
}

const assistants: Assistant[] = [
  {
    id: 'anna',
    name: 'ANNA',
    role: 'Admin',
    description: 'Den ultimata administrativa assistenten som hanterar allt från CRM och orderflöden till kundsupport och bokningar.',
    image: annaImage,
    detailPath: '/anna-details'
  },
  {
    id: 'john',
    name: 'JOHN',
    role: 'Sälj',
    description: 'Din säljassistent som är dedikerad till leadgenerering och att maximera din försäljning. Analyserar säljsamtal och ger coachning för att förbättra teamets prestationer.',
    image: johnImage,
    detailPath: '/john-details'
  },
  {
    id: 'mira',
    name: 'MIRA',
    role: 'Rekrytering',
    description: 'Din rekryteringsassistent som hjälper dig att hitta rätt talanger och hantera din närvaro på sociala medier. Effektiviserar hela rekryteringsprocessen.',
    image: miraImage,
    detailPath: '/mira-details'
  }
];

const AIAssistantSelector = () => {
  const navigate = useNavigate();
  const [selectedAssistants, setSelectedAssistants] = useState<string[]>([]);
  const [cogwheelRotation, setCogwheelRotation] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('selectedAssistants');
    if (stored) {
      setSelectedAssistants(JSON.parse(stored));
    }

    // Animate cogwheel
    const animateCogwheel = () => {
      setCogwheelRotation(prev => (prev + 1) % 360);
      requestAnimationFrame(animateCogwheel);
    };
    const animation = requestAnimationFrame(animateCogwheel);

    return () => cancelAnimationFrame(animation);
  }, []);

  const toggleAssistant = (id: string, e: React.MouseEvent) => {
    // Stop propagation if clicking the "Read more" link
    if ((e.target as HTMLElement).closest('.read-more-link')) {
      return;
    }
    
    setSelectedAssistants(prev => {
      const newSelection = prev.includes(id)
        ? prev.filter(a => a !== id)
        : [...prev, id];
      localStorage.setItem('selectedAssistants', JSON.stringify(newSelection));
      return newSelection;
    });
  };

  const handleContinue = () => {
    navigate('/deploy');
  };

  const handleCustomize = () => {
    navigate('/solutions');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Våra AI-assistenter" />
      <div className="pt-32 pb-24 relative">
        <div className="matrix-bg" />
        <div className="grid-animation absolute inset-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono">
              Våra AI-assistenter
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Testa en färdig AI-assistent – eller skapa din egen att prova i en demo.
            </p>
          </div>

          {/* Assistant Cards Container */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
            {/* Regular Assistant Cards */}
            {assistants.map((assistant) => (
              <div 
                key={assistant.id} 
                className="relative group cursor-pointer"
                onClick={(e) => toggleAssistant(assistant.id, e)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className={`relative bg-black border rounded-lg transition-all duration-500 h-[400px] w-[240px] mx-auto flex flex-col transform group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-white/10 ${
                  selectedAssistants.includes(assistant.id)
                    ? 'border-white/50 bg-white/5'
                    : 'border-white/10 group-hover:border-white/30'
                }`}>
                  <div className="relative h-[280px] w-full overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0">
                      <img 
                        src={assistant.image} 
                        alt={`${assistant.name} profile`}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: '50% 20%' }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black via-black/70 to-transparent" />
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-0.5 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                      {assistant.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-1">{assistant.role}</p>
                    <p className="text-gray-400 text-sm line-clamp-2">{assistant.description}</p>

                    <div className="mt-auto flex items-center justify-between">
                      <div 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(assistant.detailPath);
                        }}
                        className="flex items-center text-white/70 hover:text-white cursor-pointer group/link read-more-link"
                      >
                        <span className="text-sm">Läs mer</span>
                        <ArrowRight className="ml-1 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                      </div>

                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        selectedAssistants.includes(assistant.id)
                          ? 'border-white bg-white text-black'
                          : 'border-white/50 group-hover:border-white'
                      }`}>
                        {selectedAssistants.includes(assistant.id) && (
                          <Check className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* "eller" text */}
            <div className="flex items-center justify-center px-4">
              <span className="text-white/50 text-lg">eller</span>
            </div>

            {/* Custom Assistant Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative bg-black border border-white/10 rounded-lg transition-all duration-500 h-[400px] w-[240px] mx-auto flex flex-col transform group-hover:scale-[1.02] group-hover:border-white/30 group-hover:shadow-lg group-hover:shadow-white/10">
                <div className="relative h-[280px] w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-purple-600/5 via-blue-500/5 to-transparent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center space-y-4">
                      {/* Rotating cogwheel */}
                      <div 
                        className="h-32 w-32 opacity-10 transition-transform duration-300 group-hover:scale-110"
                        style={{ transform: `rotate(${cogwheelRotation}deg)` }}
                      >
                        <Settings className="h-full w-full text-white" />
                      </div>
                      
                      <div className="text-center px-4 mt-8">
                        <h3 className="text-lg font-bold text-white mb-2">Skräddarsy din agent</h3>
                        <p className="text-sm text-white/70">Kombinera funktioner från olika assistenter och ange andra specifika önskemål</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-white/80">
                      <Sparkles className="h-4 w-4" />
                      <span className="text-sm">Välj funktioner</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/80">
                      <Zap className="h-4 w-4" />
                      <span className="text-sm">Snabb setup</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button 
                      onClick={handleCustomize}
                      className="w-full bg-white text-black px-4 py-2 rounded-lg font-mono hover:bg-gray-100 transition-all flex items-center justify-center group/btn"
                    >
                      <span>Börja skapa</span>
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          {selectedAssistants.length > 0 && (
            <div className="flex justify-center">
              <button
                onClick={handleContinue}
                className="bg-white text-black px-8 py-4 rounded-lg font-mono hover:bg-gray-100 transition-all flex items-center justify-center border border-white/50 glow-md hover-glow relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">Fortsätt till demo</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-white text-black text-sm flex items-center justify-center border border-white/50">
                  {selectedAssistants.length}
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAssistantSelector;
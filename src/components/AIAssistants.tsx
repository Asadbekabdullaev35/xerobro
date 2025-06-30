import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Bot, Users, UserSearch, ArrowRight, Sparkles, Zap, Settings, MessageSquare, Calendar, FileText, Share2, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import maleAssistant from '../data/logo/Maleassistant.png';
import annaImage from '../data/logo/ANNA.png';
import miraImage from '../data/logo/MIRA.png';

interface AssistantCardProps {
  name: string;
  role: string;
  description: string;
  icon: any;
  detailPath: string;
  image: string;
}

const AssistantCard = ({ name, role, description, icon: Icon, detailPath, image }: AssistantCardProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      <div className="relative bg-black border border-white/10 rounded-lg transition-all duration-500 h-[400px] w-[240px] mx-auto flex flex-col transform group-hover:scale-[1.02] group-hover:border-white/30 group-hover:shadow-lg group-hover:shadow-white/10">
        <div className="relative h-[280px] w-full overflow-hidden rounded-t-lg">
          <div className="absolute inset-0">
            <img 
              src={image} 
              alt={`${name} profile`}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: '50% 20%' }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-black via-black/70 to-transparent" />
          </div>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-bold mb-0.5 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            {name}
          </h3>
          <p className="text-gray-400 text-sm mb-1">{role}</p>
          <p className="text-gray-400 text-sm line-clamp-2">{description}</p>

          <div 
            onClick={() => navigate(detailPath)}
            className="mt-auto self-end flex items-center text-white/70 hover:text-white cursor-pointer group/link"
          >
            <span className="text-sm">Läs mer</span>
            <ArrowRight className="ml-1 h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AIAssistants = () => {
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>();
  const [gridRef, gridVisible] = useIntersectionObserver<HTMLDivElement>();
  const navigate = useNavigate();
  const [activeBubble, setActiveBubble] = useState<number | null>(null);

  const assistants = [
    {
      name: 'ANNA',
      role: 'Admin',
      description: 'Den ultimata administrativa assistenten som hanterar allt från CRM och orderflöden till kundsupport och bokningar.',
      icon: Bot,
      detailPath: '/anna-details',
      image: annaImage
    },
    {
      name: 'JOHN',
      role: 'Sälj',
      description: 'Din säljassistent som är dedikerad till leadgenerering och att maximera din försäljning. Analyserar säljsamtal och ger coachning för att förbättra teamets prestationer.',
      icon: Users,
      detailPath: '/john-details',
      image: maleAssistant
    },
    {
      name: 'MIRA',
      role: 'Rekrytering',
      description: 'Din rekryteringsassistent som hjälper dig att hitta rätt talanger och hantera din närvaro på sociala medier. Effektiviserar hela rekryteringsprocessen.',
      icon: UserSearch,
      detailPath: '/mira-details',
      image: miraImage
    }
  ];

  const orbitingIcons = [
    { icon: MessageSquare, label: 'Kundsupport' },
    { icon: Calendar, label: 'Bokningar' },
    { icon: FileText, label: 'Orderflöde' },
    { icon: Share2, label: 'Sociala Medier' },
    { icon: Phone, label: 'Callcenter' },
    { icon: Users, label: 'Rekrytering' }
  ];

  useEffect(() => {
    let currentBubble = 0;
    const interval = setInterval(() => {
      setActiveBubble(currentBubble);
      currentBubble = (currentBubble + 1) % orbitingIcons.length;
      
      // Reset after all bubbles are absorbed
      if (currentBubble === 0) {
        setTimeout(() => {
          setActiveBubble(null);
        }, 1000);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        {/* Gradient from cosmic to black */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black" style={{ top: '20%', height: '40%' }} />
        
        {/* Solid black section */}
        <div className="absolute inset-0 bg-black" style={{ top: '60%', height: '25%' }} />
        
        {/* Gradient from black back to cosmic */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent" style={{ top: '85%', height: '15%' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            Våra AI Agenter
          </h2>
        </div>

        <div 
          ref={gridRef}
          className={`flex flex-wrap justify-center gap-8 transform transition-all duration-1000 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {assistants.map((assistant, index) => (
            <AssistantCard key={index} {...assistant} />
          ))}
        </div>

        <div className="mt-20 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-transparent rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
          
          <div className="relative bg-black border border-white/10 rounded-lg h-auto md:h-[420px] w-full transition-all duration-500 transform hover:scale-105 hover:border-white/30 hover:shadow-lg hover:shadow-white/10 group">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 h-full relative">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent mb-6 transform group-hover:scale-[1.02] transition-transform duration-500">
                  Skräddarsy din egen AI-assistent
                </h3>
                <p className="text-base md:text-lg text-gray-400 mb-6 transform group-hover:translate-y-1 transition-transform duration-500">
                  Kombinera funktioner från olika assistenter för att skapa den perfekta lösningen för just dina behov.
                </p>
                <div className="flex flex-col space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-white/80 transform group-hover:translate-x-2 transition-all duration-500 delay-100">
                    <Sparkles className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Välj exakt de funktioner du behöver</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80 transform group-hover:translate-x-2 transition-all duration-500 delay-200">
                    <Zap className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Snabb och enkel implementation</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/80 transform group-hover:translate-x-2 transition-all duration-500 delay-300">
                    <Settings className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>Fullt anpassningsbar efter dina behov</span>
                  </div>
                </div>
                <button 
                  onClick={() => navigate('/solutions')}
                  className="group/btn bg-white text-black px-8 py-4 rounded-lg font-mono hover:bg-gray-100 transition-all flex items-center justify-center border border-white/50 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">Börja skapa</span>
                  <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform relative z-10" />
                </button>
              </div>
              
              <div className="relative h-[300px] md:h-full hidden md:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central bubble */}
                    <div className={`h-32 w-32 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/30 flex items-center justify-center relative transition-transform duration-500 ${
                      activeBubble !== null ? 'scale-110' : 'scale-100'
                    }`}>
                      <Bot className="h-16 w-16 text-white animate-pulse" />
                      <div className="absolute inset-0 rounded-full border border-white/10 animate-ping" />
                    </div>
                    
                    {/* Orbiting bubbles */}
                    {orbitingIcons.map((item, index) => {
                      const angle = (index * 360) / orbitingIcons.length;
                      const radius = 100;
                      
                      const iconX = Math.cos((angle * Math.PI) / 180) * radius;
                      const iconY = Math.sin((angle * Math.PI) / 180) * radius;

                      const isActive = activeBubble === index;
                      
                      return (
                        <div
                          key={index}
                          className={`absolute group transition-all duration-500 ${
                            isActive ? 'scale-0' : 'scale-100'
                          }`}
                          style={{
                            transform: isActive 
                              ? 'translate(0px, 0px) scale(0)'
                              : `translate(${iconX}px, ${iconY}px)`,
                            left: '50%',
                            top: '50%',
                            marginLeft: '-20px',
                            marginTop: '-20px',
                            transformOrigin: 'center',
                            transitionTimingFunction: isActive ? 'cubic-bezier(0.4, 0, 0.2, 1)' : 'linear'
                          }}
                        >
                          <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group cursor-pointer hover:bg-white/20 hover:border-white/30 transition-all duration-300">
                            <item.icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
                            
                            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 rounded text-xs text-white whitespace-nowrap"
                                 style={{
                                   top: angle > 180 ? 'calc(100% + 5px)' : 'auto',
                                   bottom: angle <= 180 ? 'calc(100% + 5px)' : 'auto',
                                 }}>
                              {item.label}
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

export default AIAssistants;
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import maleAssistant from '../data/logo/Maleassistant.png';
import gdprStamp from '../data/logo/GDPR stamp.png';
import soc2Stamp from '../data/logo/SOC2 stamp.png';
import isoStamp from '../data/logo/ISO STAMP.png';

const About = () => {
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <section id="about" className="py-64 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={contentRef}
          className={`transform transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row items-stretch gap-16">
            <div className="w-full md:w-1/2 flex flex-col">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent mb-6">
                  Framtidens arbetskraft
                </h2>
                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                  Vi skapar intelligenta AI-agenter som blir dina nya superkollegor – redo att revolutionera hur du arbetar, tänker och växer.
                </p>
              </div>

              <div className="flex flex-col items-start mt-auto">
                <div className="h-[1px] w-24 bg-gradient-to-r from-white via-white/50 to-transparent mb-4" />
                <p className="text-white/70 text-sm mb-4">
                  GDPR-kompatibla och säkerställer att din data är skyddad både i vila (AES 256) och under överföring (TLS 1.2+). Certifierade enligt: ISO 27001, ISO 27701, SOC 2 (Type I & II)
                </p>
                <div className="flex items-end justify-between w-full">
                  <div className="flex gap-8">
                    <img 
                      src={gdprStamp} 
                      alt="GDPR Certification" 
                      className="h-16 w-16 object-contain hover:scale-110 transition-transform"
                    />
                    <img 
                      src={soc2Stamp} 
                      alt="SOC 2 Type II Certification" 
                      className="h-16 w-16 object-contain hover:scale-110 transition-transform"
                    />
                    <img 
                      src={isoStamp} 
                      alt="ISO 27001 Certification" 
                      className="h-16 w-16 object-contain hover:scale-110 transition-transform"
                    />
                  </div>
                  <button
                    onClick={() => navigate('/security')}
                    className="flex items-center text-sm text-white/70 hover:text-white transition-colors group"
                  >
                    <span>Läs mer</span>
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative flex">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <img 
                src={maleAssistant} 
                alt="AI Assistant"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
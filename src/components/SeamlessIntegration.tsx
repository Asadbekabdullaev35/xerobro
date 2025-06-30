import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import gmailLogo from '../data/logo/Gmail logo.png';
import driveLogo from '../data/logo/google drive.png';
import meetLogo from '../data/logo/Google meet logo.png';
import leaddeskLogo from '../data/logo/Leaddesk logo.png';
import outlookLogo from '../data/logo/outlook logo.png';
import teamsLogo from '../data/logo/Teams logo.png';
import zoomLogo from '../data/logo/Zoom logo.png';
import googleLogo from '../data/logo/Google logo.png';
import xLogo from '../data/logo/x.png';
import linkedinLogo from '../data/logo/Linkedin.png';
import instagramLogo from '../data/logo/instagram.png';
import slackLogo from '../data/logo/Slack.png';
import salesforceLogo from '../data/logo/Salesforce.png';
import hubspotLogo from '../data/logo/Hubspot.png';

const SeamlessIntegration = () => {
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>();

  const logos = [
    { src: googleLogo, alt: 'Google', size: 'lg' },
    { src: gmailLogo, alt: 'Gmail', size: 'md' },
    { src: driveLogo, alt: 'Google Drive', size: 'md' },
    { src: meetLogo, alt: 'Google Meet', size: 'sm' },
    { src: leaddeskLogo, alt: 'Leaddesk', size: 'lg' },
    { src: outlookLogo, alt: 'Outlook', size: 'md' },
    { src: teamsLogo, alt: 'Microsoft Teams', size: 'sm' },
    { src: zoomLogo, alt: 'Zoom', size: 'md' },
    { src: xLogo, alt: 'X', size: 'md' },
    { src: linkedinLogo, alt: 'LinkedIn', size: 'md' },
    { src: instagramLogo, alt: 'Instagram', size: 'md' },
    { src: slackLogo, alt: 'Slack', size: 'lg' },
    { src: salesforceLogo, alt: 'Salesforce', size: 'lg' },
    { src: hubspotLogo, alt: 'HubSpot', size: 'xl' }
  ];

  const positions = [
    { x: 85, y: 20 },   // Google - Upper right
    { x: 15, y: 45 },   // Gmail - Left side
    { x: 50, y: 25 },   // Drive - Top center
    { x: 25, y: 65 },   // Meet - Lower left
    { x: 75, y: 55 },   // Leaddesk - Middle right area
    { x: 90, y: 70 },   // Outlook - Lower right
    { x: 35, y: 85 },   // Teams - Bottom left
    { x: 65, y: 75 },   // Zoom - Lower middle
    { x: 10, y: 25 },   // X - Upper left
    { x: 45, y: 55 },   // LinkedIn - Center
    { x: 80, y: 90 },   // Instagram - Bottom right
    { x: 30, y: 10 },   // Slack - Upper left area (moved up)
    { x: 70, y: 35 },   // Salesforce - Upper right area
    { x: 95, y: 50 }    // HubSpot - Right side
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={contentRef}
          className={`transform transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent mb-8">
                Sömlös Integration
              </h2>
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed">
                  Fungerar sömlöst med din befintliga teknik och dina processer.
                </p>
                <p className="text-xl text-white/70 leading-relaxed">
                  Våra agenter är byggda för att smälta in i din befintliga struktur – utan att du behöver ändra något i hur du arbetar idag.
                </p>
                <p className="text-xl text-white/70 leading-relaxed">
                  De kopplas enkelt till dina nuvarande verktyg, från CRM till kalendrar och mail inkorgar.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 relative h-[500px]">
              {logos.map((logo, index) => {
                let size;
                switch (logo.size) {
                  case 'xl':
                    size = 14;
                    break;
                  case 'lg':
                    size = 10;
                    break;
                  case 'md':
                    size = 8;
                    break;
                  default:
                    size = 6;
                }
                const iconSize = size * 0.6;
                
                return (
                  <div 
                    key={index}
                    className="absolute group"
                    style={{
                      left: `${positions[index].x}%`,
                      top: `${positions[index].y}%`,
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500 transform group-hover:scale-110"
                      style={{ width: `${iconSize}rem`, height: `${iconSize}rem` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeamlessIntegration;
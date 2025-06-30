import React, { useEffect, useRef } from 'react';
import { ArrowRight, BookOpen, FileText, Home, MessageCircle } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Set<HTMLDivElement>>(new Set());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const createShootingStar = () => {
      if (!heroRef.current) return;

      const star = document.createElement('div');
      star.className = 'shooting-star';
      
      // Randomize starting position (top-left quadrant bias)
      const startX = Math.random() * 30; // 0-30% from left
      const startY = Math.random() * 25; // 0-25% from top
      
      // Randomize ending position (bottom-right quadrant bias)
      const endX = 70 + Math.random() * 30; // 70-100% from left
      const endY = 75 + Math.random() * 25; // 75-100% from top
      
      // Randomize size and opacity
      const scale = 0.5 + Math.random() * 0.5; // 0.5x to 1x scale
      const opacity = 0.6 + Math.random() * 0.4; // 0.6 to 1.0 opacity
      const duration = 1.5 + Math.random() * 0.5; // 1.5-2 seconds
      
      // Set initial position
      star.style.left = `${startX}%`;
      star.style.top = `${startY}%`;
      star.style.transform = `scale(${scale})`;
      star.style.opacity = opacity.toString();
      
      // Calculate angle for rotation based on trajectory
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      // Create custom animation
      const keyframes = `
        @keyframes shooting-star-${Date.now()}-${Math.random()} {
          0% {
            left: ${startX}%;
            top: ${startY}%;
            opacity: 0;
            transform: scale(${scale}) rotate(${angle}deg);
          }
          10% {
            opacity: ${opacity};
          }
          90% {
            opacity: ${opacity * 0.8};
          }
          100% {
            left: ${endX}%;
            top: ${endY}%;
            opacity: 0;
            transform: scale(${scale * 0.3}) rotate(${angle}deg);
          }
        }
      `;
      
      // Add keyframes to document
      const style = document.createElement('style');
      style.textContent = keyframes;
      document.head.appendChild(style);
      
      // Apply animation
      const animationName = keyframes.match(/@keyframes ([^\s{]+)/)?.[1];
      if (animationName) {
        star.style.animation = `${animationName} ${duration}s ease-out forwards`;
      }

      heroRef.current.appendChild(star);
      starsRef.current.add(star);

      // Clean up after animation
      const cleanup = () => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
        starsRef.current.delete(star);
      };

      star.addEventListener('animationend', cleanup);
      
      // Fallback cleanup
      setTimeout(cleanup, duration * 1000 + 100);
    };

    const startStarAnimation = () => {
      // Create initial stars with staggered timing
      setTimeout(() => createShootingStar(), 500);
      setTimeout(() => createShootingStar(), 1200);
      setTimeout(() => createShootingStar(), 2100);

      // Set up continuous star creation
      intervalRef.current = setInterval(() => {
        // Limit maximum stars on screen
        if (starsRef.current.size < 5) {
          // Random interval between 1-2 seconds
          const delay = 1000 + Math.random() * 1000;
          setTimeout(createShootingStar, delay);
        }
      }, 1500); // Check every 1.5 seconds
    };

    const animateHeader = () => {
      const headerElements = document.querySelectorAll('.header-animate');
      headerElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('header-visible');
        }, 300 * index);
      });
    };

    // Start animations
    setTimeout(animateHeader, 100);
    setTimeout(startStarAnimation, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      // Clean up any remaining stars
      starsRef.current.forEach(star => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      });
      starsRef.current.clear();
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      id="hero-section" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-48"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white glow-text header-animate opacity-0 transform translate-y-8">
              <div className="relative h-[180px] md:h-[150px]">
                <TypeAnimation
                  sequence={[
                    t('hero.title1'),
                    2000,
                    t('hero.title2'),
                    2000,
                    t('hero.title3'),
                    2000,
                    t('hero.title4'),
                    2000,
                  ]}
                  wrapper="div"
                  speed={50}
                  className="font-mono bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent absolute top-0 left-0 w-full break-words"
                  repeat={Infinity}
                />
              </div>
            </h1>

            <p className="text-gray-400 text-lg max-w-xl header-animate opacity-0 transform translate-y-8">
              {t('hero.subtitle')}
            </p>

            <div className="flex justify-center lg:justify-start header-animate opacity-0 transform translate-y-8">
              <button 
                onClick={scrollToContact}
                className="group bg-white text-black px-8 py-4 rounded-lg font-mono hover:bg-gray-100 transition-all flex items-center justify-center border border-white/50 glow-md hover-glow"
              >
                {t('hero.cta')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto lg:ml-auto header-animate opacity-0 transform translate-x-8">
            <div className="w-full bg-gray-900/80 rounded-lg border border-white/20 backdrop-blur-sm overflow-hidden glow-sm">
              <div className="bg-black/50 p-3 border-b border-white/20">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-sm text-gray-400 font-mono">{t('hero.terminal.path')}</span>
                </div>
              </div>

              <div className="p-4 font-mono text-sm h-[250px] flex flex-col justify-center items-center space-y-6">
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-12 w-12 text-blue-400 animate-bounce" />
                  <span className="text-2xl text-white">+</span>
                  <FileText className="h-12 w-12 text-green-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
                  <span className="text-2xl text-white">+</span>
                  <Home className="h-12 w-12 text-purple-400 animate-bounce" style={{ animationDelay: '1s' }} />
                  <span className="text-2xl text-white">+</span>
                  <MessageCircle className="h-12 w-12 text-orange-400 animate-bounce" style={{ animationDelay: '1.5s' }} />
                </div>
                <div className="text-center">
                  <div className="text-white/80 mb-2">{t('hero.terminal.description')}</div>
                  <div className="text-green-400 text-sm">{t('hero.terminal.status')}</div>
                </div>
                <div className="text-white/80 absolute bottom-4 left-4">
                  $ <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
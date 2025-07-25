import React, { useEffect } from 'react';
import { ArrowRight, BookOpen, FileText, Home, MessageCircle } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      
      const startPos = Math.random() * 30;
      star.style.top = `${startPos}%`;
      star.style.right = '-50px';
      
      const duration = 1.5 + Math.random() * 0.5;
      star.style.animation = `shooting-star-animation ${duration}s linear`;

      document.getElementById('hero-section')?.appendChild(star);

      star.addEventListener('animationend', () => {
        star.remove();
      });
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.80) {
        createShootingStar();
      }
    }, 2000);

    const animateHeader = () => {
      const headerElements = document.querySelectorAll('.header-animate');
      headerElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('header-visible');
        }, 300 * index);
      });
    };

    setTimeout(animateHeader, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCoursesClick = () => {
    navigate('/courses');
  };

  return (
    <div id="hero-section" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-48">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
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

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 header-animate opacity-0 transform translate-y-8">
              <button 
                onClick={scrollToContact}
                className="group bg-white text-black px-8 py-4 rounded-lg font-mono hover:bg-gray-100 transition-all flex items-center justify-center border border-white/50 glow-md hover-glow"
              >
                {t('hero.cta')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleCoursesClick}
                aria-label="View German Language Courses"
                className="group bg-transparent text-white px-8 py-4 rounded-lg font-mono border-2 border-white/50 hover:bg-white/10 hover:border-white transition-all flex items-center justify-center"
              >
                <BookOpen className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                German Language Courses
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
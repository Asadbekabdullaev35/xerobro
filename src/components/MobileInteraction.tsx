import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { TypeAnimation } from 'react-type-animation';
import annaImage from '../data/logo/ANNA.png';

interface Message {
  sender: 'user' | 'anna';
  content: string;
  timestamp: string;
}

interface Notification {
  title: string;
  content: string;
  timestamp: string;
}

const messages: Message[] = [
  {
    sender: 'user',
    content: 'Hej ANNA! Kan du boka ett möte med Marcus imorgon?',
    timestamp: '09:32'
  },
  {
    sender: 'anna',
    content: 'Självklart! Jag ser att Marcus har följande tider lediga imorgon:\n\n• 10:00-11:00\n• 14:00-15:00\n• 16:00-17:00\n\nVilken tid föredrar du?',
    timestamp: '09:32'
  },
  {
    sender: 'user',
    content: '14:00 passar bra!',
    timestamp: '09:33'
  },
  {
    sender: 'anna',
    content: 'Perfekt! Jag har nu bokat ett möte med Marcus imorgon kl 14:00-15:00. En kalenderinbjudan har skickats till både dig och Marcus. Vill du att jag lägger till en agenda eller några specifika diskussionspunkter i inbjudan?',
    timestamp: '09:33',
    showNotification: true
  },
  {
    sender: 'user',
    content: 'Ja, lägg till att vi ska diskutera Q1 resultaten',
    timestamp: '09:34'
  },
  {
    sender: 'anna',
    content: 'Jag har uppdaterat kalenderinbjudan med agendan "Genomgång av Q1 resultat". Både du och Marcus ska ha fått den uppdaterade inbjudan nu. Är det något annat du behöver hjälp med?',
    timestamp: '09:34'
  },
  {
    sender: 'user',
    content: 'Kan du ta hand om inkorgen och besvara inkommande förfrågningar mellan 14:00-16:30 idag?',
    timestamp: '09:35'
  },
  {
    sender: 'anna',
    content: 'Absolut! Jag kommer att:\n\n• Bevaka och besvara alla inkommande e-postmeddelanden\n• Prioritera och kategorisera ärenden\n• Hantera rutinförfrågningar direkt\n• Eskalera viktiga ärenden till rätt person\n• Skicka dig en sammanfattning kl 16:30\n\nÄr det något särskilt jag ska vara uppmärksam på eller några specifika ärenden du väntar på?',
    timestamp: '09:35'
  },
  {
    sender: 'user',
    content: 'Vi väntar på svar från Volvo angående det nya projektet, prioritera det om det kommer.',
    timestamp: '09:36'
  },
  {
    sender: 'anna',
    content: 'Noterat! Jag kommer att prioritera all kommunikation från Volvo och meddela dig omedelbart om vi får något svar angående projektet. Under tiden hanterar jag övrig inkorg enligt våra standardrutiner. Vill du ha realtidsuppdateringar om andra viktiga ärenden också?',
    timestamp: '09:36'
  }
];

const MobileInteraction = () => {
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>();
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTypingIndex, setCurrentTypingIndex] = useState<number | null>(null);
  const [userScrolled, setUserScrolled] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messageContainerRef.current && !userScrolled) {
      const { scrollHeight, clientHeight } = messageContainerRef.current;
      const targetScroll = scrollHeight - clientHeight;
      const startScroll = messageContainerRef.current.scrollTop;
      const scrollDistance = targetScroll - startScroll;
      const duration = 300; // ms
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        if (!messageContainerRef.current || userScrolled) return;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        const currentPosition = startScroll + (scrollDistance * easeProgress);
        messageContainerRef.current.scrollTop = currentPosition;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  const handleScroll = () => {
    if (messageContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messageContainerRef.current;
      const isAtBottom = Math.abs(scrollHeight - scrollTop - clientHeight) < 10;
      
      if (isAtBottom) {
        setUserScrolled(false);
      } else {
        setUserScrolled(true);
      }
    }
  };

  const addNextMessage = async (index: number) => {
    if (index >= messages.length) {
      setIsAnimating(false);
      setCurrentTypingIndex(null);
      return;
    }

    const message = messages[index];
    setVisibleMessages(prev => [...prev, message]);
    setCurrentTypingIndex(index);

    // Show notification when the meeting confirmation message appears
    if ('showNotification' in message) {
      setTimeout(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000);
      }, 1000);
    }

    if (message.sender === 'anna') {
      // Calculate typing duration based on content length
      const typingDuration = message.content.length * 40; // 40ms per character
      
      // Scroll while typing
      const scrollInterval = setInterval(() => {
        if (!userScrolled) {
          scrollToBottom();
        }
      }, 100);

      // Wait for typing to complete
      await new Promise(resolve => setTimeout(resolve, typingDuration));
      clearInterval(scrollInterval);
      
      // Very short pause after Anna's message
      await new Promise(resolve => setTimeout(resolve, 100));
    } else {
      // User message appears instantly
      scrollToBottom();
      // Very short pause after user's message
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    addNextMessage(index + 1);
  };

  useEffect(() => {
    if (contentVisible && !isAnimating) {
      setIsAnimating(true);
      setVisibleMessages([]);
      setCurrentTypingIndex(null);
      setUserScrolled(false);
      addNextMessage(0);
    }
  }, [contentVisible]);

  return (
    <section className="py-32 relative overflow-hidden">
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
                  Styr din verksamhet direkt från mobilen
                </h2>
                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                  Vår lösning gör det lika enkelt att samarbeta med din AI-assistent som att skicka ett meddelande till en anställd. Oavsett om du vill:
                </p>
                <ul className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mt-6 space-y-2">
                  <li>– Lägga till nya arbetsflöden</li>
                  <li>– Justera hur leads hanteras</li>
                  <li>– Uppdatera svarsmallar eller säljargument</li>
                  <li>– Fylla på med ny information i kunskapsbanken</li>
                </ul>
              </div>

              <div className="flex flex-col items-start mt-auto">
                <div className="h-[1px] w-24 bg-gradient-to-r from-white via-white/50 to-transparent mb-4" />
                <p className="text-white/70 text-lg">
                  ...så gör du det direkt från mobilen – i realtid. Allt optimeras och uppdateras löpande utan krångel, helt enligt dina instruktioner.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[320px] h-[650px] bg-black rounded-[3rem] border-[4px] border-white/10 overflow-hidden shadow-2xl">
                {/* Notification */}
                <div className={`absolute top-8 left-1/2 -translate-x-1/2 w-[280px] bg-white/10 backdrop-blur-md rounded-lg border border-white/20 p-4 transform transition-all duration-500 z-50 ${
                  showNotification 
                    ? 'translate-y-0 opacity-100' 
                    : '-translate-y-full opacity-0'
                }`}>
                  <div className="flex items-start">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg" 
                      alt="Google Calendar"
                      className="w-8 h-8 mr-3"
                    />
                    <div>
                      <div className="text-sm font-semibold text-white">Google Kalender</div>
                      <div className="text-xs text-white/70 mt-1">Nytt möte: Marcus (14:00-15:00)</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 inset-x-0 h-6 bg-black">
                  <div className="absolute top-1 left-[50%] w-24 h-[18px] -translate-x-[50%] bg-black rounded-full flex items-center justify-center">
                    <div className="w-12 h-[4px] bg-white/20 rounded-full" />
                    <div className="absolute right-4 w-[4px] h-[4px] rounded-full bg-white/20" />
                  </div>
                </div>

                <div className="h-full pt-7 pb-4 flex flex-col bg-gradient-to-b from-black via-black/95 to-black">
                  <div className="px-4 py-2 flex items-center border-b border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                        <img 
                          src={annaImage} 
                          alt="ANNA"
                          className="w-full h-full object-cover"
                          style={{ objectPosition: '50% 20%' }}
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-white">ANNA</div>
                        <div className="flex items-center space-x-2 text-xs">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-white/50">Online</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div 
                    ref={messageContainerRef}
                    onScroll={handleScroll}
                    className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
                    style={{ 
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      '&::-webkit-scrollbar': {
                        display: 'none'
                      }
                    }}
                  >
                    {visibleMessages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                      >
                        <div className={`max-w-[75%] ${
                          message.sender === 'user'
                            ? 'bg-white/10 rounded-t-2xl rounded-l-2xl'
                            : 'bg-white/5 rounded-t-2xl rounded-r-2xl'
                        } px-4 py-2 space-y-1`}>
                          <div className="text-sm text-white/90 whitespace-pre-line">
                            {message.sender === 'anna' && currentTypingIndex === index ? (
                              <TypeAnimation
                                sequence={[message.content]}
                                wrapper="span"
                                cursor={true}
                                speed={70}
                                repeat={0}
                              />
                            ) : (
                              message.content
                            )}
                          </div>
                          <div className="text-[10px] text-white/40">
                            {message.timestamp}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  <div className="px-4 pt-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-white/5 rounded-full px-4 py-2 text-sm text-white/40">
                        Skriv ett meddelande...
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-1 left-0 right-0 flex justify-center">
                    <div className="w-32 h-1 bg-white/20 rounded-full" />
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

export default MobileInteraction;
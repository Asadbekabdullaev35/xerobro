import React, { useState } from 'react';
import PageHeader from './PageHeader';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import gdprStamp from '../data/logo/GDPR stamp.png';
import soc2Stamp from '../data/logo/SOC2 stamp.png';
import isoStamp from '../data/logo/ISO STAMP.png';

const faqs = [
  {
    question: 'Vad är Xerobro?',
    answer: 'Xerobro är en plattform som ger dig tillgång till AI-drivna agenter med olika kompetensområden – allt under ett och samma tak. Oavsett om du behöver hjälp med sälj, kundsupport, rekrytering, mötesbokning eller ekonomiadministration så finns det en agent som kan hantera uppgiften.\n\nDet som gör Xerobro unikt är att du själv kan skräddarsy vilka funktioner din agent ska ha, så att den passar just ditt företag och dina behov. Du slipper hoppa mellan olika system och lösningar – här samlas alla dina automatiserade assistenter på ett och samma ställe, fullt integrerade med din befintliga mjukvara.'
  },
  {
    question: 'Hur fungerar det?',
    answer: 'Med Xerobro får du inte bara ett verktyg – du får en ny teammedlem. Din AI-agent integreras direkt i dina befintliga system, precis som om du anställde en ny kollega i t.ex. ditt e-postverktyg, CRM eller bokningssystem.\n\nGenom att koppla upp sig mot dessa via deras API:er får agenten möjlighet att utföra arbetsuppgifter automatiskt – helt enligt dina riktlinjer och behov. För att kunna fatta rätt beslut och agera korrekt hämtar agenten dessutom information från din hemsida och andra relevanta källor, och skapar utifrån det en kunskapsbas.\n\nDu kan när som helst uppdatera denna med ny information – vilket optimerar agentens förståelse ytterligare. Med tiden blir agenten dessutom smartare genom att lära sig av tidigare uppgifter och resultat. Slutresultatet? En självständig, AI-driven assistent som effektiviserar din vardag och anpassar sig efter just ditt sätt att arbeta.'
  },
  {
    question: 'Hur säker är Xerobro?',
    answer: 'Xerobro är byggt för att uppfylla de högsta europeiska kraven på datasäkerhet och integritet. Vi är fullt GDPR-kompatibla och säkerställer att din data är skyddad både i vila (AES 256) och under överföring (TLS 1.2+).\n\nVi är certifierade enligt:\n• ISO 27001 – Hantering av informationssäkerhet\n• ISO 27701 – Integritetsskydd och dataskydd\n• SOC 2 (Type I & II) – Säkerhet, tillgänglighet och konfidentialitet i molntjänster\n\nFör mer information, klicka här.'
  },
  {
    question: 'Vem är Xerobro för?',
    answer: 'Xerobro är utformat för företag som vill automatisera, skala och optimera deras administrativa processer – från försäljning till rekrytering och support.\n\nOavsett om du driver ett säljteam, rekryterar personal eller vill förbättra kundupplevelsen, är Xerobro din AI-drivna kollega.'
  },
  {
    question: 'Hur används Xerobro?',
    answer: 'Xerobro anpassar sig till dina befintliga processer.\n\nVåra agenter samlar in all nödvändig data och hanterar processer direkt i era befintliga verktyg och program för att kunna förbättra produktiviteten utan att störa ditt arbetsflöde.'
  },
  {
    question: 'Hur fungerar prissättningen?',
    answer: 'Kontakta oss på info@xerobro.com för mer information om våra paket och priser.'
  },
  {
    question: 'Försöker Xerobro ersätta mitt team?',
    answer: 'Tvärtom – vi tror att människor presterar bäst när de får stöd av AI. Xerobro är en autonom medarbetare som tar hand om repetitiva och tidskrävande moment, så att ditt team kan fokusera på det mänskliga: relationer, kreativitet och strategi.\n\nXerobro ses av våra kunder som en ny kollega som skapar skalbarhet, kvalitet och lönsamhet.'
  }
];

const AboutUs = () => {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleSecurityClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/security');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Om oss" />
      
      {/* Cosmic Background Section */}
      <div className="relative">
        {/* Cosmic background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0"
            style={{
              background: `
                radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 0.8) 0%, transparent 100%),
                radial-gradient(1px 1px at 40% 70%, rgba(255, 255, 255, 0.7) 0%, transparent 100%),
                radial-gradient(1px 1px at 60% 40%, rgba(255, 255, 255, 0.9) 0%, transparent 100%),
                radial-gradient(2px 2px at 70% 90%, rgba(255, 255, 255, 0.6) 0%, transparent 100%),
                radial-gradient(2px 2px at 90% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 100%)
              `,
              backgroundSize: '250px 250px',
              animation: 'twinkle 8s ease-in-out infinite alternate',
            }}
          />
          
          <div className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 20% 30%, rgba(0, 183, 255, 0.1) 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(255, 0, 221, 0.1) 0%, transparent 40%)
              `,
              filter: 'blur(20px)',
              animation: 'nebulaPulse 15s ease-in-out infinite',
            }}
          />
        </div>

        <div className="relative pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Content */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 font-mono text-center">
                Vi omdefinierar ert arbete med intelligent automation
              </h2>

              {/* Main Description */}
              <div className="relative">
                <div className="absolute -right-64 -top-32 w-[500px] h-[500px] bg-white/5 rounded-full blur-2xl opacity-20" />
                
                <div className="relative">
                  <p className="text-xl text-white/90 leading-relaxed mb-8">
                    Efter år av erfarenhet inom försäljning och kundservice, har vi sett att trots all ny teknik kvarstår många av de grundläggande utmaningarna för företag. Med de senaste genombrotten inom AI såg vi en chans att skapa något banbrytande.
                  </p>
                  <p className="text-xl text-white/90 leading-relaxed mb-8">
                    Xerobro bygger inte bara AI-verktyg – vi skapar digitala medarbetare som är skräddarsydda efter ditt företag. Till skillnad från generiska AI-tjänster och enkla chattbotar är våra AI-agenter djupt integrerade i dina arbetsflöden. De lär sig, anpassar sig och agerar – oavsett om det gäller prospektering, kundservice, bokningar eller administration.
                  </p>
                  <p className="text-xl text-white/80 leading-relaxed mb-8">
                    Vi samarbetar med framtidsdrivna företag som vill frigöra tid, sänka kostnader och öka output – inte med färdiga mallar, utan med skräddarsydda system som fungerar som din bästa anställda (fast snabbare, billigare och tillgänglig dygnet runt).
                  </p>
                  <p className="text-xl text-white leading-relaxed font-semibold">
                    Medan andra erbjuder AI som ett tillägg, levererar vi AI som blir en del av ditt team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient transition to black */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-black/70 to-black" />
      </div>

      {/* Black Background Sections */}
      <div className="bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto space-y-32">
            {/* Certifications Section */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Certifieringar & Säkerhet
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all group">
                  <img 
                    src={gdprStamp} 
                    alt="GDPR Certification" 
                    className="h-24 w-24 object-contain mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-lg font-bold mb-2">GDPR-kompatibel</h3>
                  <p className="text-sm text-gray-400 text-center">
                    Fullständig efterlevnad av EU:s dataskyddsförordning
                  </p>
                </div>
                <div className="flex flex-col items-center p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all group">
                  <img 
                    src={soc2Stamp} 
                    alt="SOC 2 Certification" 
                    className="h-24 w-24 object-contain mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-lg font-bold mb-2">SOC 2 Type II</h3>
                  <p className="text-sm text-gray-400 text-center">
                    Verifierad säkerhet och dataintegritet
                  </p>
                </div>
                <div className="flex flex-col items-center p-8 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all group">
                  <img 
                    src={isoStamp} 
                    alt="ISO Certification" 
                    className="h-24 w-24 object-contain mb-4 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-lg font-bold mb-2">ISO 27001</h3>
                  <p className="text-sm text-gray-400 text-center">
                    Internationell standard för informationssäkerhet
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => navigate('/security')}
                  className="text-white/70 hover:text-white group transition-colors flex items-center space-x-2"
                >
                  <span>Läs mer om vår säkerhet</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">
                FAQ
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-4 text-left flex items-center justify-between group"
                      aria-expanded={expandedFaq === index}
                    >
                      <span className={`text-lg transition-colors duration-300 ${
                        expandedFaq === index ? 'text-white' : 'text-white/70 group-hover:text-white'
                      }`}>
                        {faq.question}
                      </span>
                      <div className={`ml-4 flex-shrink-0 transition-transform duration-300 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}>
                        <ChevronDown className={`h-5 w-5 transition-colors duration-300 ${
                          expandedFaq === index ? 'text-white' : 'text-white/50 group-hover:text-white/70'
                        }`} />
                      </div>
                    </button>
                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        expandedFaq === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pb-6 text-gray-400 leading-relaxed whitespace-pre-wrap">
                        {index === 2 ? (
                          <>
                            {faq.answer.split('klicka här')[0]}
                            <a 
                              href="#" 
                              onClick={handleSecurityClick}
                              className="text-white hover:text-gray-300 underline"
                            >
                              klicka här
                            </a>
                            {faq.answer.split('klicka här')[1]}
                          </>
                        ) : (
                          faq.answer
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
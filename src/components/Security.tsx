import React, { useEffect, useState } from 'react';
import PageHeader from './PageHeader';
import { Shield, ChevronDown, Lock, Key, FileCheck } from 'lucide-react';
import gdprStamp from '../data/logo/GDPR stamp.png';
import soc2Stamp from '../data/logo/SOC2 stamp.png';
import isoStamp from '../data/logo/ISO STAMP.png';

const SecurityFeature = ({ stamp, title, description }: { stamp: string, title: string, description: string }) => (
  <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:bg-white/10 transition-all group">
    <div className="flex justify-center mb-6">
      <img 
        src={stamp}
        alt={`${title} Certification`}
        className="h-16 w-16 object-contain group-hover:scale-110 transition-transform"
      />
    </div>
    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent text-center">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-center">{description}</p>
  </div>
);

const Security = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Hur skyddas min data hos Xerobro?",
      answer: "All data krypteras både i vila (med AES-256) och under överföring (med TLS 1.2 eller högre). Det innebär att informationen är skyddad oavsett var i flödet den befinner sig."
    },
    {
      question: "Har andra kunder tillgång till min data?",
      answer: "Nej. Varje kunds data hanteras i en isolerad och säker miljö, helt separerad från andra kunders information. Det garanterar integritet och minimerar risken för obehörig åtkomst."
    },
    {
      question: "Använder ni min data för att träna AI eller förbättra tjänsten?",
      answer: "Nej. Din data används aldrig för något annat än att leverera den tjänst du har godkänt – och endast enligt dina instruktioner. Vi kräver alltid uttryckligt samtycke för all sekundär användning."
    },
    {
      question: "Var lagras min data?",
      answer: "Din information lagras i säkra datacenter med högsta möjliga skyddsstandarder och geografisk redundans för maximal driftsäkerhet."
    },
    {
      question: "Vad händer med min data om jag avslutar tjänsten?",
      answer: "Vi tillämpar en säker och kontrollerad borttagningsprocess. All din data raderas permanent enligt dokumenterade rutiner och inom de tidsramar som anges i våra dataskyddspolicyer."
    },
    {
      question: "Följer Xerobro GDPR?",
      answer: "Ja, vi är fullt GDPR-kompatibla. Du har rätt att få tillgång till, rätta, exportera eller radera dina uppgifter när som helst."
    },
    {
      question: "Vem har tillgång till min data inom er organisation?",
      answer: "Endast ett begränsat antal behöriga medarbetare, med tydliga roller och säkerhetsnivåer, har tillgång till dina uppgifter – och bara i den utsträckning som krävs för att leverera tjänsten."
    },
    {
      question: "Görs säkerhetsgranskningar?",
      answer: "Ja. Vår infrastruktur är föremål för regelbundna säkerhetsbedömningar och kontroller för att upptäcka och hantera eventuella sårbarheter."
    },
    {
      question: "Har ni några säkerhetscertifieringar?",
      answer: "Xerobro uppfyller kraven för branschledande säkerhetsstandarder:\n\nISO/IEC 27001 – Certifiering för ledningssystem för informationssäkerhet\n\nISO/IEC 27701 – Integritetsskydd och efterlevnad av dataskyddsförordningar\n\nSOC 2 Type I & II – Kontroller för datasäkerhet, tillgänglighet och sekretess\n\nDessa certifieringar visar vårt engagemang för att skydda din information enligt högsta möjliga standard."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Säkerhet" />
      
      {/* Large Shield Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Shield className="w-[150vh] h-[150vh] text-white transform -rotate-12" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      <div className="pt-32 pb-24 relative">
        <div className="matrix-bg opacity-20" />
        <div className="grid-animation absolute inset-0 opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Hero Section with pulsating Shield */}
          <div className="text-center mb-20">
            <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 mb-8 relative">
              <Shield className="h-16 w-16 text-white animate-pulse" />
              <div className="absolute inset-0 rounded-2xl border border-white/10 animate-ping" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono">Säkerhet & Certifieringar</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              På Xerobro är säkerhet inte ett tillval – det är kärnan i allt vi bygger. Vår agent plattform är designad från grunden med ett proaktivt säkerhetsfokus, där avancerade skydd och beprövade branschstandarder finns integrerade i varje lager. Din data och kunskap hanteras med högsta möjliga skydd, integritet och efterlevnad – redan från start.
            </p>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <SecurityFeature
              stamp={gdprStamp}
              title="GDPR-kompatibel"
              description="Fullständig efterlevnad av EU:s dataskyddsförordning (GDPR). Vi säkerställer att all personlig data hanteras enligt gällande regler."
            />
            <SecurityFeature
              stamp={soc2Stamp}
              title="SOC 2 Type II"
              description="Omfattande säkerhetsrevision med kontinuerlig övervakning av säkerhetskontroller och verifierad dataintegritet."
            />
            <SecurityFeature
              stamp={isoStamp}
              title="ISO 27001"
              description="Internationell standard för informationssäkerhet med systematisk hantering av känslig information och kontinuerlig förbättring."
            />
          </div>

          {/* Divider */}
          <div className="relative py-12">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Data Protection Principles Section */}
          <div className="space-y-16 relative mb-32">
            {/* Alternative background - cosmic nebula effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-500/5 to-transparent rounded-3xl opacity-50 blur-2xl" />
            
            <div className="text-center relative z-10">
              <h2 className="text-3xl font-bold mb-4">Våra principer för dataskydd</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="p-8 rounded-xl bg-gray-900/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Fullständig dataseparation</h3>
                <p className="text-gray-400">
                  All data hanteras i isolerade och dedikerade miljöer för att säkerställa att dina uppgifter är helt separerade från andra kunders – alltid skyddade, alltid avskilda.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-gray-900/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Du äger och styr din data</h3>
                <p className="text-gray-400">
                  Din data används aldrig för att förbättra våra tjänster utan ditt uttryckliga samtycke. Du behåller full kontroll över hur informationen behandlas och lagras.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-gray-900/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Säker hantering under hela datans livscykel</h3>
                <p className="text-gray-400">
                  Vi tillämpar strikta säkerhetsrutiner från det ögonblick data tas emot till dess att den säkert raderas, med noggrant kontrollerade processer i varje steg.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative py-12">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* EU Compliance Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Säker, GDPR-kompatibel drift</h2>
                <p className="text-gray-400 leading-relaxed">
                  Vår infrastruktur kombinerar globalt skalbar drift med strikt dataskydd, helt enligt europeiska integritetskrav:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 text-gray-400">
                    <Lock className="h-6 w-6 text-white/70 flex-shrink-0 mt-1" />
                    <span>All datalagring sker i enlighet med GDPR och kan placeras inom EU enligt krav</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-400">
                    <FileCheck className="h-6 w-6 text-white/70 flex-shrink-0 mt-1" />
                    <span>Strikta rutiner för datalagring enligt EU:s regelverk</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-400">
                    <Key className="h-6 w-6 text-white/70 flex-shrink-0 mt-1" />
                    <span>Full kontroll över hela datalivscykeln</span>
                  </li>
                </ul>
                <div className="pt-4 space-y-2 text-gray-400">
                  <p>• Möjlighet till radering av data på begäran</p>
                  <p>• Säkerhetsgranskningar och efterlevnadskontroller genomförs regelbundet</p>
                  <p>• Tydliga personuppgiftsbiträdesavtal</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src={gdprStamp}
                  alt="GDPR Certification"
                  className="w-64 h-64 object-contain hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Gradient transition to black */}
          <div className="h-24 bg-gradient-to-b from-transparent to-black" />

          {/* Security FAQ Section with black background */}
          <div className="bg-black w-full -mx-4 px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold">Security FAQ</h2>
              </div>

              <div className="space-y-6">
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
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
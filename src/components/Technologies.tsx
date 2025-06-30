import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useNavigate } from 'react-router-dom';

const Technologies = () => {
  const navigate = useNavigate();
  const [faqRef, faqVisible] = useIntersectionObserver<HTMLDivElement>();
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

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

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleSecurityClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/security');
  };

  return (
    <section id="technologies" className="relative overflow-hidden">
      {/* Gradient transition from Solutions to FAQ */}
      <div className="h-24 bg-gradient-to-b from-transparent via-black/50 to-black" />

      {/* FAQ Section */}
      <div className="bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div 
            ref={faqRef}
            className={`transform transition-all duration-1000 ${
              faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono text-center mb-12">
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
    </section>
  );
};

export default Technologies;
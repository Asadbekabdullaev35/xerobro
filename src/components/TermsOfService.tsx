import React, { useEffect } from 'react';
import PageHeader from './PageHeader';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Function to create a shooting star
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      
      // Random starting position in top 30% of screen
      const startPos = Math.random() * 30;
      star.style.top = `${startPos}%`;
      star.style.right = '-50px';
      
      const duration = 1.5 + Math.random() * 0.5;
      star.style.animation = `shooting-star-animation ${duration}s linear`;

      document.getElementById('terms-of-service')?.appendChild(star);

      star.addEventListener('animationend', () => {
        star.remove();
      });
    };

    // Create shooting stars at random intervals
    const interval = setInterval(() => {
      if (Math.random() > 0.85) {
        createShootingStar();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="terms-of-service" className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Användarvillkor" />
      <div className="pt-32 pb-24">
        <div className="absolute inset-0 bg-black">
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
        <div className="grid-animation absolute inset-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="prose prose-invert">
            <h1 className="text-4xl font-bold mb-8 font-mono">Användarvillkor</h1>
            <p className="text-gray-300 mb-4">Giltig från: 20 mars 2025</p>
            
            <p className="text-gray-300 mb-8">
              Dessa användarvillkor (härefter "Villkor") reglerar affärsrelationen mellan Xerobro, representerat av Alish Kazimov (härefter "vi", "oss" eller "Xerobro"), och användare av våra tjänster (härefter "Kund" eller "du"). Dessa Villkor gäller för alla beställningar och avtal som ingås via webbplatsen xerobro.se. Vi erbjuder skräddarsydda AI-drivna automatiseringstjänster, inklusive men inte begränsat till chatbots, callcenter-automatisering och mer.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Tillämpningsområde</h2>
              <p className="text-gray-300 mb-4">1.1. Dessa Villkor gäller för alla beställningar av tjänster som görs via webbplatsen xerobro.se och omfattar både kunder inom och utanför Europeiska unionen.</p>
              <p className="text-gray-300 mb-4">1.2. Dessa Villkor är en del av avtalet mellan Xerobro och Kunden, oavsett om Kunden är en konsument eller ett företag.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Avtalets ingående</h2>
              <p className="text-gray-300 mb-4">2.1. Ett avtal mellan Xerobro och Kunden ingås när Kunden lägger en beställning via webbplatsen och Xerobro accepterar beställningen. Registrering krävs inte.</p>
              <p className="text-gray-300 mb-4">2.2. Beställningen accepteras genom att tjänsten tillhandahålls eller genom en uttrycklig bekräftelse från Xerobro.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Tjänster</h2>
              <p className="text-gray-300 mb-4">3.1. Xerobro erbjuder skräddarsydda AI-drivna automatiseringstjänster, inklusive:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>AI-chatbots</li>
                <li>AI-Telegram-bots</li>
                <li>Webbutveckling</li>
                <li>Sociala medier-automatisering (Instagram, Facebook)</li>
                <li>Automatiserad X-hantering</li>
                <li>E-handel automatisering</li>
                <li>AI-Outreach-system</li>
                <li>AI-drivna callcenter</li>
              </ul>
              <p className="text-gray-300 mb-4">3.2. Alla tjänster anpassas individuellt efter Kundens behov. Framgång beror på Kundens användning och implementering.</p>
              <p className="text-gray-300 mb-4">3.3. Ingen garanti för framgång ges, eftersom resultatet beror på hur Kunden använder de tillhandahållna verktygen.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Priser och betalning</h2>
              <p className="text-gray-300 mb-4">4.1. Priser anges på webbplatsen xerobro.se och anges i amerikanska dollar (USD), exklusive moms om inget annat anges.</p>
              <p className="text-gray-300 mb-4">4.2. Betalning sker genom Xerobros godkända betalningsmetoder. Kunden förbinder sig att betala hela beloppet vid beställning. Det finns inga prenumerationer eller återkommande betalningar, förutom för tjänster med månatliga avtal.</p>
              <p className="text-gray-300 mb-4">4.3. Betalning för engångstjänster (t.ex. chatbots, webbsidor) ska ske i sin helhet vid beställning.</p>
              <p className="text-gray-300 mb-4">4.4. För månatliga tjänster (t.ex. callcenter) måste Kunden säga upp avtalet minst en vecka före månadens slut för att undvika automatisk förlängning.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Ångerrätt och återbetalning</h2>
              <p className="text-gray-300 mb-4">5.1. Eftersom tjänsterna är digitala och skräddarsydda gäller ingen lagstadgad ångerrätt. Återbetalningar görs endast vid fel från Xerobro.</p>
              <p className="text-gray-300 mb-4">5.2. Vid fel från Xerobro erbjuds antingen en gratis reparation eller återbetalning.</p>
              <p className="text-gray-300 mb-4">5.3. Månatliga avtal kan endast sägas upp innan månaden är slut. Uppsägning ska ske minst en vecka före månadens slut.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Ansvar och garanti</h2>
              <p className="text-gray-300 mb-4">6.1. Xerobro ansvarar endast för fel om de orsakats av oss. Vi garanterar inte specifika resultat.</p>
              <p className="text-gray-300 mb-4">6.2. Ansvarsbegränsning: Vi ansvarar endast för skador vid uppsåt eller grov vårdslöshet, och ansvaret är begränsat till det belopp som betalats för tjänsten.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Dataskydd</h2>
              <p className="text-gray-300 mb-4">7.1. Xerobro behandlar personuppgifter i enlighet med GDPR och andra gällande dataskyddslagar.</p>
              <p className="text-gray-300 mb-4">7.2. Vi samarbetar med tredjepartsleverantörer för AI-tjänster. Dessa följer relevanta dataskyddsregler.</p>
              <p className="text-gray-300 mb-4">7.3. Vi vidtar tekniska och organisatoriska åtgärder för att säkerställa dataskydd och sekretess.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Tredjepartsleverantörer</h2>
              <p className="text-gray-300 mb-4">8.1. Xerobro använder tredjepartsleverantörer för att leverera vissa tjänster. Dessa följer tillämpliga lagar och regler.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Avtalets längd och uppsägning</h2>
              <p className="text-gray-300 mb-4">9.1. Engångstjänster har ingen fast löptid och kräver ingen uppsägning.</p>
              <p className="text-gray-300 mb-4">9.2. Månatliga tjänster måste sägas upp minst en vecka före månadens slut. Uppsägning sker skriftligen eller via e-post till info@xerobro.com.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Ändringar av villkoren</h2>
              <p className="text-gray-300 mb-4">10.1. Xerobro förbehåller sig rätten att ändra dessa Villkor. Förändringar meddelas Kunden minst fyra veckor i förväg. Om Kunden inte invänder anses de nya villkoren godkända.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
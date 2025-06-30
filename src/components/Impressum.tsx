import React, { useEffect } from 'react';
import PageHeader from './PageHeader';

const Impressum = () => {
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

      document.getElementById('impressum')?.appendChild(star);

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
    <div id="impressum" className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Impressum" />
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
            <h1 className="text-4xl font-bold mb-8 font-mono">Impressum / Juridisk information</h1>
            <p className="text-gray-300 mb-8">Uppgifter enligt § 5 TMG / Information enligt § 5 TMG</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">EU Tvistlösning</h2>
              <p className="text-gray-300 mb-4">
                Europeiska kommissionen tillhandahåller en plattform för online-tvistlösning (ODR):{' '}
                <a 
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:text-gray-300"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-gray-300 mb-4">Vår e-postadress finns ovan i impressum.</p>
              <p className="text-gray-300 mb-4">
                Vi är varken skyldiga eller villiga att delta i ett tvistlösningsförfarande inför en konsumentskiljenämnd.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Ansvar för innehåll</h2>
              <p className="text-gray-300 mb-4">
                Som tjänsteleverantör är vi enligt § 7 Abs. 1 TMG ansvariga för vårt eget innehåll på dessa sidor i enlighet med allmän lagstiftning. Enligt §§ 8–10 TMG är vi dock inte skyldiga att övervaka överförd eller lagrad information från tredje part eller att undersöka omständigheter som tyder på olaglig verksamhet.
              </p>
              <p className="text-gray-300 mb-4">
                Skyldigheter att ta bort eller blockera användningen av information enligt allmän lagstiftning förblir opåverkade. Ansvar i detta avseende är dock endast möjligt från det ögonblick en konkret rättslig överträdelse blir känd. Om vi får kännedom om sådana rättsliga överträdelser kommer vi omedelbart att ta bort innehållet.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Ansvar för länkar</h2>
              <p className="text-gray-300 mb-4">
                Vår webbplats innehåller länkar till externa webbplatser som drivs av tredje part, vars innehåll vi inte har något inflytande över. Därför kan vi inte heller ta något ansvar för detta externa innehåll. Ansvaret för innehållet på länkade sidor ligger alltid hos respektive leverantör eller operatör av sidorna.
              </p>
              <p className="text-gray-300 mb-4">
                De länkade sidorna kontrollerades vid tidpunkten för länkningen av eventuella lagöverträdelser. Olagligt innehåll kunde inte identifieras vid tidpunkten för länkningen. En permanent kontroll av innehållet på de länkade sidorna är dock inte rimlig utan konkreta indikationer på en rättslig överträdelse. Om vi får kännedom om rättsliga överträdelser kommer vi omedelbart att ta bort sådana länkar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Upphovsrätt</h2>
              <p className="text-gray-300 mb-4">
                Innehållet och verken som skapats av webbplatsens operatörer på dessa sidor omfattas av tysk upphovsrätt. Reproduktion, redigering, distribution och all typ av användning utanför upphovsrättens gränser kräver skriftligt medgivande från respektive upphovsman eller skapare.
              </p>
              <p className="text-gray-300 mb-4">
                Nedladdningar och kopior av denna sida är endast tillåtna för privat, icke-kommersiellt bruk. Om innehållet på denna sida inte har skapats av operatören, respekteras tredje parts upphovsrätt. Om du ändå skulle upptäcka en upphovsrättsintrång, ber vi dig meddela oss. Vid kännedom om rättsliga överträdelser kommer vi omedelbart att ta bort sådant innehåll.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Användningsbegränsning enligt § 44b Abs. 3 UrhG</h2>
              <p className="text-gray-300 mb-4">
                Användning av innehållet på denna webbplats för kommersiell text- och datautvinning enligt § 44b Abs. 1 UrhG, inklusive träning av artificiell intelligens, är inte tillåten.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
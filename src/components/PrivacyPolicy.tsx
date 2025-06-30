import React, { useEffect } from 'react';
import PageHeader from './PageHeader';

const PrivacyPolicy = () => {
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

      document.getElementById('privacy-policy')?.appendChild(star);

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
    <div id="privacy-policy" className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Integritetspolicy" />
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
            <h1 className="text-4xl font-bold mb-8 font-mono">Integritetspolicy</h1>
            
            <p className="text-gray-300 mb-8">
              Xerobro ("vi", "oss" eller "vår") är engagerade i att skydda din personliga datas integritet och säkerhet. Denna integritetspolicy förklarar hur vi samlar in, använder och behandlar din information när du gör en beställning hos oss.
            </p>

            <p className="text-gray-300 mb-8">
              Vi behandlar dina personuppgifter i enlighet med den allmänna dataskyddsförordningen (GDPR) (EU) 2016/679 och andra tillämpliga dataskyddslagar.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Personuppgiftsansvarig</h2>
              <p className="text-gray-300 mb-4">
                Den personuppgiftsansvarige för behandlingen av dina personuppgifter är:
              </p>
              <p className="text-gray-300 mb-4">
                Xerobro
              </p>
              <p className="text-gray-300 mb-4">
                📧 E-post: info@xerobro.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information vi samlar in</h2>
              
              <h3 className="text-xl font-semibold mb-2">2.1. Personuppgifter</h3>
              <p className="text-gray-300 mb-4">
                Vi samlar in och behandlar följande personuppgifter när du gör en beställning:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Kontaktinformation: Namn, e-postadress, telefonnummer (om frivilligt tillhandahållet).</li>
                <li>Beställningsinformation: Information om de produkter eller tjänster du begär.</li>
                <li>Betalningsinformation: Betalningsuppgifter behandlas säkert av externa betalningsleverantörer (vi lagrar inte betalningsinformation).</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">2.2. Inga cookies eller spårningsteknologier</h3>
              <p className="text-gray-300 mb-4">
                Vi använder inte cookies, spårningsverktyg eller liknande teknologier för att samla in personuppgifter.
              </p>

              <h3 className="text-xl font-semibold mb-2">2.3. Rättslig grund för behandling</h3>
              <p className="text-gray-300 mb-4">
                Vi behandlar dina personuppgifter baserat på följande rättsliga grunder enligt artikel 6 i GDPR:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Fullgörande av avtal (Art. 6(1)(b) GDPR) – Behandling är nödvändig för att fullgöra din beställning.</li>
                <li>Berättigade intressen (Art. 6(1)(f) GDPR) – För att säkerställa att våra tjänster fungerar korrekt.</li>
                <li>Rättsliga skyldigheter (Art. 6(1)(c) GDPR) – För att följa tillämpliga lagar och regler.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Hur vi använder din information</h2>
              <p className="text-gray-300 mb-4">
                Vi använder de insamlade uppgifterna för följande ändamål:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>För att behandla din beställning – Säkerställa orderhantering och kundkommunikation.</li>
                <li>För att tillhandahålla kundsupport – Svara på förfrågningar och lösa problem.</li>
                <li>För att uppfylla juridiska krav – Till exempel skatteregler och bedrägeribekämpning.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Behandling av uppgifter av tredje part</h2>
              
              <h3 className="text-xl font-semibold mb-2">4.1. Externa tjänsteleverantörer</h3>
              <p className="text-gray-300 mb-4">
                Vi lagrar inte kunddata på våra egna servrar. Istället behandlas uppgifter av tredjepartsleverantörer som hanterar orderhantering, betalningsprocesser och tjänsteleverans. Dessa leverantörer är baserade inom Europeiska unionen (EU) och USA.
              </p>

              <h3 className="text-xl font-semibold mb-2">4.2. Internationella dataöverföringar</h3>
              <p className="text-gray-300 mb-4">
                Vissa personuppgifter kan överföras utanför Europeiska ekonomiska samarbetsområdet (EES) (t.ex. till USA). Vi säkerställer att lämpliga skyddsåtgärder finns på plats, inklusive:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>EU:s standardavtalsklausuler (SCCs)</li>
                <li>Tillräcklighetsbeslut från Europeiska kommissionen</li>
                <li>Databehandlingsavtal (DPA) med strikta sekretesskrav</li>
              </ul>
              <p className="text-gray-300 mb-4">
                En lista över tredjepartsleverantörer och deras dataskyddspolicyer kan tillhandahållas på begäran.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Lagring och radering av data</h2>
              <p className="text-gray-300 mb-4">Vi lagrar inte kunddata långsiktigt.</p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Beställningsdata: Lagrade endast så länge som krävs av våra tredjepartsleverantörer.</li>
                <li>Betalningsdata: Lagras inte av oss, utan endast av den externa betalningsleverantören.</li>
                <li>Kommunikationsdata: Raderas efter att ärendet har behandlats, om det inte krävs enligt lag.</li>
              </ul>
              <p className="text-gray-300 mb-4">
                Du kan när som helst begära radering av dina uppgifter (se avsnitt 6).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Dina rättigheter enligt GDPR</h2>
              <p className="text-gray-300 mb-4">
                Enligt den allmänna dataskyddsförordningen (GDPR) har du följande rättigheter gällande dina personuppgifter:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-300">
                <li>Rätt till tillgång – Begära en kopia av de personuppgifter vi lagrar om dig.</li>
                <li>Rätt till rättelse – Begära korrigering av felaktiga eller ofullständiga uppgifter.</li>
                <li>Rätt till radering ("rätten att bli bortglömd") – Begära att dina personuppgifter raderas.</li>
                <li>Rätt till begränsning av behandling – Begära att vi begränsar hur vi använder dina uppgifter.</li>
                <li>Rätt till dataportabilitet – Få dina uppgifter i ett strukturerat format.</li>
                <li>Rätt att invända – Invända mot behandling baserat på berättigade intressen.</li>
                <li>Rätt att återkalla samtycke – Om behandlingen baseras på samtycke kan du återkalla det när som helst.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Hur du utövar dina rättigheter</h3>
              <p className="text-gray-300 mb-4">
                För att utöva någon av dessa rättigheter, vänligen kontakta oss på:
              </p>
              <p className="text-gray-300 mb-4">
                📧 info@xerobro.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Klagomål</h2>
              <p className="text-gray-300 mb-4">
                Om du anser att din personliga data behandlas på ett olagligt sätt har du rätt att lämna in ett klagomål till din lokala dataskyddsmyndighet.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Ändringar i denna integritetspolicy</h2>
              <p className="text-gray-300 mb-4">
                Vi förbehåller oss rätten att uppdatera denna integritetspolicy när som helst. Uppdateringar publiceras på denna sida med ett reviderat "Senast uppdaterad"-datum.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Kontaktinformation</h2>
              <p className="text-gray-300 mb-4">
                För frågor eller funderingar gällande denna integritetspolicy, vänligen kontakta oss på:
              </p>
              <p className="text-gray-300">
                📧 info@xerobro.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
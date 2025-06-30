import React from 'react';
import { Bot, Database, MessageSquare, Calendar, FileText, ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DetailLayout from '../DetailLayout';
import annaImage from '../../data/logo/ANNA.png';

const FeatureCard = ({ icon: Icon, title, description, features, detailPath }: { icon: any, title: string, description: string, features: string[], detailPath: string }) => {
  const navigate = useNavigate();
  
  return (
    <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 rounded-lg bg-white/10">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm text-gray-400 group/feature">
            <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-white/50 group-hover/feature:translate-x-1 transition-transform flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div 
        onClick={() => navigate(detailPath)}
        className="flex items-center text-sm text-white/70 hover:text-white cursor-pointer group/link"
      >
        <span>Läs mer</span>
        <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, description }: { title: string, value: string, description: string }) => (
  <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
    <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
    <div className="text-3xl font-bold mb-3 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
      {value}
    </div>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const AnnaDetails = () => {
  return (
    <DetailLayout
      title="ANNA – Admin"
      subtitle="ANNA är inte bara en assistent – hon är din självlärande och proaktiva administratör som sköter allt från inkommande samtal till offertflöden och CRM-uppdateringar. Med ANNA i teamet slipper du manuellt pappersarbete, missade möten och dålig kunduppföljning. Hon ger dina kunder ett professionellt bemötande – dygnet runt – och frigör värdefull tid för ditt team att fokusera på det som verkligen räknas."
      icon={Bot}
      profileImage={annaImage}
    >
      {/* Key Features */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># FUNKTIONER</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Nyckelfunktioner</h2>
        </div>
        <div className="space-y-12">
          <FeatureCard
            icon={MessageSquare}
            title="Kundsupport: Effektiv ärendehantering via e-post och chatt"
            description="ANNA hanterar alla inkommande supportärenden effektivt och professionellt."
            features={[
              'ANNA svarar automatiskt på vanliga frågor och hanterar supportärenden via e-post, kontaktformulär eller chatt',
              'Hon kan förstå kundens ärende, föreslå lösningar och eskalera till rätt medarbetare när det behövs',
              'Alla interaktioner loggas och kategoriseras, så att teamet alltid har full historik'
            ]}
            detailPath="/customer-support-ai-details"
          />

          <FeatureCard
            icon={FileText}
            title="Offert & Orderflöde: Från förfrågan till färdig order"
            description="Automatiserad hantering av hela orderprocessen från första offert till slutförd affär."
            features={[
              'När en förfrågan kommer in skapar ANNA automatiskt en offert utifrån dina mallar och prissättningsregler',
              'Hon skickar offerten till kunden, följer upp, justerar vid behov och konverterar till order vid accept',
              'Orderbekräftelser och kundkommunikation sker automatiskt i rätt kanaler'
            ]}
            detailPath="/order-flow-details"
          />

          <FeatureCard
            icon={Database}
            title="CRM-integration: Full koll på kunddata i realtid"
            description="Automatisk synkronisering och uppdatering av all kunddata över dina system."
            features={[
              'ANNA synkar automatiskt alla kundinteraktioner med ditt CRM – inga manuella uppdateringar behövs',
              'Alla ärenden, bokningar och samtal loggas och kategoriseras direkt i systemet',
              'Påminnelser, statusuppdateringar och nästa steg i processen genereras automatiskt för att inget ska glömmas'
            ]}
            detailPath="/crm-integration-details"
          />

          <FeatureCard
            icon={Phone}
            title="Callcenter (Inbound): Telefonsvarare med servicekänsla"
            description="Professionell och effektiv hantering av inkommande samtal dygnet runt."
            features={[
              'ANNA tar emot inkommande samtal, identifierar kundens behov och svarar direkt eller kopplar vidare',
              'Hon kan boka tider, starta supportärenden eller ge uppdateringar om pågående ärenden',
              'Samtalen spelas in, transkriberas och sammanfattas för enkel uppföljning'
            ]}
            detailPath="/ai-call-center-details"
          />

          <FeatureCard
            icon={Calendar}
            title="Smartbokningar: Automatiserad kalenderhantering"
            description="Intelligent hantering av bokningar och möten för optimal tidsplanering."
            features={[
              'ANNA hanterar bokningar, skickar bekräftelser och påminnelser – helt utan mänsklig inblandning',
              'Bokningar synkas med kalendersystem och tillgänglighet för teamet i realtid',
              'Kunder får en smidig upplevelse med rätt tid, rätt plats och rätt person – varje gång'
            ]}
            detailPath="/smart-scheduling-details"
          />
        </div>
      </section>

      {/* Performance Metrics */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># MÄTVÄRDEN</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Prestandapåverkan</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MetricCard
            title="Kundsupport"
            value="+70%"
            description="Kortare svarstid i support – Kunden får hjälp direkt utan väntetid"
          />
          <MetricCard
            title="Administration"
            value="+50%"
            description="Mindre administrativt arbete genom automatiserade flöden"
          />
          <MetricCard
            title="Möteshantering"
            value="+30%"
            description="Färre missade möten genom smart bokningslogik"
          />
        </div>
      </section>

      {/* Technical Details */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># SPECIFIKATIONER</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Tekniska detaljer</h2>
        </div>
        <div className="space-y-8">
          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Systemintegration</h3>
            <p className="text-gray-400 mb-6">
              När en förfrågan kommer in skapar ANNA automatiskt en offert utifrån dina mallar och prissättningsregler.
            </p>
            <p className="text-gray-400">
              Hon skickar offerten till kunden, följer upp, justerar vid behov och konverterar till order vid accept.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Teknisk implementation</h3>
            <ul className="space-y-4">
              {[
                'Integration med CRM-system via API',
                'Automatisk synkronisering av kunddata',
                'Realtidsuppdateringar av status och historik',
                'Smart bokningshantering med kalendersynk'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-400 group">
                  <ArrowRight className="h-5 w-5 mr-3 text-white/50 group-hover:translate-x-1 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Fördelar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-3">
                <ArrowRight className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Snabbare svarstider i support</p>
              </div>
              <div className="flex items-start space-x-3">
                <ArrowRight className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Effektivare administration</p>
              </div>
              <div className="flex items-start space-x-3">
                <ArrowRight className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Bättre kundupplevelse</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
};

export default AnnaDetails;
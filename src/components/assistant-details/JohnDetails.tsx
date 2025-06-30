import React from 'react';
import { Users, Target, Brain, BarChart3, ArrowRight, Zap, FileText, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DetailLayout from '../DetailLayout';
import maleAssistant from '../../data/logo/Maleassistant.png';

const FeatureCard = ({ icon: Icon, title, description, features, detailPath }: { icon: any, title: string, description: string, features: string[], detailPath: string }) => {
  const navigate = useNavigate();
  
  return (
    <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:bg-white/10 transition-all group">
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

const JohnDetails = () => {
  return (
    <DetailLayout
      title="JOHN – Sälj"
      subtitle="John är inte bara en assistent – han är en smart och självgående säljare som arbetar hela vägen från leadgenerering till konvertering. Med hans hjälp får du inte bara kvalificerade leads, utan också en försäljningsprocess som är optimerad för framgång. John hjälper ditt team att maximera resultatet genom att coacha, analysera samtalskvalitet och själv aktivt delta i både samtal och uppföljningar. Oavsett om det handlar om att förbättra din säljares prestationer eller att själv ta kontakt med leads, så är John din ultimata partner för att skapa verklig försäljningstillväxt."
      icon={Users}
      profileImage={maleAssistant}
    >
      {/* Key Features */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># FUNKTIONER</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Nyckelfunktioner</h2>
        </div>
        <div className="space-y-12">
          <FeatureCard
            icon={Target}
            title="Leadgenerering: Från första kontakt till bokat möte"
            description="John automatiserar hela processen från första kontakt till bokat möte, så att du kan fokusera på att stänga affärerna."
            features={[
              'John skickar automatiskt skräddarsydda introduktioner baserat på leadsens specifika behov och utmaningar',
              'När ett lead visar intresse, får du en omedelbar notifikation',
              'John följer upp autonomt tills mötet är bokat – du behöver inte lyfta ett finger'
            ]}
            detailPath="/lead-capture-details"
          />

          <FeatureCard
            icon={Brain}
            title="CRM-integration: Automatisk synkronisering och uppdatering av kunddata"
            description="All kunddata hålls uppdaterad och synkroniserad automatiskt över alla system."
            features={[
              'John synkar automatiskt alla leads i ditt CRM-system och uppdaterar all kunddata i realtid',
              'Varje gång ett lead interagerar med ditt företag, uppdateras dess status och info utan att du behöver göra något',
              'Påminnelser om nästa steg i säljprocessen skapas automatiskt för att säkerställa att inga leads faller mellan stolarna'
            ]}
            detailPath="/crm-integration-details"
          />

          <FeatureCard
            icon={FileText}
            title="Offert & Orderflöde: Från offert till slutförd order"
            description="Automatiserad hantering av hela orderprocessen från första offert till slutförd affär."
            features={[
              'När John tar emot en förfrågan skapar han automatiskt en offert som är skräddarsydd för kundens behov',
              'Han följer upp med kunden, justerar offerten vid behov, och håller reda på alla ändringar',
              'När kunden accepterar offerten, skickar John automatiskt en orderbekräftelse'
            ]}
            detailPath="/order-flow-details"
          />

          <FeatureCard
            icon={Phone}
            title="AI-callcenter (Outbound): Aktiv uppföljning och samtalsgenerering"
            description="Intelligent samtalshantering som aktivt följer upp leads och kvalificerar dem för vidare bearbetning."
            features={[
              'John använder naturlig röstteknik för att ringa upp leads och identifiera deras behov',
              'Han bokar återkoppling och vidarebefordrar samtalen till rätt person vid behov',
              'Samtalen sker automatiskt och effektivt utan att du behöver vara inblandad'
            ]}
            detailPath="/ai-call-center-details"
          />

          <FeatureCard
            icon={BarChart3}
            title="Säljcoach: Transkribering, analys och feedback för bättre resultat"
            description="Kontinuerlig analys och coaching för att förbättra säljteamets prestationer."
            features={[
              'John lyssnar på och transkriberar alla säljsamtal, inklusive dina säljares samtal',
              'Han identifierar brister i samtalen och ger konkret feedback om förbättringsområden',
              'Feedbacken levereras regelbundet för att mäta förbättring och utveckling'
            ]}
            detailPath="/sales-coach-details"
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
            title="Leadgenerering"
            value="+50%"
            description="Fler kvalificerade leads genom automatiserad leadgenerering utan manuellt arbete"
          />
          <MetricCard
            title="Schemaläggning"
            value="-70%"
            description="Färre schemakonflikter genom smart kalenderhantering och automatisk uppföljning"
          />
          <MetricCard
            title="Konvertering"
            value="+30%"
            description="Högre konverteringsgrad genom kontinuerlig feedback och coaching"
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
              Säljare skickar in en offertförfrågan, n8n hämtar priser från Odoo/SAP, skapar ett PandaDoc- eller DocuSign-förslag och skickar det via mejl eller SMS inom sekunder.
            </p>
            <p className="text-gray-400">
              När dokumentet är signerat skickas ordern automatiskt till ERP-systemet och ekonomiavdelningen notifieras – helt utan manuell hantering.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Teknisk implementation</h3>
            <ul className="space-y-4">
              {[
                'Offertskapande sker automatiskt via PandaDoc eller DocuSign (API-koppling)',
                'Prissättning hanteras av regelmotor i n8n eller med GPT för textformuleringar',
                'Integration mot ERP-system som Odoo för orderflöde',
                'SMS- och e-postbekräftelser via Twilio och SendGrid'
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
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">70% färre schemakonflikter</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">90% minskning av "no-show"-möten</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Anpassad branding på varje inbjudan och påminnelse</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
};

export default JohnDetails;
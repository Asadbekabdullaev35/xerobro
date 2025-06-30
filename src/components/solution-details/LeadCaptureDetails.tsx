import React from 'react';
import { BrainCircuit, Target, Brain, BarChart3, ArrowRight, Zap } from 'lucide-react';
import DetailLayout from '../DetailLayout';

const FeatureSection = ({ title, description }: { title: string, description: string }) => (
  <div className="space-y-2">
    <h4 className="text-lg font-bold text-white">{title}</h4>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const MetricCard = ({ title, value, description }: { title: string, value: string, description: string }) => (
  <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
    <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
    <div className="text-3xl font-bold mb-3 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
      {value}
    </div>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const LeadCaptureDetails = () => {
  return (
    <DetailLayout
      title="Leadgenerering"
      subtitle="Automatiserad leadgenerering som identifierar, kvalificerar och bearbetar potentiella kunder. Vår AI analyserar, personaliserar och följer upp – så du kan fokusera på att stänga affärerna."
      icon={BrainCircuit}
    >
      {/* Key Features */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># FUNKTIONER</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Nyckelfunktioner</h2>
        </div>
        <div className="space-y-12">
          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Automatiserad leadkvalificering
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI analyserar företagets målgrupp och söker efter leads baserat på specifika kriterier som köpbeteende, branschspecifika behov och tidigare interaktioner. Systemet identifierar de mest lovande leads för vidare bearbetning, vilket sparar tid och resurser.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Personligt anpassade meddelanden
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI skapar unika och skräddarsydda meddelanden för varje lead, som reflekterar deras affärsbehov och utmaningar. Meddelandena kan anpassas efter bransch, företagets storlek och tidigare interaktioner för att öka chansen till en framgångsrik kontakt.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Automatisk uppföljning
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI planerar uppföljning baserat på tidigare interaktioner och skickar påminnelser och meddelanden för att bibehålla engagemanget. AI justerar tonläge och timing baserat på hur leads har reagerat tidigare för att maximera chansen till konvertering.
            </p>
          </div>
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
            title="Automatisk leadkvalificering"
            value="25-40%"
            description="Ökad konverteringsgrad för leads genom snabbare och mer exakt identifiering av relevanta prospects"
          />
          <MetricCard
            title="Personlig kommunikation"
            value="50-100%"
            description="Ökat engagemang jämfört med generiska meddelanden genom AI-driven personalisering"
          />
          <MetricCard
            title="Automatisk uppföljning"
            value="30-50%"
            description="Förbättrad leadnurturing-effektivitet och ökad konverteringsgrad"
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
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">API-integrationer</h3>
            <p className="text-gray-400 mb-6">
              Vi använder API:er från OpenStreetMap, LinkedIn/Apollo och Clearbit/ZoomInfo för att hämta färska prospekt. Dessa enrichas och kvalificeras i realtid med hjälp av GPT-promptar från OpenAI.
            </p>
            <p className="text-gray-400">
              n8n orkestrerar varje steg – scraping, dublettkontroll, poängsättning och uppdatering i ditt CRM-system (HubSpot, Salesforce, Pipedrive).
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Teknisk implementation</h3>
            <ul className="space-y-4">
              {[
                'Insamling av företagsdata via Clearbit och ZoomInfo (API:er)',
                'Segmentering och klassificering via GPT-baserad promptanalys',
                'Personalisering av meddelanden baserat på företagsprofil och intressen',
                'Automatiserad bearbetning via e-postflöden i n8n – uppföljningar, påminnelser och konverteringslogik',
                'Leads registreras och uppdateras direkt i CRM (t.ex. HubSpot eller Salesforce)'
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
                <p className="text-gray-400">+50% fler kvalificerade leads utan manuell research</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Omedelbar poängsättning och personalisering för högre framgång med outreach</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Helt automatiserat: nya leads dyker upp i din pipeline varje morgon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
};

export default LeadCaptureDetails;
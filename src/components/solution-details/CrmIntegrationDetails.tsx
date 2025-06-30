import React from 'react';
import { Users, Database, Brain, BarChart3, ArrowRight, Zap } from 'lucide-react';
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

const CrmIntegrationDetails = () => {
  return (
    <DetailLayout
      title="CRM-integration"
      subtitle="Automatiserad synkronisering och hantering av kunddata över alla dina system. Vår AI håller all information uppdaterad, genererar insikter och säkerställer att inget faller mellan stolarna."
      icon={Users}
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
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Automatisk synkronisering
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Systemet synkroniserar kontinuerligt all information om leads, aktiviteter och konversationer mellan olika plattformar och CRM utan att behöva manuell inmatning, vilket garanterar att alla data hålls uppdaterade i realtid.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Insiktsdriven rapportering
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI analyserar och sammanställer information från alla interaktioner och konversationer för att skapa rapporter som ger värdefulla insikter, som kundbeteenden, konverteringsfrekvenser och mönster, vilket hjälper till att fatta strategiska beslut.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Smidig hantering av påminnelser
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI sätter upp automatiska påminnelser för viktiga uppföljningar och aktiviteter. Den skickar påminnelser till rätt personer vid rätt tidpunkt för att säkerställa att inget följs upp för sent eller glöms bort.
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
            title="Automatisk synkronisering"
            value="90%"
            description="Minskning av datafel och 20-30% tidsbesparing i manuell datahantering"
          />
          <MetricCard
            title="Insiktsdriven rapportering"
            value="10-20%"
            description="Ökning av försäljningscykelns effektivitet genom förbättrat beslutsfattande"
          />
          <MetricCard
            title="Smidig påminnelsehantering"
            value="15-25%"
            description="Ökning av fullföljda uppgifter och kundengagemang genom rätt tidsföljning"
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
              Håll alla dina system perfekt synkroniserade – inga fler datasilor. Oavsett om det handlar om Salesforce↔Odoo-ordersynk eller HubSpot↔QuickBooks-kunddata, så ser våra tvåvägsflöden via n8n till att allt hålls uppdaterat.
            </p>
            <p className="text-gray-400">
              Vi standardiserar all mellanliggande data i Supabase (Postgres) och använder webhooks för äkta realtidsuppdateringar.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Teknisk implementation</h3>
            <ul className="space-y-4">
              {[
                'Fullständig CRM-synk via n8n:s färdiga HubSpot-, Pipedrive- och Salesforce-noder',
                'Realtidstriggers via webhooks',
                'PostgreSQL (Supabase) används för temporär datalagring',
                'Rapportering via Google Data Studio eller inbyggda dashboards'
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
                <p className="text-gray-400">100% korrekt, uppdaterad data över alla plattformar</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Eliminera dubblettinmatningar och manuell avstämning</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Flexibel kartläggning låter dig implementera nya verktyg på några timmar, inte dagar</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
};

export default CrmIntegrationDetails;
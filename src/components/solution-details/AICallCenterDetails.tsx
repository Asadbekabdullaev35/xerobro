import React from 'react';
import { Phone, Mic, Brain, BarChart3, ArrowRight, Zap } from 'lucide-react';
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

const AICallCenterDetails = () => {
  return (
    <DetailLayout
      title="AI-callcenter"
      subtitle="Intelligent samtalshantering som svarar på inkommande samtal, identifierar ärendetyp och löser vanliga frågor. Vår AI hanterar kundsamtal dygnet runt med en naturlig röst."
      icon={Phone}
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
                <Mic className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Naturligt samtalsflöde
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI svarar på inkommande samtal med en röst som låter naturlig och mänsklig. Den kan hantera olika samtalstyper, från kundfrågor till teknisk support, och ge svar på vanliga frågor eller vidarekoppla till en mänsklig agent när det behövs.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Ärendeigenkänning
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI identifierar och kategoriserar ärenden baserat på samtalets innehåll. Den hanterar vanliga frågor eller vidarebefordrar komplexare ärenden till rätt avdelning.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Vidarekoppling och bokningar
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Om samtalet kräver en uppföljning eller ett möte, kan AI boka detta direkt i kalendern eller vidarekoppla till relevant person för vidare åtgärd.
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
            title="Naturligt samtalsflöde"
            value="80-90%"
            description="Av inkommande samtal kan hanteras utan mänsklig hjälp"
          />
          <MetricCard
            title="Ärendeigenkänning"
            value="40-50%"
            description="Minskad hanteringstid för enkla ärenden genom direkt kategorisering"
          />
          <MetricCard
            title="Vidarekoppling och bokningar"
            value="30-40%"
            description="Minskad tid för att boka möten eller vidarekoppla samtal"
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
              Nya leads triggar AI-drivna utgående samtal via Twilio och Voiceflow, medan inkommande samtal hanteras i samma flöde.
            </p>
            <p className="text-gray-400">
              Samtalen transkriberas med Whisper, sammanfattas av GPT och loggas automatiskt i ditt CRM – inklusive ärendestatus och nästa steg.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Teknisk implementation</h3>
            <ul className="space-y-4">
              {[
                'Utgående samtal via Twilio Voice',
                'Samtalsflöde designat i Voiceflow med GPT som samtalspartner',
                'Realtidstranskribering via OpenAI Whisper',
                'Sammanfattning och insikter skickas till CRM eller Slack'
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
                <p className="text-gray-400">Dubbla din outreach-kapacitet utan att lägga till personal</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Fånga varje samtalsdetalj, inget antecknande behövs</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Hands-free kvalificering: säljare pratar bara med de hetaste leads</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
};

export default AICallCenterDetails;
import React from 'react';
import { Headphones, Brain, BarChart3, ArrowRight, Zap } from 'lucide-react';
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

const SalesCoachDetails = () => {
  return (
    <DetailLayout
      title="Säljcoach"
      subtitle="AI som analyserar säljsamtal, identifierar förbättringsområden och ger personlig coaching i realtid. Förbättra ditt säljteams prestanda genom kontinuerlig feedback och utveckling."
      icon={Headphones}
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
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Transkribering av samtal
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI transkriberar automatiskt säljsamtal och konverterar dem till text, vilket gör det lättare att granska och analysera. Detta möjliggör detaljerad analys av säljtekniker och kundinteraktioner.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Analys av samtalskvalitet
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI bedömer samtalets effektivitet genom att identifiera styrkor och svagheter i säljarens prestationer, som retorik, timing och kundbemötande. Detta ger värdefulla insikter för förbättring.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Feedback och utveckling
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Baserat på samtalsanalys ger AI konkret feedback och förslag på förbättring, samt mäter säljarens framsteg över tid för att identifiera utvecklingsområden och spåra förbättringar.
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
            title="Transkribering av samtal"
            value="20-30%"
            description="Minskade analys- och granskningskostnader genom automatisk transkribering"
          />
          <MetricCard
            title="Analys av samtalskvalitet"
            value="15-25%"
            description="Förbättrad säljarprestanda genom kontinuerlig kvalitetsanalys"
          />
          <MetricCard
            title="Feedback och utveckling"
            value="20-40%"
            description="Ökad produktivitet och konverteringsgrad genom personlig coaching"
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
              Efter varje säljsamtal transkriberar Whisper ljudet, GPT analyserar samtalsbalans, tonläge och nyckelämnen, och genererar en tydlig coachingrapport som skickas till säljaren via Slack eller mejl.
            </p>
            <p className="text-gray-400">
              Alla insikter och framsteg spåras automatiskt i CRM-systemet för att följa utvecklingen över tid.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Teknisk implementation</h3>
            <ul className="space-y-4">
              {[
                'Alla säljsamtal transkriberas via Whisper',
                'GPT analyserar samtal för taltid, ton och förbättringsområden',
                'Resultat levereras som insikter i Slack eller CRM',
                'Översiktsdashboards byggs i Supabase'
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
                <p className="text-gray-400">Kontinuerliga, objektiva prestandainsikter</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Personlig coaching i stor skala</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Förbättrade vinstsiffror genom målinriktad feedback</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
};

export default SalesCoachDetails;
import React from 'react';
import { UserSearch, Search, Brain, BarChart3, ArrowRight, Zap } from 'lucide-react';
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

const HRRecruitmentDetails = () => {
  return (
    <DetailLayout
      title="Rekrytering"
      subtitle="Effektivisera hela rekryteringsprocessen med AI som söker, utvärderar och intervjuar kandidater. Spara tid och hitta rätt kompetens snabbare genom automatiserad kandidathantering."
      icon={UserSearch}
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
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Automatisk kandidatmatchning
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI genomför en omfattande analys av kandidaters CV:n och erfarenheter för att matcha dem med de specifika krav som definieras i en jobbeskrivning. Den söker aktivt genom olika kanaler som jobbportaler och sociala medier för att identifiera de mest relevanta kandidaterna. AI bedömer både hårda och mjuka färdigheter för att säkerställa en bra match.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Inledande intervjuer
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI genomför strukturerade intervjuer med kandidater där den ställer förinställda frågor och analyserar svaren för att bedöma både tekniska färdigheter och kulturell passform. AI gör också bedömningar kring kandidatens förmåga att hantera stress och specifika arbetsuppgifter.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Kandidatprofiler och flöde
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI skapar detaljerade profiler för varje kandidat som består av både hårda och mjuka färdigheter, samt dokumenterar intervjuresultat och nästa steg i processen. AI planerar vidare tester, referenstagning och andra nödvändiga åtgärder för att ta kandidaten till nästa fas.
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
            title="Automatisk kandidatmatchning"
            value="40-60%"
            description="Förbättrad matchningskvalitet och effektivitet, vilket leder till snabbare rekryteringstider"
          />
          <MetricCard
            title="Inledande intervjuer"
            value="30-50%"
            description="Minskad rekryteringstid genom automatiserade första intervjuer"
          />
          <MetricCard
            title="Kandidatprofiler och flöde"
            value="20-30%"
            description="Minskade felrekryteringar genom förbättrad kandidatupplevelse"
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
              När ett CV tas emot extraheras erfarenhet, kompetenser och utbildning automatiskt via GPT och matchas mot jobbprofilen.
            </p>
            <p className="text-gray-400">
              SMS/mejl-bokningar sköter intervjuer, och när någon anställs provisioneras konton, välkomstpaket skickas och alla onboarding-uppgifter spåras till fullbordan.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Teknisk implementation</h3>
            <ul className="space-y-4">
              {[
                'CV-analys med GPT för att extrahera nyckeldata och matchningspoäng',
                'Förintervjuer genomförs automatiskt via GPT-baserade frågor i n8n eller Voiceflow',
                'Kandidatdata lagras i Supabase eller skickas till ATS-system som Greenhouse'
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
                <p className="text-gray-400">Granska kandidater 80% snabbare</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Felfri, papperslös onboarding</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">En fantastisk första dag för varje nyanställd</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
};

export default HRRecruitmentDetails;
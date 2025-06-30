import React from 'react';
import { Globe, Zap, Palette, BarChart3, ArrowRight, XCircle } from 'lucide-react';
import DetailLayout from '../DetailLayout';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
    <div className="inline-block p-3 rounded-lg bg-white/10 mb-6">
      <Icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const MetricCard = ({ value, label }: { value: string, label: string }) => (
  <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all group">
    <div className="text-4xl font-bold mb-3 group-hover:scale-110 transition-transform">{value}</div>
    <div className="text-gray-400">{label}</div>
  </div>
);

const DownsideCard = ({ title, description }: { title: string, description: string }) => (
  <div className="flex items-start space-x-4 p-6 rounded-lg bg-white/5 border border-white/10">
    <XCircle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
    <div>
      <h4 className="text-lg font-bold text-red-400 mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const WebsiteCreationDetails = () => {
  return (
    <DetailLayout
      title="AI-webbplatsskapande"
      subtitle="Bygg fantastiska, konverteringsoptimerade webbplatser med AI-driven design och innehållsgenerering."
      icon={Globe}
    >
      {/* Key Features */}
      <section>
        <div className="flex flex-col items-start mb-10">
          <span className="font-mono text-white/70 mb-2"># FUNKTIONER</span>
          <h2 className="text-3xl font-bold">Nyckelfunktioner</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Palette}
            title="AI-designsystem"
            description="Intelligenta designrekommendationer baserade på branschens bästa praxis och användarbeteende."
          />
          <FeatureCard
            icon={Zap}
            title="Smart innehåll"
            description="AI-genererat innehåll som är optimerat för engagemang och konvertering."
          />
          <FeatureCard
            icon={BarChart3}
            title="Prestationsanalys"
            description="Realtidsinsikter och optimeringsrekommendationer för maximal påverkan."
          />
        </div>
      </section>

      {/* Performance Metrics */}
      <section>
        <div className="flex flex-col items-start mb-10">
          <span className="font-mono text-white/70 mb-2"># MÄTVÄRDEN</span>
          <h2 className="text-3xl font-bold">Prestandapåverkan</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard value="75%" label="Snabbare utveckling" />
          <MetricCard value="40%" label="Högre konvertering" />
          <MetricCard value="60%" label="Kostnadsminskning" />
          <MetricCard value="24/7" label="Optimering" />
        </div>
      </section>

      {/* Technical Details */}
      <section>
        <div className="flex flex-col items-start mb-10">
          <span className="font-mono text-white/70 mb-2"># SPECIFIKATIONER</span>
          <h2 className="text-3xl font-bold">Tekniska detaljer</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
        </div>
        <div className="p-8 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-2xl font-bold mb-6">AI-funktioner</h3>
          <ul className="space-y-4">
            {[
              'Intelligent layoutoptimering',
              'Dynamisk innehållspersonalisering',
              'Automatiserad SEO-optimering',
              'Smart färgschemagenerering',
              'Användarbeteendeanalys',
              'Konverteringsvägsoptimering'
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-400 group">
                <ArrowRight className="h-5 w-5 mr-3 text-white/50 group-hover:translate-x-1 transition-transform" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Manual Labor Downsides */}
      <section>
        <div className="flex flex-col items-start mb-10">
          <span className="font-mono text-white/70 mb-2"># MANUELLA_PROCESS_BEGRÄNSNINGAR</span>
          <h2 className="text-3xl font-bold">Nackdelar med manuellt arbete</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
        </div>
        <div className="grid grid-cols-1 gap-6">
          <DownsideCard
            title="Tidskrävande utveckling"
            description="Traditionell webbutveckling kräver omfattande manuell kodning och designarbete, vilket leder till längre utvecklingscykler och högre kostnader."
          />
          <DownsideCard
            title="Begränsad optimering"
            description="Manuell webbplatshantering saknar realtidsoptimeringsfunktioner, vilket resulterar i missade möjligheter för förbättrad prestanda."
          />
          <DownsideCard
            title="Statiskt innehåll"
            description="Manuellt skapade webbplatser har ofta statiskt innehåll som inte anpassar sig till användarbeteende eller preferenser."
          />
          <DownsideCard
            title="Inkonsekvent design"
            description="Manuella designprocesser kan leda till inkonsekvent varumärkesprofilering och användarupplevelse över olika sidor och sektioner."
          />
        </div>
      </section>
    </DetailLayout>
  );
};

export default WebsiteCreationDetails;
import React from 'react';
import { FileText, Brain, BarChart3, ArrowRight, Zap } from 'lucide-react';
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

const OrderFlowDetails = () => {
  return (
    <DetailLayout
      title="Offert & Orderflöde"
      subtitle="Automatiserad hantering från första offert till genomförd order. Vår AI skapar personliga offerter, hanterar godkännanden och ser till att ordern går hela vägen till leverans."
      icon={FileText}
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
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Automatisk offertgenerering
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              AI skapar offerter på några sekunder genom att analysera kundens behov och preferenser. Offertgeneratorn kan ta hänsyn till produktens specifikationer, kundens historik och budget för att skapa en passande offert utan att någon manuellt behöver skriva den.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Personalisering av innehåll
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Varje offert anpassas för att möta kundens unika krav. Innehållet kan skräddarsys baserat på deras tidigare inköp, företagsprofil och aktuella behov för att säkerställa relevans och engagemang.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Orderbekräftelser i realtid
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              När en kund godkänner en offert, skickar AI en orderbekräftelse omedelbart via e-post eller SMS. Bekräftelsen inkluderar alla detaljer för att undvika förvirring och ger ett professionellt intryck.
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
            title="Automatisk offertgenerering"
            value="60-70%"
            description="Minskad tid för att skapa offerter, vilket låter säljteam hantera fler affärer"
          />
          <MetricCard
            title="Personalisering av innehåll"
            value="20-30%"
            description="Ökad konverteringsgrad tack vare bättre anpassning till kundens behov"
          />
          <MetricCard
            title="Orderbekräftelser i realtid"
            value="10-15%"
            description="Förbättrad orderhantering genom minskade förseningar och fel"
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
                <p className="text-gray-400">80% snabbare offerthantering</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Felfri prissättning baserad på din live ERP-data</p>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Automatiserad revisionsspår för regelefterlevnad och rapportering</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
};

export default OrderFlowDetails;
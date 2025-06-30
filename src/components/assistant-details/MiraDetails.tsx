import React from 'react';
import { UserSearch, Search, Brain, BarChart3, ArrowRight, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DetailLayout from '../DetailLayout';
import miraImage from '../../data/logo/MIRA.png';

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

const MiraDetails = () => {
  return (
    <DetailLayout
      title="MIRA – Rekrytering"
      subtitle="MIRA är din digitala rekryterare som gör hela processen snabbare och mer effektiv. Från kandidatmatchning och intervjuer till bokningar och onboarding – MIRA tar hand om det mesta så att du kan fokusera på de strategiska delarna av rekryteringen. Med hennes hjälp får du inte bara bättre kandidater utan även en mer strömlinjeformad och skalbar rekryteringsprocess."
      icon={UserSearch}
      profileImage={miraImage}
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
                Rekrytering: Automatiserad kandidatmatchning och intervjuer
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              MIRA genomför omfattande analys och matchning av kandidater mot specifika krav.
            </p>
            <ul className="space-y-3 mt-6">
              {[
                'MIRA genomför en omfattande analys av kandidatens CV, erfarenhet och färdigheter',
                'Hon matchar dessa mot jobbeskrivningens specifika krav och söker aktivt genom olika kanaler (jobbportaler och sociala medier) för att hitta de mest relevanta kandidaterna',
                'Vidare genomför MIRA också strukturerade intervjuer, där hon ställer förinställda frågor för att bedöma både tekniska och mjuka färdigheter samt kandidatens kulturella passform'
              ].map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-400 group/feature">
                  <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-white/50 group-hover/feature:translate-x-1 transition-transform flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-lg bg-white/10">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Smartbokningar: Automatiserad hantering av intervjuer
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Intelligent hantering av intervjubokningar och uppföljningar.
            </p>
            <ul className="space-y-3 mt-6">
              {[
                'MIRA synkroniserar med din kalender och hanterar automatiskt bokningar för intervjuer',
                'Hon skickar SMS eller e-postinbjudningar och påminnelser till kandidater för att säkerställa att alla möten hålls',
                'Vid behov föreslår hon ombokningar för att undvika konflikter och hålla processen smidig'
              ].map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-400 group/feature">
                  <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-white/50 group-hover/feature:translate-x-1 transition-transform flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section>
        <div className="section-header">
          <span className="font-mono text-white/70 mb-2 block"># MÄTVÄRDEN</span>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Prestandapåverkan</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard
            title="Rekrytering"
            value="Snabbare"
            description="Automatiserad kandidatmatchning och intervjuer sparar värdefull tid"
          />
          <MetricCard
            title="Kandidatupplevelse"
            value="Bättre"
            description="Personlig och professionell kommunikation genom hela processen"
          />
          <MetricCard
            title="Bokningar"
            value="Effektivare"
            description="MIRA synkroniserar och optimerar alla intervjuer automatiskt"
          />
          <MetricCard
            title="Kontroll"
            value="Full"
            description="Alla kandidatprofiler och intervjuresultat lagras säkert i systemet"
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
                <ArrowRight className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Granska kandidater 80% snabbare</p>
              </div>
              <div className="flex items-start space-x-3">
                <ArrowRight className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">Felfri, papperslös onboarding</p>
              </div>
              <div className="flex items-start space-x-3">
                <ArrowRight className="h-5 w-5 text-white/70 flex-shrink-0 mt-1" />
                <p className="text-gray-400">En fantastisk första dag för varje nyanställd</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DetailLayout>
  );
};

export default MiraDetails;
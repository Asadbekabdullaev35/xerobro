import React, { useState } from 'react';
import { solutions } from '../data/solutions';
import { ArrowRight, Sparkles, Bot, ChevronDown, ChevronUp, PenLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from './PageHeader';

interface SolutionFeatures {
  [key: string]: string[];
}

const solutionFeatures: SolutionFeatures = {
  'Leadgenerering': [
    'Scrapear webben och berikar leads med personlig data automatiskt',
    'Skickar ut individuellt anpassade introduktioner med personlig data',
    'Notifierar vid hett intresse och följer upp tills bokat möte – helt autonomt'
  ],
  'CRM-integration': [
    'Synkar leads automatiskt in i ditt CRM-system',
    'Uppdaterar kontakter, statusar och personlig data i realtid',
    'Ger uppdateringar och påminnelser för nästa steg i säljprocessen'
  ],
  'Offert & Orderflöde': [
    'Skapar offerter automatiskt efter kundförfrågan',
    'Följer upp och anpassar offerter efter kundens behov',
    'Automatiserar hela vägen till orderbekräftelse'
  ],
  'Smart-bokningar': [
    'Länkar möten och andra bokningar mot din kalender och föreslår optimala tider',
    'Undviker dubbelbokningar och tidskonflikter',
    'Skickar påminnelser och ombokningsförslag automatiskt'
  ],
  'Kundsupport': [
    'Hanterar och besvarar inkommande ärenden dygnet runt',
    'Behandlar supportärenden direkt och kvalificerar ärenden och klagomål automatiskt',
    'Eskalerar till människa vid behov'
  ],
  'Sociala Medier': [
    'Skapar och schemalägger inlägg',
    'Följer upp kommentarer och meddelanden',
    'Analyserar engagemang och föreslår förbättringar'
  ],
  'AI-callcenter': [
    'Svarar på inkommande samtal med naturlig röst',
    'Identifierar ärendetyp och löser vanliga frågor',
    'Kopplar vidare eller bokar återkoppling vid behov'
  ],
  'Chatbots': [
    'Driver konversationer med kunder i realtid',
    'Identifierar behov och vägleder till köp eller support',
    'Integreras i din webbplats eller andra kanaler'
  ],
  'Rekrytering': [
    'Söker upp kandidater baserat på kravprofil',
    'Genomför initiell intervju och kvalificerar kandidater',
    'Skapar profiler för varje kandidat och planerar kvalificerade vidare'
  ],
  'Säljcoach': [
    'Lyssnar på och transkriberar säljsamtal',
    'Identifierar brister och förbättringsområden',
    'Ger konkret feedback och mäter förbättring över tid'
  ]
};

const SolutionSelector = () => {
  const navigate = useNavigate();
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);
  const [expandedSolution, setExpandedSolution] = useState<string | null>(null);
  const [specificRequest, setSpecificRequest] = useState('');

  const toggleSolution = (title: string) => {
    setSelectedSolutions(prev => 
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const toggleExpand = (title: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setExpandedSolution(expandedSolution === title ? null : title);
  };

  const handleSubmit = () => {
    localStorage.setItem('specificRequest', specificRequest);
    navigate('/deploy', { state: { selectedSolutions, specificRequest } });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Skapa din assistent" />
      <div className="pt-32 pb-24 relative">
        <div className="matrix-bg" />
        <div className="grid-animation absolute inset-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-white/20 rounded-lg blur-xl animate-pulse" />
              <div className="relative bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg p-8">
                <h1 className="text-4xl font-bold text-white font-mono mb-4">
                  Välj dina lösningar_
                </h1>
                <div className="flex justify-center items-center space-x-2 text-white/80">
                  <Bot className="h-6 w-6 animate-bounce" />
                  <span>Välj funktioner för att skapa din perfekta AI-assistent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specific Request Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <PenLine className="h-5 w-5 text-white/70" />
                <h2 className="text-lg font-semibold text-white">Specifika önskemål</h2>
              </div>
              <textarea
                value={specificRequest}
                onChange={(e) => setSpecificRequest(e.target.value)}
                placeholder="Beskriv dina specifika önskemål eller krav här..."
                className="w-full h-32 bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              />
            </div>
          </div>

          {/* Interactive Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {solutions.map((solution) => {
              const isSelected = selectedSolutions.includes(solution.title);
              const isExpanded = expandedSolution === solution.title;
              
              return (
                <div 
                  key={solution.title}
                  className="relative transition-all duration-500 transform hover:scale-[1.02]"
                >
                  {/* Selection indicator */}
                  <div className={`absolute -inset-0.5 rounded-xl blur transition duration-500 ${
                    isSelected ? 'opacity-100 bg-white/20' : 'opacity-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent'
                  }`} />
                  
                  {/* Card Content */}
                  <div className={`relative h-full rounded-lg border transition-all duration-500 ${
                    isSelected 
                      ? 'bg-white/10 border-white/50' 
                      : 'bg-gradient-to-br from-white/5 to-transparent border-white/10'
                  }`}>
                    {/* Main Content */}
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => toggleSolution(solution.title)}
                    >
                      <div className="flex flex-col h-full">
                        {/* Icon and Title */}
                        <div className="flex items-center space-x-4 mb-3">
                          <div className={`p-3 rounded-lg transition-all duration-500 ${
                            isSelected ? 'bg-white/20' : 'bg-white/10'
                          }`}>
                            <solution.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-white">{solution.title}</h3>
                        </div>
                        
                        {/* Description */}
                        <p className="text-sm text-gray-400 mb-4">
                          {solution.description}
                        </p>
                        
                        {/* Selection and Expand Controls */}
                        <div className="flex items-center justify-between mt-auto">
                          <div className={`flex items-center space-x-2 text-sm ${
                            isSelected ? 'text-white' : 'text-white/50'
                          }`}>
                            <Sparkles className={`h-4 w-4 transition-transform duration-500 ${
                              isSelected ? 'scale-110' : 'scale-100'
                            }`} />
                            <span>{isSelected ? 'Vald' : 'Klicka för att välja'}</span>
                          </div>
                          
                          <button
                            onClick={(e) => toggleExpand(solution.title, e)}
                            className="text-white/70 hover:text-white transition-colors"
                          >
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Features Section */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-[500px] border-t border-white/10' : 'max-h-0'
                    }`}>
                      <div className="p-6 bg-black/20">
                        <h4 className="text-sm font-semibold text-white/80 mb-4">Nyckelfunktioner:</h4>
                        <ul className="space-y-3">
                          {solutionFeatures[solution.title]?.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-400 group">
                              <ArrowRight className="h-4 w-4 mr-2 mt-1 text-white/50 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit Button */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={selectedSolutions.length === 0 && !specificRequest.trim()}
              className={`group relative px-8 py-4 rounded-lg font-mono transition-all duration-500 ${
                selectedSolutions.length > 0 || specificRequest.trim()
                  ? 'bg-white text-black hover:bg-gray-100 border border-white/50 glow-md hover-glow'
                  : 'bg-white/10 text-white/50 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span>Skapa din assistent</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
              {selectedSolutions.length > 0 && (
                <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-white text-black text-sm flex items-center justify-center border border-white/50">
                  {selectedSolutions.length}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSelector;
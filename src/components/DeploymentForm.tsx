import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, XCircle, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../data/logo/Color logo - no background.png';

// Country codes for US and European countries
const countryCodes = [
  { code: '+1', country: 'USA' },
  { code: '+43', country: 'Österrike' },
  { code: '+32', country: 'Belgien' },
  { code: '+385', country: 'Kroatien' },
  { code: '+45', country: 'Danmark' },
  { code: '+372', country: 'Estland' },
  { code: '+358', country: 'Finland' },
  { code: '+33', country: 'Frankrike' },
  { code: '+49', country: 'Tyskland' },
  { code: '+30', country: 'Grekland' },
  { code: '+36', country: 'Ungern' },
  { code: '+353', country: 'Irland' },
  { code: '+39', country: 'Italien' },
  { code: '+371', country: 'Lettland' },
  { code: '+370', country: 'Litauen' },
  { code: '+352', country: 'Luxemburg' },
  { code: '+356', country: 'Malta' },
  { code: '+31', country: 'Nederländerna' },
  { code: '+47', country: 'Norge' },
  { code: '+48', country: 'Polen' },
  { code: '+351', country: 'Portugal' },
  { code: '+40', country: 'Rumänien' },
  { code: '+421', country: 'Slovakien' },
  { code: '+386', country: 'Slovenien' },
  { code: '+34', country: 'Spanien' },
  { code: '+46', country: 'Sverige' },
  { code: '+41', country: 'Schweiz' },
  { code: '+44', country: 'Storbritannien' }
].sort((a, b) => a.country.localeCompare(b.country));

const industries = [
  'Teknologi',
  'Finans',
  'Sjukvård',
  'Detaljhandel',
  'Tillverkning',
  'Övrigt'
];

const DeploymentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    countryCode: '+46', // Default to Sweden
    phone: '',
    industry: '',
    automationNeeds: '',
    currentProcesses: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedAssistants, setSelectedAssistants] = useState<string[]>([]);

  useEffect(() => {
    // Load selected assistants from localStorage
    const stored = localStorage.getItem('selectedAssistants');
    if (stored) {
      setSelectedAssistants(JSON.parse(stored));
    }

    // Load any saved form data
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Get assistant names
      const assistantNames = selectedAssistants.map(id => {
        switch (id) {
          case 'anna': return 'ANNA';
          case 'john': return 'JOHN';
          case 'mira': return 'MIRA';
          default: return '';
        }
      }).filter(Boolean);

      // Create a mailto link with the form data
      const subject = encodeURIComponent(`Ny förfrågan från ${formData.businessName}`);
      const body = encodeURIComponent(`
Företagsnamn: ${formData.businessName}
E-post: ${formData.email}
Telefon: ${formData.countryCode} ${formData.phone}
Bransch: ${formData.industry}

Valda assistenter:
${assistantNames.join('\n')}

Automatiseringsbehov:
${formData.automationNeeds}

Nuvarande processer:
${formData.currentProcesses}
      `);

      // Open default email client with pre-filled data
      window.location.href = `mailto:info@xerobro.com?subject=${subject}&body=${body}`;
      
      // Show success message
      setSubmitStatus('success');
      
      // Clear stored data
      localStorage.removeItem('selectedAssistants');
      localStorage.removeItem('formData');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          businessName: '',
          email: '',
          countryCode: '+46',
          phone: '',
          industry: '',
          automationNeeds: '',
          currentProcesses: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    setFormData(newFormData);
    localStorage.setItem('formData', JSON.stringify(newFormData));
  };

  const handleBack = () => {
    navigate('/ai-assistants');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <button 
            onClick={handleBack}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
            <span>Tillbaka</span>
          </button>
          <img src={logoImage} alt="Xerobro Logo" className="h-16" />
        </div>
      </div>

      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block">
              <div className="flex flex-col items-start">
                <span className="font-mono text-white/70 mb-2"># DRIFTSÄTTNINGSFÖRFRÅGAN</span>
                <h1 className="text-3xl font-bold text-white font-mono">
                  Initiera driftsättning_
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-white to-transparent mt-4" />
              </div>
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center text-green-400">
              <CheckCircle className="h-5 w-5 mr-2" />
              Din förfrågan har skickats! Vi kontaktar dig inom kort.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-400">
              <XCircle className="h-5 w-5 mr-2" />
              Det uppstod ett fel när din förfrågan skulle skickas. Vänligen försök igen.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-2">
                  Företagsnamn
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Ange ditt företagsnamn"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Företagets e-post
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Ange företagets e-post"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefonnummer
                </label>
                <div className="flex gap-4">
                  <div className="relative">
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="appearance-none bg-black/50 border border-white/20 rounded-lg pl-4 pr-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    >
                      {countryCodes.map(({ code, country }) => (
                        <option key={code} value={code}>
                          {code} ({country})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Ange ditt telefonnummer"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                  Bransch
                </label>
                <div className="relative">
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="appearance-none w-full bg-black/50 border border-white/20 rounded-lg pl-4 pr-10 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  >
                    <option value="">Välj din bransch</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry.toLowerCase()}>
                        {industry}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label htmlFor="automationNeeds" className="block text-sm font-medium text-gray-300 mb-2">
                  Vad vill du automatisera?
                </label>
                <textarea
                  id="automationNeeds"
                  name="automationNeeds"
                  value={formData.automationNeeds}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Beskriv de processer eller uppgifter du vill automatisera"
                  required
                />
              </div>

              <div>
                <label htmlFor="currentProcesses" className="block text-sm font-medium text-gray-300 mb-2">
                  Beskrivning av nuvarande processer
                </label>
                <textarea
                  id="currentProcesses"
                  name="currentProcesses"
                  value={formData.currentProcesses}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Beskriv dina nuvarande processer och smärtpunkter"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black px-8 py-4 rounded-lg font-mono hover:bg-gray-100 transition-all flex items-center justify-center border border-white/50 glow-md hover-glow"
            >
              Skicka förfrågan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeploymentForm;
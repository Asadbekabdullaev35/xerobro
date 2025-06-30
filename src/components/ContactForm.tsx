import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ContactForm = () => {
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>();
  const { t } = useTranslation();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    languageLevel: '',
    serviceTier: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Check if we're coming from the courses page
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const service = urlParams.get('service');
    
    if (service === 'language-courses') {
      setFormData(prev => ({
        ...prev,
        serviceTier: 'Language Courses',
        message: 'I am interested in German language courses. Please provide more information about enrollment and pricing.'
      }));
    }
  }, [location]);

  const languageLevels = t('contact.languageLevels', { returnObjects: true }) as string[];
  const serviceTiers = t('contact.serviceTiers', { returnObjects: true }) as string[];

  // Add language courses option to service tiers
  const extendedServiceTiers = ['Language Courses', ...serviceTiers];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create a mailto link with the form data
      const subject = encodeURIComponent(`Consultation Request from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Desired Language Level: ${formData.languageLevel}
Service Tier: ${formData.serviceTier}

Message:
${formData.message}
      `);

      // Open default email client with pre-filled data
      window.location.href = `mailto:info@germanpath.com?subject=${subject}&body=${body}`;
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          languageLevel: '',
          serviceTier: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={contentRef}
          className={`transform transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-mono mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-8">
              {submitStatus === 'success' && (
                <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center text-green-400">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  {t('contact.success')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-400">
                  <XCircle className="h-5 w-5 mr-2" />
                  {t('contact.error')}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.name')} {t('contact.form.required')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder={t('contact.form.namePlaceholder')}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.email')} {t('contact.form.required')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder={t('contact.form.emailPlaceholder')}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="languageLevel" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.languageLevel')}
                    </label>
                    <select
                      id="languageLevel"
                      name="languageLevel"
                      value={formData.languageLevel}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="">{t('contact.form.selectLevel')}</option>
                      {languageLevels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="serviceTier" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.form.serviceTier')}
                    </label>
                    <select
                      id="serviceTier"
                      name="serviceTier"
                      value={formData.serviceTier}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="">{t('contact.form.selectTier')}</option>
                      {extendedServiceTiers.map((tier) => (
                        <option key={tier} value={tier}>{tier}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-4 rounded-lg font-mono hover:bg-gray-100 transition-all flex items-center justify-center border border-white/50 glow-md hover-glow group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
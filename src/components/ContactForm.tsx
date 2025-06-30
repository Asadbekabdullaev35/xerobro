import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Send, CheckCircle, XCircle } from 'lucide-react';

const ContactForm = () => {
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    languageLevel: '',
    serviceTier: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const languageLevels = [
    'Complete Beginner (A1)',
    'Elementary (A2)',
    'Intermediate (B1)',
    'Upper Intermediate (B2)',
    'Advanced (C1)',
    'C-Test Preparation',
    'Not Sure - Need Assessment'
  ];

  const serviceTiers = [
    'Standard ($200)',
    'Pro ($699)',
    'Premium ($999)',
    'Not Sure - Need Consultation'
  ];

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
              Start Your German Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Get your free consultation and personalized plan for studying in Germany
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-8">
              {submitStatus === 'success' && (
                <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center text-green-400">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Thank you! We'll contact you within 24 hours to schedule your free consultation.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-400">
                  <XCircle className="h-5 w-5 mr-2" />
                  There was an error sending your request. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="languageLevel" className="block text-sm font-medium text-gray-300 mb-2">
                      Desired Language Level
                    </label>
                    <select
                      id="languageLevel"
                      name="languageLevel"
                      value={formData.languageLevel}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="">Select your target level</option>
                      {languageLevels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="serviceTier" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Tier
                    </label>
                    <select
                      id="serviceTier"
                      name="serviceTier"
                      value={formData.serviceTier}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="">Select service level</option>
                      {serviceTiers.map((tier) => (
                        <option key={tier} value={tier}>{tier}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Tell Us About Your Goals
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Tell us about your German language goals, university preferences, timeline, or any specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-4 rounded-lg font-mono hover:bg-gray-100 transition-all flex items-center justify-center border border-white/50 glow-md hover-glow group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Request Consultation
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
import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Send, CheckCircle, XCircle } from 'lucide-react';

const ContactForm = () => {
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    educationLevel: '',
    studienkollegLocation: '',
    examsNeeded: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const educationLevels = [
    'High School Graduate',
    'University Student',
    'Bachelor\'s Degree',
    'Other'
  ];

  const studienkollegLocations = [
    'Munich',
    'Berlin',
    'Hamburg',
    'Frankfurt',
    'Cologne',
    'Stuttgart',
    'Düsseldorf',
    'Other/Undecided'
  ];

  const examTypes = [
    'Math Only',
    'German Only',
    'Both Math and German',
    'Not Sure'
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
      const subject = encodeURIComponent(`Free Assessment Request from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Education Level: ${formData.educationLevel}
Preferred Studienkolleg Location: ${formData.studienkollegLocation}
Exams Needed: ${formData.examsNeeded}

Message:
${formData.message}
      `);

      // Open default email client with pre-filled data
      window.location.href = `mailto:info@studienprep.com?subject=${subject}&body=${body}`;
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          educationLevel: '',
          studienkollegLocation: '',
          examsNeeded: '',
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
              Get Your Free Assessment
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Take the first step towards your German university dream. Our experts will evaluate your current level and create a personalized study plan.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-8">
              {submitStatus === 'success' && (
                <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center text-green-400">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Thank you! We'll contact you within 24 hours to schedule your free assessment.
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
                    <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-300 mb-2">
                      Current Education Level
                    </label>
                    <select
                      id="educationLevel"
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="">Select your level</option>
                      {educationLevels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="studienkollegLocation" className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Studienkolleg Location
                    </label>
                    <select
                      id="studienkollegLocation"
                      name="studienkollegLocation"
                      value={formData.studienkollegLocation}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="">Select location</option>
                      {studienkollegLocations.map((location) => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="examsNeeded" className="block text-sm font-medium text-gray-300 mb-2">
                    Which Exam(s) Do You Need?
                  </label>
                  <select
                    id="examsNeeded"
                    name="examsNeeded"
                    value={formData.examsNeeded}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="">Select exam type</option>
                    {examTypes.map((exam) => (
                      <option key={exam} value={exam}>{exam}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                    placeholder="Tell us about your goals, timeline, or any specific questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-4 rounded-lg font-mono hover:bg-gray-100 transition-all flex items-center justify-center border border-white/50 glow-md hover-glow group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Get My Free Assessment
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
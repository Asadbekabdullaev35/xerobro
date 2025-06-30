import React, { useState } from 'react';
import PageHeader from './PageHeader';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What German language levels do you offer?',
      answer: 'We offer comprehensive German language training from complete beginner (A1) to advanced (C1) levels, including specialized Studienkolleg C-Test preparation. Our courses are designed to meet the specific requirements of German universities and follow the Common European Framework of Reference for Languages (CEFR).'
    },
    {
      question: 'How long does it take to reach university-level German?',
      answer: 'The timeline depends on your starting level and study intensity. Typically, students can progress from A1 to B2 level in 8-12 months with our intensive program. For C1 level or C-Test preparation, an additional 3-6 months is usually required. We provide personalized timelines based on your goals and availability.'
    },
    {
      question: 'What is included in the university application support?',
      answer: 'Our university application support includes university selection guidance, document preparation and translation, personal statement writing, deadline management, admission requirements consultation, and application tracking. We help you navigate the complex German university system and maximize your chances of acceptance.'
    },
    {
      question: 'Do you help with visa applications?',
      answer: 'Yes, we provide comprehensive visa support including blocked account setup, health insurance arrangement, document preparation and translation, visa application guidance, and interview preparation. Our team is experienced with German student visa requirements and processes.'
    },
    {
      question: 'What is the difference between your service tiers?',
      answer: 'Standard ($200) includes basic document preparation and consultation. Pro ($699) adds visa assistance, accommodation search, and insurance setup. Premium ($999) provides complete end-to-end support including in-person assistance in both Uzbekistan and Germany, bureaucratic help, and ongoing support throughout your journey.'
    },
    {
      question: 'Do you provide support after arrival in Germany?',
      answer: 'Yes, our Pro and Premium packages include ongoing support after your arrival in Germany. This includes help with Anmeldung (registration), bank account opening, residence permit applications, and general bureaucratic assistance. We have local support staff in major German cities.'
    },
    {
      question: 'Can I switch between service tiers?',
      answer: 'Absolutely! You can upgrade your service tier at any time during your journey. Many students start with Standard and upgrade to Pro or Premium as their needs evolve. We\'ll adjust pricing accordingly and ensure seamless continuation of your support.'
    },
    {
      question: 'What is your success rate?',
      answer: 'We maintain a 98% success rate for students who complete our programs. Over 1000 students have successfully gained admission to German universities through our support, including top institutions like TU Munich, RWTH Aachen, and Heidelberg University.'
    },
    {
      question: 'Do you offer online or in-person classes?',
      answer: 'We offer flexible learning options including online classes, in-person sessions in Tashkent, and hybrid programs. Our online platform provides interactive lessons, while in-person sessions offer personalized attention. Premium package includes in-person support in Germany as well.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply fill out our contact form to request a free consultation. We\'ll assess your current German level, discuss your university goals, and recommend the best service tier for your needs. You can then enroll in our program and begin your journey to studying in Germany.'
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Frequently Asked Questions" />
      
      <div className="pt-32 pb-24 relative">
        <div className="matrix-bg opacity-20" />
        <div className="grid-animation absolute inset-0 opacity-30" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono">FAQ</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about German language learning and university applications
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-white/10 last:border-b-0"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 text-left flex items-center justify-between group"
                  aria-expanded={expandedFaq === index}
                >
                  <span className={`text-lg transition-colors duration-300 ${
                    expandedFaq === index ? 'text-white' : 'text-white/70 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`ml-4 flex-shrink-0 transition-transform duration-300 ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`}>
                    <ChevronDown className={`h-5 w-5 transition-colors duration-300 ${
                      expandedFaq === index ? 'text-white' : 'text-white/50 group-hover:text-white/70'
                    }`} />
                  </div>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedFaq === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pb-6 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
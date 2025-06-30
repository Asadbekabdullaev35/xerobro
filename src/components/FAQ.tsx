import React, { useState } from 'react';
import PageHeader from './PageHeader';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is a Studienkolleg?',
      answer: 'A Studienkolleg is a preparatory college in Germany that helps international students prepare for university studies. It\'s designed for students whose secondary school qualifications are not directly recognized for university admission in Germany. The program typically lasts one year and concludes with the Feststellungsprüfung (assessment test).'
    },
    {
      question: 'Do I need to attend a Studienkolleg?',
      answer: 'Whether you need to attend a Studienkolleg depends on your educational background and the country where you completed your secondary education. Students from many countries outside the EU typically need to complete Studienkolleg before university admission. We can help assess your specific situation during your free consultation.'
    },
    {
      question: 'What subjects are covered in the entrance exam?',
      answer: 'The entrance exam typically covers Mathematics and German language skills. The specific content depends on your chosen course of study (T-Kurs for technical subjects, W-Kurs for economics, M-Kurs for medicine, etc.). Our preparation program covers all relevant areas comprehensively.'
    },
    {
      question: 'How long does the preparation take?',
      answer: 'Our preparation program is flexible and depends on your current level. Most students complete our program in 3-6 months with intensive study. We offer both accelerated courses for students with strong foundations and extended programs for those who need more comprehensive preparation.'
    },
    {
      question: 'What is your success rate?',
      answer: 'We maintain a 95% success rate for students who complete our full preparation program. Over 500 students have successfully passed their Studienkolleg entrance exams and gone on to study at prestigious German universities including TU Munich, RWTH Aachen, and Heidelberg University.'
    },
    {
      question: 'Do you offer online classes?',
      answer: 'Yes, we offer both online and in-person classes to accommodate different learning preferences and schedules. Our online platform includes live interactive sessions, recorded lectures, practice tests, and one-on-one tutoring sessions with our expert instructors.'
    },
    {
      question: 'What makes your program different?',
      answer: 'Our instructors are former Studienkolleg teachers and native German speakers with extensive experience in the German education system. We provide personalized study plans, realistic mock exams, and comprehensive feedback. Additionally, we offer optional university application support to guide you through the entire process.'
    },
    {
      question: 'How much does the program cost?',
      answer: 'Our program costs vary depending on the specific services you choose and the duration of preparation needed. We offer flexible payment plans and packages. Contact us for a free assessment and personalized quote based on your specific needs and goals.'
    },
    {
      question: 'Can you help with university applications?',
      answer: 'Yes, we offer comprehensive university application support as an additional service. This includes document preparation, translation services, application form completion, university selection guidance, and interview preparation. Our team has extensive experience with German university admission processes.'
    },
    {
      question: 'What if I don\'t pass the exam on my first attempt?',
      answer: 'While our success rate is very high, if you don\'t pass on your first attempt, we provide additional support at no extra cost for students who completed our full program. This includes analysis of your exam performance, additional tutoring sessions, and preparation for the next exam date.'
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
              Everything you need to know about Studienkolleg preparation and our services
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
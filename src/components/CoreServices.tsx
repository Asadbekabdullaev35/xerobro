import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Calculator, BookOpen, FileCheck, Plus } from 'lucide-react';

const CoreServices = () => {
  const [gridRef, gridVisible] = useIntersectionObserver<HTMLDivElement>();

  const services = [
    {
      icon: Calculator,
      title: 'Math Exam Coaching',
      description: 'Intensive review and practice to ace Studienkolleg math exams',
      features: [
        'Algebra and Geometry fundamentals',
        'Calculus and Functions',
        'Statistics and Probability',
        'Practice tests with detailed solutions'
      ]
    },
    {
      icon: BookOpen,
      title: 'German Language Training',
      description: 'From grammar fundamentals to advanced reading comprehension',
      features: [
        'Grammar and Syntax mastery',
        'Academic vocabulary building',
        'Reading comprehension strategies',
        'Writing skills for academic success'
      ]
    },
    {
      icon: FileCheck,
      title: 'Mock Tests & Feedback',
      description: 'Realistic exam simulations with personalized improvement plans',
      features: [
        'Full-length practice exams',
        'Detailed performance analysis',
        'Personalized study recommendations',
        'Progress tracking and monitoring'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-mono mb-6">
            Core Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive preparation designed to maximize your chances of Studienkolleg admission
          </p>
        </div>

        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <div className="relative h-full p-8 bg-black border border-white/10 rounded-lg transition-all duration-500 hover:bg-white/5 hover:border-white/30 hover:scale-[1.02] flex flex-col">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative h-12 w-12 bg-gradient-to-br from-white/10 to-transparent rounded-lg p-2.5 border border-white/20">
                    <service.icon className="h-7 w-7 text-white transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>

                <div className="flex-1 space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-start text-sm text-gray-400 group/feature"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-white/50 mr-3 mt-2 flex-shrink-0 group-hover/feature:bg-white transition-colors" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Service */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-transparent rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
          
          <div className="relative bg-black border border-white/10 rounded-lg p-8 transition-all duration-500 transform hover:scale-[1.02] hover:border-white/30 hover:shadow-lg hover:shadow-white/10 group">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3">
                <Plus className="h-6 w-6 text-white" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                  Bonus Service
                </h3>
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="text-xl font-bold text-white mb-4">University Application Support (Optional)</h4>
              <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
                For an additional fee, we handle all document preparation, translations, and application submissions 
                to your chosen German universities. Let us guide you through the entire process from Studienkolleg to university admission.
              </p>
              <div className="inline-block px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white/80">
                Available as Add-on Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
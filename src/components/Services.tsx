import React from 'react';
import PageHeader from './PageHeader';
import { Calculator, BookOpen, FileCheck, Plus, Users, Clock, Target, Award } from 'lucide-react';

const Services = () => {
  const coreServices = [
    {
      icon: Calculator,
      title: 'Math Exam Coaching',
      description: 'Comprehensive mathematics preparation covering all Studienkolleg requirements',
      features: [
        'Algebra and Geometry fundamentals',
        'Calculus and Functions',
        'Statistics and Probability',
        'Practice tests with detailed solutions',
        'One-on-one tutoring sessions',
        'Group study sessions'
      ]
    },
    {
      icon: BookOpen,
      title: 'German Language Training',
      description: 'Complete German language preparation from basics to advanced academic level',
      features: [
        'Grammar and Syntax mastery',
        'Academic vocabulary building',
        'Reading comprehension strategies',
        'Writing skills for academic success',
        'Speaking and listening practice',
        'Cultural context understanding'
      ]
    },
    {
      icon: FileCheck,
      title: 'Mock Tests & Feedback',
      description: 'Realistic exam simulations with comprehensive performance analysis',
      features: [
        'Full-length practice exams',
        'Detailed performance analysis',
        'Personalized study recommendations',
        'Progress tracking and monitoring',
        'Weakness identification',
        'Improvement strategies'
      ]
    }
  ];

  const bonusServices = [
    {
      icon: Plus,
      title: 'University Application Support',
      description: 'Complete assistance with university applications and document preparation',
      features: [
        'Document preparation and translation',
        'Application form completion',
        'University selection guidance',
        'Deadline management',
        'Interview preparation',
        'Visa application support'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Former Studienkolleg instructors and native German speakers'
    },
    {
      icon: Award,
      title: '95% Success Rate',
      description: 'Proven track record with over 500 successful students'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Online and in-person classes that fit your schedule'
    },
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'Customized study plans based on your current level'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <PageHeader title="Our Services" />
      
      <div className="pt-32 pb-24 relative">
        <div className="matrix-bg opacity-20" />
        <div className="grid-animation absolute inset-0 opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Core Services */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono">Core Services</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Comprehensive preparation designed to maximize your chances of Studienkolleg admission
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreServices.map((service, index) => (
                <div 
                  key={index}
                  className="group relative h-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative h-full p-8 bg-black border border-white/10 rounded-lg transition-all duration-500 hover:bg-white/5 hover:border-white/30 hover:scale-[1.02] flex flex-col">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="relative h-12 w-12 bg-gradient-to-br from-white/10 to-transparent rounded-lg p-2.5 border border-white/20">
                        <service.icon className="h-7 w-7 text-white transform group-hover:scale-110 transition-transform duration-500" />
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
          </section>

          {/* Bonus Services */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">Additional Services</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Optional services to support your complete journey to German universities
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {bonusServices.map((service, index) => (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/5 via-blue-500/5 to-transparent rounded-xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  <div className="relative bg-black border border-white/10 rounded-lg p-8 transition-all duration-500 transform hover:scale-[1.02] hover:border-white/30 hover:shadow-lg hover:shadow-white/10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center space-x-3">
                        <service.icon className="h-6 w-6 text-white" />
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="text-center mb-8">
                      <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

                    <div className="text-center mt-8">
                      <div className="inline-block px-6 py-2 bg-white/10 rounded-full border border-white/20 text-white/80">
                        Available as Add-on Service
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">Why Choose StudienPrep?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                What sets us apart in Studienkolleg preparation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="text-center p-8 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="inline-block p-4 rounded-full bg-white/10 mb-4 group-hover:bg-white/20 transition-all">
                    <item.icon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;
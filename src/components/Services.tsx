import React from 'react';
import PageHeader from './PageHeader';
import { BookOpen, FileText, Home, MessageCircle, Users, Award, Clock, Globe } from 'lucide-react';

const Services = () => {
  const coreServices = [
    {
      icon: BookOpen,
      title: 'German Language Courses',
      description: 'Comprehensive German language training from beginner to advanced levels',
      features: [
        'A1-A2 Foundation courses',
        'B1-B2 Intermediate training',
        'C1 Advanced preparation',
        'Studienkolleg C-Test specific prep',
        'One-on-one coaching sessions',
        'Interactive learning materials',
        'Progress tracking and assessment'
      ]
    },
    {
      icon: FileText,
      title: 'University Applications',
      description: 'Expert guidance through the entire German university application process',
      features: [
        'University selection consulting',
        'Application document preparation',
        'Personal statement writing',
        'Deadline management',
        'Admission requirements guidance',
        'Interview preparation',
        'Application status tracking'
      ]
    },
    {
      icon: Home,
      title: 'Visa & Accommodation',
      description: 'Complete support for visa processing and finding accommodation in Germany',
      features: [
        'Blocked account setup assistance',
        'Health insurance arrangement',
        'Student visa application support',
        'Document preparation and translation',
        'Housing search in German cities',
        'Rental contract guidance',
        'Arrival preparation checklist'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Ongoing Support',
      description: 'Continuous assistance throughout your journey in Germany and Uzbekistan',
      features: [
        '24/7 chat support',
        'Phone consultation sessions',
        'In-person meetings in Tashkent',
        'In-person support in Germany',
        'Emergency assistance',
        'Bureaucratic help (Anmeldung, etc.)',
        'Cultural integration guidance'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Native German speakers and certified language instructors'
    },
    {
      icon: Award,
      title: '98% Success Rate',
      description: 'Proven track record with over 1000 successful students'
    },
    {
      icon: Clock,
      title: 'Flexible Support',
      description: 'Online, in-person, and hybrid learning options'
    },
    {
      icon: Globe,
      title: 'Complete Journey',
      description: 'End-to-end support from language learning to settling in Germany'
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono">Complete German Journey Support</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Everything you need from language learning to settling in Germany
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

          {/* Why Choose Us */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">Why Choose GermanPath?</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                What sets us apart in German language and university consulting
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
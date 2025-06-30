import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Users, Award, Clock, Target } from 'lucide-react';

const WhyUs = () => {
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>();

  const features = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Former Studienkolleg instructors and native German speakers with years of teaching experience'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '95% success rate with over 500 students successfully placed in German universities'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Online and in-person classes that fit your schedule, with weekend and evening options'
    },
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'Customized study plans based on your current level and target Studienkolleg requirements'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={contentRef}
          className={`transform transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent mb-6">
                Why Choose StudienPrep?
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
                We combine academic excellence with practical experience to give you the best preparation 
                for your Studienkolleg entrance exams and beyond.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all">
                      <feature.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Team Photo Placeholder */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/20 via-white/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="relative bg-gradient-to-br from-white/10 to-transparent rounded-2xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-24 w-24 text-white/30 mx-auto mb-4" />
                    <p className="text-white/60 text-lg">Our Expert Team</p>
                    <p className="text-white/40 text-sm mt-2">
                      Dedicated instructors with extensive<br />
                      Studienkolleg teaching experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
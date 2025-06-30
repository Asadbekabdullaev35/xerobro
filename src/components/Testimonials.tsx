import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [contentRef, contentVisible] = useIntersectionObserver<HTMLDivElement>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      university: 'TU Munich',
      studienkolleg: 'Studienkolleg München',
      quote: 'The math coaching was incredible! I went from struggling with basic algebra to confidently solving complex calculus problems. Now I\'m studying Engineering at TU Munich.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ahmed Hassan',
      university: 'Heidelberg University',
      studienkolleg: 'Studienkolleg Heidelberg',
      quote: 'The German language training transformed my academic writing. The instructors were patient and the materials were perfectly tailored to the Studienkolleg requirements.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Li Wei',
      university: 'RWTH Aachen',
      studienkolleg: 'Studienkolleg Aachen',
      quote: 'The mock tests were exactly like the real exam! The feedback helped me identify my weak points and improve systematically. I passed on my first attempt.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sofia Petrov',
      university: 'University of Hamburg',
      studienkolleg: 'Studienkolleg Hamburg',
      quote: 'Not only did I pass the Studienkolleg exam, but the university application support helped me get into my dream program. The team guided me through every step.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div 
          ref={contentRef}
          className={`transform transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-mono mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from students who achieved their dreams with our preparation program
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <Quote className="h-12 w-12 text-white/20" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <blockquote className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                    
                    <div>
                      <div className="text-xl font-bold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonials[currentIndex].studienkolleg}
                      </div>
                      <div className="text-white/70 text-sm">
                        Now studying at {testimonials[currentIndex].university}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
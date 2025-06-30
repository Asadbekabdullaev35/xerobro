import React from 'react';
import { solutions } from '../data/solutions';
import SolutionCard from './SolutionCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Solutions = () => {
  const [gridRef, gridVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="solutions" className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent font-mono">
            Lösningar
          </h2>
        </div>

        {/* Solutions grid */}
        <div 
          ref={gridRef}
          className={`relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transform transition-all duration-1000 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-500 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <SolutionCard solution={solution} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
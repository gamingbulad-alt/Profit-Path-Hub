import React from 'react';
import { CATEGORIES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-24 bg-dark-950 relative">
       {/* Decorative Gradient */}
       <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-900/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-2">Explore Topics</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Master Every Aspect</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Choose your path. We have curated resources for every stage of your digital entrepreneurship journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.id}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-800/50 hover:border-brand-600/50 transition-all duration-300 ease-out overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-6 w-6 text-brand-500" />
                </div>
                
                <div className="h-14 w-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 transition-colors duration-300 shadow-lg">
                  <Icon className="h-7 w-7 text-brand-500 group-hover:text-white transition-colors" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                  {category.title}
                </h4>
                
                <p className="text-zinc-400 leading-relaxed">
                  {category.description}
                </p>

                {/* Bottom line decoration */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-600 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
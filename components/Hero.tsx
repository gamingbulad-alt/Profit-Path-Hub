import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-brand-600/20 rounded-full mix-blend-screen filter blur-[128px] opacity-50"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-brand-800/20 rounded-full mix-blend-screen filter blur-[128px] opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl">
          Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Online Earning</span> Potential
        </h1>
        
        <p className="mt-4 text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The ultimate resource for digital entrepreneurs. Master the art of passive income, SEO, and content creation with our expert-led guides and community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-[0_0_20px_-5px_rgba(217,119,6,0.5)] hover:shadow-[0_0_25px_-5px_rgba(217,119,6,0.6)] transform hover:-translate-y-1">
            Start Learning
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </button>
          
          <button className="inline-flex items-center justify-center px-8 py-4 border border-zinc-700 text-base font-bold rounded-xl text-zinc-300 bg-zinc-900/50 hover:bg-zinc-800 hover:text-white transition-all backdrop-blur-sm">
            <PlayCircle className="mr-2 -ml-1 h-5 w-5 text-brand-500" />
            Watch Success Stories
          </button>
        </div>

        {/* Stats Preview */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800 pt-10 w-full max-w-4xl">
          {[
            { label: 'Active Students', value: '15k+' },
            { label: 'Video Lessons', value: '200+' },
            { label: 'Community Members', value: '50k+' },
            { label: 'Success Rate', value: '94%' },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
              <span className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
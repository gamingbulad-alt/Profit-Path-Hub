import React from 'react';
import { STATS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-900/20 rounded-full mix-blend-screen filter blur-[96px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-800/30 rounded-full mix-blend-screen filter blur-[96px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-2">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Empowering Your Digital Journey</h3>
            </div>
            
            <p className="text-lg text-zinc-300 leading-relaxed">
              At <span className="text-brand-500 font-semibold">Profit Path Hub</span>, we believe financial freedom should be accessible to everyone. Our mission is to demystify the complex world of online monetization and provide clear, actionable pathways to success.
            </p>
            
            <p className="text-zinc-400 leading-relaxed">
              Whether you're looking to start a side hustle, scale a YouTube channel, or master affiliate marketing, our expert-led community provides the tools, strategies, and support you need to thrive in the digital economy.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "Expert-led video courses and tutorials",
                "Weekly market analysis and trend reports",
                "Active community of 50,000+ entrepreneurs"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-brand-600 mr-3 flex-shrink-0" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 bg-white text-black hover:bg-zinc-200 font-bold rounded-lg transition-colors">
              Join Our Mission
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" className="text-brand-500">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                    </svg>
                </div>
                <div className="relative z-10">
                    <h4 className="text-5xl font-extrabold text-white mb-2">$10M+</h4>
                    <p className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">Community Earnings Generated</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-brand-600/30 transition-colors">
                        <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                        <p className="text-brand-500 font-medium mb-1">{stat.label}</p>
                        <p className="text-xs text-zinc-500">{stat.description}</p>
                    </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
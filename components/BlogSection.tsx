import React from 'react';
import { Clock, User } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-brand-500 font-semibold tracking-wide uppercase text-sm mb-2">Latest Insights</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Proven Strategies & Guides</h3>
          </div>
          <button className="text-zinc-400 hover:text-white font-medium flex items-center gap-2 group transition-colors">
            View All Articles
            <span className="block w-4 h-0.5 bg-brand-600 group-hover:w-8 transition-all"></span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="flex flex-col bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group shadow-lg hover:shadow-xl hover:shadow-black/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">{post.category}</span>
                </div>
              </div>
              
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                  <span className="flex items-center gap-1">
                     <User className="h-3 w-3" /> {post.author}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                  <span>{post.date}</span>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-brand-500 transition-colors">
                  {post.title}
                </h4>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-900 mt-auto">
                  <div className="flex items-center text-xs text-zinc-500 font-medium">
                    <Clock className="h-3.5 w-3.5 mr-1.5" />
                    {post.readTime}
                  </div>
                  <button className="text-sm font-semibold text-brand-600 hover:text-brand-500 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
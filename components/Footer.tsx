import React from 'react';
import { Facebook, Youtube, Mail, MapPin, Phone, TrendingUp } from 'lucide-react';
import { NAV_LINKS, CATEGORIES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
             <div className="flex items-center gap-2 mb-6">
                <div className="bg-gradient-to-br from-brand-500 to-brand-700 p-1.5 rounded-md">
                    <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">Profit Path <span className="text-brand-600">Hub</span></span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Your trusted partner in navigating the digital economy. We provide the strategies, tools, and community you need to build wealth online.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {/* YouTube - Subscribe */}
              <a 
                href="https://youtube.com/channel/UCatLp7-fIvWhOIesNTHoteg" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube"
                className="text-zinc-400 hover:text-[#FF0000] transition-colors transform hover:-translate-y-1"
              >
                <Youtube className="h-5 w-5" />
              </a>

              {/* Pinterest - Follow */}
              <a 
                href="https://pin.it/3gySSF0WF" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow on Pinterest"
                className="text-zinc-400 hover:text-[#E60023] transition-colors transform hover:-translate-y-1"
              >
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.742-4.869-4.185 0-6.639 3.14-6.639 6.388 0 1.264.487 2.616 1.092 3.327.121.144.137.272.102.427-.11.446-.356 1.442-.405 1.643-.061.265-.213.321-.491.194-1.829-.853-2.981-3.53-2.981-5.679 0-4.634 3.363-8.89 9.695-8.89 5.087 0 9.043 3.633 9.043 8.484 0 5.06-3.187 9.143-7.617 9.143-1.487 0-2.887-.775-3.368-1.686L9.635 20.8s-1.074 4.098-1.272 4.88c-.378 1.465-1.042 3.284-1.534 4.391 1.611.492 3.32.756 5.093.756 6.639 0 12.017-5.377 12.017-12.017C24.034 5.367 18.657 0 12.017 0z"/>
                </svg>
              </a>

              {/* Facebook - Follow */}
              <a 
                href="https://facebook.com/share/16vDH4zDAK" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow on Facebook"
                className="text-zinc-400 hover:text-[#1877F2] transition-colors transform hover:-translate-y-1"
              >
                <Facebook className="h-5 w-5" />
              </a>

              {/* Twitter/X - Follow */}
              <a 
                href="https://x.com/profitpathhub" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow on X"
                className="text-zinc-400 hover:text-white transition-colors transform hover:-translate-y-1"
              >
                 <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 mt-0.5" xmlns="http://www.w3.org/2000/svg">
                   <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                 </svg>
              </a>

              {/* Telegram - Join */}
              <a 
                href="https://t.me/COcmD3OfWO44YjNl" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Join Telegram"
                className="text-zinc-400 hover:text-[#229ED9] transition-colors transform hover:-translate-y-1"
              >
                 <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg">
                   <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                 </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-zinc-500 hover:text-brand-500 text-sm transition-colors hover:pl-2 block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-6">Top Categories</h4>
            <ul className="space-y-3">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <a href="#categories" className="text-zinc-500 hover:text-brand-500 text-sm transition-colors hover:pl-2 block">
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-500 text-sm">123 Digital Ave, Tech District,<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-600 flex-shrink-0" />
                <span className="text-zinc-500 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-600 flex-shrink-0" />
                <span className="text-zinc-500 text-sm">support@profitpathhub.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Profit Path Hub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import type { NavLink, SocialLink } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800/30 border-t border-neutral-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Tamgale Rahul</h3>
            <p className="text-sm text-neutral-400 max-w-xs">A full-stack developer focused on building beautiful and functional web applications.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link: NavLink) => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-400 hover:text-white transition-colors text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link: SocialLink) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 flex items-center justify-center bg-neutral-700/50 rounded-full text-neutral-400 transition-all hover:text-white hover:bg-neutral-600"
                  aria-label={`View my ${link.name} profile`}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-700 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Tamgale Rahul. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
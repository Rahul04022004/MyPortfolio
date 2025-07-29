
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import type { NavLink, SocialLink } from '../types';
import { HamburgerIcon } from './Icons';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header className={`sticky top-0 z-40 transition-all duration-500 ${isScrolled ? 'opacity-100 pointer-events-auto bg-[#111111]/80 backdrop-blur-sm shadow-md' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            {/* Spacer for centering desktop nav */}
            <div className="flex-1"></div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link: NavLink) => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-neutral-300 transition-colors hover:text-white">
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* Socials (Desktop) & Hamburger (Mobile) */}
            <div className="flex-1 flex justify-end">
              <div className="hidden md:flex items-center space-x-4">
                  {SOCIAL_LINKS.map((link: SocialLink) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-neutral-400 transition-colors hover:text-white" aria-label={`View my ${link.name} profile`}>
                      <link.icon className="w-5 h-5" />
                  </a>
                  ))}
              </div>
              <div className="md:hidden">
                 <button 
                  onClick={() => setIsMenuOpen(true)} 
                  className="text-neutral-300 hover:text-white"
                  aria-label="Open menu"
                >
                  <HamburgerIcon className="w-6 h-6"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
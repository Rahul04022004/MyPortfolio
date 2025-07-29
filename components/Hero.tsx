
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GREETINGS, TYPING_TITLES } from '../constants';
import { ArrowRightIcon, TerminalIcon } from './Icons';
import Terminal from './Terminal';
import profileimg from './images/profileimg.jpg'

const BlinkingCursor: React.FC = () => (
    <span className="w-1 h-8 bg-white/80 inline-block align-middle ml-2" style={{ animation: 'blink 1s step-end infinite' }}></span>
);

const Hero: React.FC = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  
  // Typing animation for roles
  const [currentTitle, setCurrentTitle] = useState('');
  const titleIndex = useRef(0);
  const isDeleting = useRef(false);
  const typingTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const greetingTimer = setInterval(() => {
      setGreetingIndex(prevIndex => (prevIndex + 1) % GREETINGS.length);
    }, 3000);

    return () => clearInterval(greetingTimer);
  }, []);

  const handleTyping = useCallback(() => {
    const fullTitle = TYPING_TITLES[titleIndex.current];
    
    let nextTitle;
    if (isDeleting.current) {
      nextTitle = fullTitle.substring(0, currentTitle.length - 1);
    } else {
      nextTitle = fullTitle.substring(0, currentTitle.length + 1);
    }
    setCurrentTitle(nextTitle);

    let typingSpeed = isDeleting.current ? 75 : 150;

    if (typingTimeoutRef.current) {
        window.clearTimeout(typingTimeoutRef.current);
    }

    if (!isDeleting.current && nextTitle === fullTitle) {
      typingTimeoutRef.current = window.setTimeout(() => {
        isDeleting.current = true;
        handleTyping();
      }, 2000);
    } else if (isDeleting.current && nextTitle === '') {
      isDeleting.current = false;
      titleIndex.current = (titleIndex.current + 1) % TYPING_TITLES.length;
      typingTimeoutRef.current = window.setTimeout(handleTyping, 500);
    } else {
      typingTimeoutRef.current = window.setTimeout(handleTyping, typingSpeed);
    }
  }, [currentTitle.length]);

  useEffect(() => {
    typingTimeoutRef.current = window.setTimeout(handleTyping, 250);
    return () => {
        if (typingTimeoutRef.current) {
            window.clearTimeout(typingTimeoutRef.current);
        }
    }
  }, [handleTyping]);
  
  const longestGreeting = GREETINGS.reduce((a, b) => a.length > b.length ? a : b);

  const handleViewWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="relative py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-80px)] lg:mx-[10%] overflow-hidden">
        
        <div className="text-center md:text-left z-10 flex flex-col items-center md:items-start">
          <div className="mb-8 w-full">
            <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-2">
              <div className="relative inline-block align-bottom h-[1.2em]">
                  <span className="opacity-0 pointer-events-none whitespace-nowrap">
                      {longestGreeting}
                  </span>
                  {GREETINGS.map((greeting, index) => (
                      <span
                          key={greeting}
                          className={`absolute top-0 left-0 transition-opacity duration-700 ${greetingIndex === index ? 'opacity-100' : 'opacity-0'}`}
                      >
                          {greeting}
                      </span>
                  ))}
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              I'm Tamgale Rahul
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-300 h-10">
              <span>I'm a {currentTitle}</span>
              <BlinkingCursor />
            </h2>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                  href="#projects"
                  onClick={handleViewWorkClick}
                  className="group font-bold px-6 py-3 rounded-md inline-flex items-center gap-2 text-black bg-white transition-all duration-300"
                  aria-label="View My Work"
              >
                  View My Work
                  <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"/>
              </a>
              <button
                  onClick={() => setIsTerminalOpen(true)}
                  className="group font-bold p-3 rounded-md inline-flex items-center justify-center text-white bg-neutral-800/60 border border-neutral-700 hover:bg-neutral-700/80 transition-all duration-300"
                  aria-label="Open interactive terminal"
              >
                  <TerminalIcon className="w-6 h-6"/>
              </button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-0 flex justify-center z-10">
          <div className="relative">
            <img src={profileimg} alt="Developer Illustration" className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover z-10 relative" />
            <div className="absolute bottom-4 right-0 bg-neutral-800/80 border border-neutral-700 text-white text-xs px-3 py-1.5 rounded-full z-20 shadow-lg backdrop-blur-sm">
              :)
            </div>
          </div>
        </div>
      </section>

      {isTerminalOpen && (
          <div 
              className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm p-4" 
              onClick={() => setIsTerminalOpen(false)}
              aria-modal="true"
              role="dialog"
          >
              <div onClick={(e) => e.stopPropagation()} className="w-full max-w-5xl">
                  <Terminal onClose={() => setIsTerminalOpen(false)} />
              </div>
          </div>
      )}
      <style>{`
        @keyframes blink {
          from, to { opacity: 1 }
          50% { opacity: 0 }
        }
      `}</style>
    </>
  );
};

export default Hero;

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-transparent text-neutral-300 min-h-screen font-sans">
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
          <div className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center items-start p-1">
              <div className="w-1 h-2 bg-neutral-500 rounded-full" style={{ animation: 'scroll-down 2.5s ease-in-out infinite' }}></div>
          </div>
      </div>
    </div>
  );
};

export default App;
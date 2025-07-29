import React from 'react';
import { DownloadIcon } from './Icons';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-12">My Resume</h2>
      <div className="max-w-4xl mx-auto bg-neutral-800/40 border border-neutral-700 rounded-lg p-8 backdrop-blur-sm grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Resume Preview Image */}
        <div className="rounded-lg overflow-hidden border-2 border-neutral-700 shadow-lg">
          <img 
            src="/resume-preview.png"
            alt="Resume Preview" 
            className="w-full h-auto object-contain bg-white"
            loading="lazy"
          />
        </div>
        
        {/* Right Side: Download Button */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Know more?</h3>
          <p className="text-neutral-400 mb-8">
            Get the full picture. Download my complete resume to see all my skills, projects, and experiences in detail.
          </p>
          <a 
            href="/resume.txt"
            download="Tamgale_Rahul_Resume.txt"
            className="font-bold px-8 py-4 rounded-md inline-flex items-center gap-3 text-black bg-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-neutral-400"
          >
            <DownloadIcon className="w-6 h-6"/>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
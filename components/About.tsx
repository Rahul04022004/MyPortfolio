
import React from 'react';
import { ABOUT_TEXT, EDUCATION_HISTORY, STATS, ASTRONOMICAL_MANIFESTO_TITLE, ASTRONOMICAL_MANIFESTO } from '../constants';
import type { EducationItem, Stat } from '../types';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-16">About Me</h2>
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Who I Am section */}
        <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-neutral-300 leading-relaxed">{ABOUT_TEXT}</p>
        </div>

        {/* Manifesto and Education grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Manifesto Card */}
          <div className="bg-neutral-800/40 border border-neutral-700 p-6 rounded-lg backdrop-blur-sm h-full">
            <h3 className="text-2xl font-bold text-white mb-4">{ASTRONOMICAL_MANIFESTO_TITLE}</h3>
            <ul className="space-y-3">
                {ASTRONOMICAL_MANIFESTO.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-yellow-400 mr-3 mt-1 flex-shrink-0 font-bold text-lg">›</span>
                        <span className="text-neutral-300">{item}</span>
                    </li>
                ))}
            </ul>
          </div>

          {/* Education Card */}
          <div className="bg-neutral-800/40 border border-neutral-700 p-6 rounded-lg backdrop-blur-sm h-full">
            <h3 className="text-xl font-bold text-white mb-4">Education</h3>
            <div className="relative border-l-2 border-neutral-600 ml-2 space-y-8">
              {EDUCATION_HISTORY.map((item: EducationItem, index: number) => (
                <div key={index} className="pl-8 relative">
                  <div className="absolute -left-[9px] top-1 w-5 h-5 flex items-center justify-center bg-neutral-700 rounded-full">
                    <item.logo className="w-3 h-3 text-white" />
                  </div>
                  <h4 className="font-bold text-white">{item.institution}</h4>
                  <p className="text-sm text-neutral-300">{item.degree}</p>
                  <p className="text-xs text-neutral-500 mt-1">{item.duration}</p>
                  <p className="text-sm text-neutral-400 mt-2">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {STATS.map((stat: Stat) => (
              <div key={stat.label} className="bg-neutral-800/40 border border-neutral-700 p-4 rounded-lg text-center backdrop-blur-sm transition-transform hover:-translate-y-1">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-neutral-400" />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-neutral-400">{stat.label}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
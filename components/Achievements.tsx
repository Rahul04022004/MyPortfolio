
import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import type { Achievement } from '../types';
import { ExternalLinkIcon } from './Icons';

const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => {
  const isEnabled = achievement.link !== '#';

  const cardContent = (
    <>
      <div className="flex-shrink-0 text-neutral-400">
        <achievement.icon className="w-8 h-8"/>
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-white transition-colors">{achievement.name}</h4>
        <p className="text-sm text-neutral-400">{achievement.source}</p>
      </div>
      {isEnabled && (
          <div className="flex-shrink-0">
            <ExternalLinkIcon className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors"/>
          </div>
      )}
    </>
  );

  const baseClasses = "bg-neutral-800/40 border border-neutral-700 p-4 rounded-lg backdrop-blur-sm flex items-center space-x-4 group transition-all duration-300";

  if (isEnabled) {
    return (
      <a 
        href={achievement.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${baseClasses} hover:bg-neutral-700/50 hover:-translate-y-1`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={`${baseClasses} cursor-default`}>
        {cardContent}
    </div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Achievements & Certifications</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
        {ACHIEVEMENTS.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
import React, { useState, useEffect, useRef } from 'react';
import { SKILLS } from '../constants';
import type { SkillCategory, Skill } from '../types';

const SkillBar: React.FC<{ skill: Skill; isVisible: boolean }> = ({ skill, isVisible }) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-neutral-300">{skill.name}</span>
            <span className="text-sm font-medium text-neutral-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-neutral-600 rounded-full h-2.5">
            <div 
                className="bg-neutral-200 h-2.5 rounded-full" 
                style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transition: 'width 1.2s ease-in-out'
                }}
            ></div>
        </div>
    </div>
);

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
        observer.observe(currentRef);
    }

    return () => {
        if (currentRef) {
            observer.unobserve(currentRef);
        }
    };
  }, []);

  return (
    <section id="skills" className="py-20" ref={skillsRef}>
      <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((category: SkillCategory, catIndex: number) => (
          <div key={category.name} className="bg-neutral-800/40 border border-neutral-700 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-2">
            <div className="flex items-center mb-4">
                <category.icon className="w-6 h-6 text-neutral-400 mr-3" />
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
            </div>
            <div>
                {category.skills.map((skill: Skill, skillIndex: number) => (
                    <SkillBar 
                        key={skill.name} 
                        skill={skill} 
                        isVisible={isVisible} 
                    />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
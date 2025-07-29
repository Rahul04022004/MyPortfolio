import React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  details: string;
  logo: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Stat {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    value: string;
    label: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  codeLink: string;
  liveLink: string;
}

export interface SkillCategory {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface ContactInfo {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    value: string;
    href: string;
}

export interface Achievement {
  name: string;
  source: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
}
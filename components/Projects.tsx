
import React from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { CodeIcon, ExternalLinkIcon } from './Icons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const renderLink = (href: string, text: string, Icon: React.FC) => {
    const isEnabled = href !== '#';
    const classes = isEnabled 
      ? 'text-neutral-300 hover:text-white font-medium text-sm flex items-center gap-2 transition-colors'
      : 'text-neutral-500 font-medium text-sm flex items-center gap-2 cursor-not-allowed';
    
    const content = (
      <>
        <Icon /> {text}
      </>
    );

    if (isEnabled) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    
    return <span className={classes}>{content}</span>;
  };

  return (
    <div className="bg-neutral-800/40 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-800/50 hover:-translate-y-2 backdrop-blur-sm border border-neutral-700">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-48 object-cover bg-neutral-700" 
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-neutral-400 text-sm mb-4 h-16">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-neutral-700/50 text-neutral-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex items-center space-x-4 mt-4">
          {renderLink(project.codeLink, 'Code', CodeIcon)}
          {renderLink(project.liveLink, 'Live', ExternalLinkIcon)}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
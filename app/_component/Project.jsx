import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  { id: 1, title: 'Sadda Cafe', image: '/icons/project1.png',github:"https://iamsajju.github.io/saddacafe.github.io/" },
  {id:2,title:'Online Examination Portal',image:'/icons/project3.png',github:"https://imsajju.github.io/OnlineExamPortal/default.html"},
  { id: 3, title: 'SnappingFood', image: '/icons/project4.png',github:"https://imsajju.github.io/SnappingFood/" },
  
  // { id: 3, title: 'Project 3', image: '/icons/git-icon.png' },
  // Add more project objects as needed
]
  const Project = () => {
  return (
    <div id='projects' className="container mx-auto px-4 py-8">
      <h2 className="text-6xl font-serif text-gray-200 text-center">Projects</h2>
      <div className="grid sm:grid-cols-1 md:flex md:justify-center md:gap-28 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} title={project.title} image={project.image} link={project.github} />
        ))}
      </div>
    </div>
  );
};

export default Project;

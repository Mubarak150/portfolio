import React from 'react';
import Project, {projects} from './Project';
import { useInView } from 'react-hook-inview'

const ProjectsContainer = () => {
    const [projectsRef,  projectsIsVisible ] = useInView ({
        threshold: 0.3
    });

    return (
        <div ref={projectsRef} className={`projects ${projectsIsVisible ? 'fade' : ''} flex flex-col lg:w-3/5 shadow-md my-12 lg:my-0`}>
            <div className="flex justify-center items-center">
                <svg className="h-4 inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="none" stroke="#47484b" stroke-width="2" d="M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z"></path> </g></svg>
                <h4 className='px-4 text-primary font-semibold text-lg text-center lg:text-left'>Projects</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 justify-flex-end gap-4 p-4">
                {projects.map(project => (
                <Project
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                />
                ))}
            </div>
        </div>
      
    );
  };
  
  export default ProjectsContainer;
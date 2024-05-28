import React from 'react';
import { useParams } from 'react-router-dom';
import {projects} from "../components/Project"
import Footer from '../components/Footer';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(project => project.id === parseInt(id));
  
    if (!project) {
      return <div>Project not found</div>;
    }
  
    return (
      <div className="p-4 flex flex-col relative h-[84vh]">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <div className="md:flex md:gap-7 text-justify">
            <img src={project.imageUrl.substring(1, project.imageUrl.length)} alt={project.title + "-landing-page"} className="w-full md:w-1/2 object-cover mt-4" />
            <div className="md:flex md:flex-col md:justify-end ">
                <p className="mt-4 text-primary text-lg font-teachers">{project.description}</p>
                <p className="mt-8 text-primary font-teachers">Visit the <span className="underline hover:font-semibold cursor-pointer"><a href={project.gitLink} className="">Git Hub Repository</a></span> to learn more about it.</p>
            </div>
        </div>
        <div className="absolute bottom-0 w-[97vw] m-0 p-0">
           <Footer /> 
        </div>
        
      </div>
    );
  };
  
  export default ProjectDetails;
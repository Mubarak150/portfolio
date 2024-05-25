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
      <div className="p-4">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover mt-4" />
        <p className="mt-4 text-primary font-teachers">{project.description}</p>
        <p className="mt-8 text-primary font-teachers">Visit the <span className="underline hover:font-semibold cursor-pointer"><a href={project.gitLink} className="">Git Hub Repository</a></span> to learn more about it.</p>
        <Footer />
      </div>
    );
  };
  
  export default ProjectDetails;
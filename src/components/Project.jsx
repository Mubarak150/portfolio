// Project.js
import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ id, title, description, imageUrl }) => {
  return (
    <div className="relative bg-cover bg-center h-64 shadow-md" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-primary opacity-30"></div>
      <div className="relative z-10  h-full flex flex-col justify-end">
      <div className="backdrop-blur-xs p-4 rounded" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)' }}>
          <h4 className="text-wheat text-xl font-bold">{title}</h4>
          <p className="text-wheat text-justify">
            {description.length > 60 ? `${description.substring(0, 57)}...` : description}
          </p>
          <Link to={`/project/${id}`} className="text-white underline">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;



const projects = [
    { 
        id: 1,
        title: 'Portfolio', 
        description: 'This website is my portfolio, admiring the Minimalist design phenorama, made in React, while using Hooks, Routes, Dynamic Routes, PDF download functionality and many more. It can be an inspiration for you to make your own portfolio design upon.', 
        imageUrl: '../dist/assets/portfolio.png',
        gitLink: 'https://github.com/Mubarak150/portfolio/'
    },
    { 
        id: 2, 
        title: 'Keeper', 
        description: 'If you need an application that keeps your sticky notes reminders for you, Keeper is the one! Built with React and Custom CSS, this site helps you make notes and keep it for you whenever you want to look at. ', 
        imageUrl: '../dist/assets/keeper.jpg',
        gitLink: 'https://github.com/Mubarak150/keeper-web-app/'  
    },
    { 
        id: 3, 
        title: 'To Do List', 
        description: 'Like Keeper, this site is here to ease your mind. But instead of notes, you can add your list of items in bullet points, and may delete it with an easy click. Apart from that it lets the user to keep several lists concurrently while segregated by unique URLs, achieved via Node.js Routes. it keeps your notes stored permanently (untill you wanna delete it) with the help of MongoDB, a non-relational database.', 
        imageUrl: '../dist/assets/notes.png',
        gitLink: 'https://github.com/Mubarak150/todolist/' 
    },
    { 
        id: 4, 
        title: 'Daily Journal', 
        description: 'This is a simple site meant to be a home to your blogs in the digital world. made with the help of Custom CSS, Node.js, Express.js, and MongoDB this site contains all the basic necessities that a blogger might need.', 
        imageUrl: '../dist/assets/blogs.png',
        gitLink: 'https://github.com/Mubarak150/scarlet-frontend/' 
    },
    { 
        id: 5, 
        title: 'Scarlet Roofings', 
        description: 'This is a site made for one of our Fiverr Client, who works in Travels and Tourism. To this site, i contributed its laptop front-end with the help of React.js.', 
        imageUrl: '../dist/assets/scarlet-roofing.png',
        gitLink: 'https://github.com/Mubarak150/scarlet-frontend/'   
    },
    { 
        id: 6, 
        title: 'Simon Web',
        description: 'Simon Game was a craze of people who lived in 90s. This website replicates the said once-super-hit digital game. It was made possible with the Help of Custom CSS, JQuery, and HTML. You can clone the repo and enjoy the nostalgia that hides beneath!', 
        imageUrl: '../dist/assets/simon.png',
        gitLink: 'https://github.com/Mubarak150/simon-jQuery-brahma/'
    },
  ];

export {projects}
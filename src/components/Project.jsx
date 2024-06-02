// Project.js
import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ id, title, description, imageUrl }) => {
  return (
    <div className="wrapper h-[400px] md:h-[300px] md:w-auto">
      <div className="card front-face">
          <img src={imageUrl} />
          <div className="flex flex-col justify-center items-center h-[30%]">
            <h3 className='text-primary font-teachers text-2xl '>{title}</h3>
          </div>
      </div>
      <div className="card back-face bg-primary text-wheat text-center p-4 md:p-8 py-12">
          <div className="info">
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="text-justify p-4">{description.length > 150 ? `${description.substring(0, 149)} ...` : description}</p>
              <Link to={`/project/${id}`} className=" transition-opacity duration-1000 text-white underline">
                See details
              </Link>
          </div>
      </div>
    </div>
  )
};

export default Project;



const projects = [
    { 
        id: 1,
        title: 'Portfolio', 
        description: 'This website is my portfolio, admiring the Minimalist design, made in React, while using Hooks, Routes, Dynamic Routes, PDF download functionality and many more. It can be an inspiration for you to make your own portfolio design upon.', 
        imageUrl: './portfolio.png',
        gitLink: 'https://github.com/Mubarak150/portfolio/'
    },
    { 
        id: 2, 
        title: 'Keeper', 
        description: 'If you need an application that keeps your sticky notes reminders for you, Keeper is the one! Built with React and Custom CSS, this site helps you make notes and keep it for you whenever you want to look at. ', 
        imageUrl: './keeper.jpg',
        gitLink: 'https://github.com/Mubarak150/keeper-web-app/'  
    },
    { 
        id: 3, 
        title: 'To Do List', 
        description: 'Like Keeper, this site is here to ease your mind. But instead of notes, you can add your list of items in bullet points, and may delete it with an easy click. Apart from that it lets the user to keep several lists concurrently while segregated by unique URLs, achieved via Node.js Routes. it keeps your notes stored permanently (untill you wanna delete it) with the help of MongoDB, a non-relational database.', 
        imageUrl: './notes.png',
        gitLink: 'https://github.com/Mubarak150/todolist/' 
    },
    { 
        id: 4, 
        title: 'Daily Journal', 
        description: 'This is a simple site meant to be a home to your blogs in the digital world. made with the help of Custom CSS, Node.js, Express.js, and MongoDB this site contains all the basic necessities that a blogger might need.', 
        imageUrl: './blogs.png',
        gitLink: 'https://github.com/Mubarak150/scarlet-frontend/' 
    },
    { 
        id: 5, 
        title: 'Scarlet Roofings', 
        description: 'This is a site made for one of our Fiverr Client, who works in Travels and Tourism. To this site, i contributed its laptop front-end with the help of React.js.', 
        imageUrl: './scarlet-roofing.png',
        gitLink: 'https://github.com/Mubarak150/scarlet-frontend/'   
    },
    { 
        id: 6, 
        title: 'Simon Web',
        description: 'Simon Game was a craze of people who lived in 90s. This website replicates the said once-super-hit digital game. It was made possible with the Help of Custom CSS, JQuery, and HTML. You can clone the repo and enjoy the nostalgia that hides beneath!', 
        imageUrl: './simon.png',
        gitLink: 'https://github.com/Mubarak150/simon-jQuery-brahma/'
    },
  ];

export {projects}
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import ProjectDetails from './routes/ProjectDetails'; 
import Contact from './routes/Contact';
import About from './routes/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        
      </div>
      
    </Router>
  );
}

export default App;

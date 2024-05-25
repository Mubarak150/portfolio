import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure this path is correct
import Home from './routes/Home';
import ProjectDetails from './routes/ProjectDetails'; // Ensure this path is correct
import Footer from './components/Footer'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        
      </div>
      
    </Router>
  );
}

export default App;

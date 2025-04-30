import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import { Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './routes/Home.jsx';
import Projects from './routes/Projects.jsx';
import Skills from './routes/Skills.jsx';
import Contact from './routes/Contact.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';
import { Routes, Route } from 'react-router-dom';

// Componentes básicos
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './routes/Home.jsx';

const projects = [
  { name: "Carton Aleatorio", url: "https://github.com/tu-usuario/Carton_Aleatorio" },
  { name: "Punch-Out", url: "https://github.com/tu-usuario/punch-out" },
  { name: "Angry Birds", url: "https://github.com/StoryChara/Angry-Birds" }
];

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="App-container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    <Footer />
  </div>
  );
}

export default App;

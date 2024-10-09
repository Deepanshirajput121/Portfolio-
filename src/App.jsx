import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css'; // Ensure this is included in your index.js or App.js



const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Set the default route to Home */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Optional: Keep /home for backward compatibility */}
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );
};

export default App;

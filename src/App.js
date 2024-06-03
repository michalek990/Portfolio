import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Hero />
        <About />
        <Experience />
      <Contact />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Hero />
        <About />
      <Contact />
    </div>
  );
}

export default App;

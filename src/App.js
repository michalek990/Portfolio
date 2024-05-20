import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import {About} from "./components/About/About";
import {Hero} from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Hero />
        <About />
    </div>
  );
}

export default App;

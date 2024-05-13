import React from "react";
import './Navbar.css'

function Navbar() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };


      return(
        <nav className="navbar">
        <ul className="nav-links">
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('services')}>Services</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>
      );
};

export default Navbar;
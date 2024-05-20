import React from 'react';
import styles from './Projects.module.css'

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Project 1</h3>
          <p>Details about project 1.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Details about project 2.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
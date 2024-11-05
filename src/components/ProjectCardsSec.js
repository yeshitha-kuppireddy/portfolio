// src/components/ProjCardsSec.js
import React from 'react';
import ProjCard from './ProjCard';
import './styles.css';
import Projects from './projects.js';


const ProjCardsSec = () => (
  <section className="project-cards-section">
    {Projects.map((project) => (
      <ProjCard key={project.id} image={project.image} title={project.title} link={project.link} />
    ))}
  </section>
);

export default ProjCardsSec;



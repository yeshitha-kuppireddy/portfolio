// src/components/ProjectLayout.js
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './styles.css'; // Make sure to include your styles

const ProjectLayout = ({ children }) => (
  <>
    <Header />
    <div className="project-layout">
      {children}
    </div>
    <Footer/>
  </>
);

export default ProjectLayout;

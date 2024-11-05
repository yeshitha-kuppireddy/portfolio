// src/components/ProjCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const ProjCard = ({ image, title, link }) => (
  <div className="proj-card">
    <Link to={link} style={{ textDecoration: "none" }}>
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h5 className="project-title">{title}</h5>
        <Link to={link} className="learn-more">Learn More</Link>
      </div>
    </Link>
  </div>
);

export default ProjCard;

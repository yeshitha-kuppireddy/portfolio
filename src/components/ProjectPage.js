// src/components/ProjectPage.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './styles.css';

const ProjectPage = ({ title, description, image, extraImages = [], github }) => {
  return (
    <div className="project-page">
      <img src={image} alt={title} className="project-image" />
      <h1 className="project-title">{title}</h1>
      <div className="project-description">
        <p>{description.intro}</p>
        <h3>Key Features:</h3>
        <ul>
          {description.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        {github && (
          <div className="github-link"> {/* Container for alignment */}
          <a href={github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: '10px' }} />
          </a>
          </div>
        )}
      </div>
      {extraImages.length > 0 && ( // Only render this div if there are extra images
        <div className="extra-images">
          {extraImages.map((extraImage, index) => (
            <img key={index} src={extraImage} alt={`Extra for ${title}`} className="extra-image" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectPage;

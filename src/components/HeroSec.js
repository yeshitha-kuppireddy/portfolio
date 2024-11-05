import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './styles.css';
import background from '../assets/frontPage.png';
//import MineLayout from './MineLayout'; // Import MineLayout component

const HeroSec = ({ customContent }) => (
  <div
    className="hero-section"
    style={{ backgroundImage: `url(${background})` }}
  > {/* Render MineLayout behind hero-content */}
    <div className="hero-content">
      <h2>{customContent || "Hi, I'm Yeshitha!"}</h2>
      <div className="hero-links">
        <a
          href="https://github.com/yeshitha-kuppireddy"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/yeshitha-k-28306a298"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
      </div>
    </div>
  </div>
);

export default HeroSec;

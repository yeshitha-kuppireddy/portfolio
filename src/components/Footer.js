// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Adjust according to your icon choice
import './styles.css';

const Footer = () => (
  <footer className="footer">
    <h4 style={{ color: 'bisque' }}>
      Let's connect 👋
    </h4>
    <div className="footer-links">
      <a href="mailto:yashita.kuppireddy@gmail.com" className="footer-link" aria-label="Email">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://www.instagram.com/yeshitha.k" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </footer>
);

export default Footer;

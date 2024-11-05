import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const Header = () => (
  <header className="header">
    <h1 className="header-title">Yeshitha Kuppireddy</h1>
    <nav className="header-nav">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'header-link active' : 'header-link')}
      >
        Work
      </NavLink>
      <NavLink
        to="/my-story"
        className={({ isActive }) => (isActive ? 'header-link active' : 'header-link')}
      >
        My Story
      </NavLink>
      <NavLink
        to="https://docs.google.com/document/d/1fpnbQzOo2pKVgRsBWjp2G9EvnMh6lLIUcnCWRDThRtI/edit?usp=sharing"
        className={({ isActive }) => (isActive ? 'header-link active' : 'header-link')}
      >
        Resume
      </NavLink>
    </nav>
  </header>
);

export default Header;





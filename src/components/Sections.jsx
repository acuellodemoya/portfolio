import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sections.css';

const Sections = () => {
  return (
    <div className="sections">
      <Link to={`/#about`} className="nav-link">
        Conocimientos
      </Link>
      <Link to={`/#projects`} className="nav-link">
        Proyectos
      </Link>
    </div>
  );
};

export default Sections;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sections.css';

const Sections = () => {
  return (
    <div className="sections">
      <Link to={`${process.env.PUBLIC_URL}/about`} className="nav-link">
        Conocimientos
      </Link>
      <Link to={`${process.env.PUBLIC_URL}/projects`} className="nav-link">
        Proyectos
      </Link>
    </div>
  );
};

export default Sections;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sections.css';

const Sections = () => {
  return (
    <div className="sections">
      <Link to={'/about'}>Sobre Mi</Link>
      <Link to={'/projects'}>Proyectos</Link>
    </div>
  );
};

export default Sections;

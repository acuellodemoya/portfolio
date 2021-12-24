import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from './NavButton';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="name">
        <h1>Alejandro Cuello De Moya</h1>
      </Link>
      <NavButton></NavButton>
    </header>
  );
};

export default Header;

import React from 'react';
import NavButton from './NavButton';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Alejandro Cuello De Moya</h1>
      <NavButton></NavButton>
    </header>
  );
};

export default Header;

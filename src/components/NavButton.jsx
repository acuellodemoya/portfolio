import React, { useState } from 'react';
import menuLogo from '../logos/menu-logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import '../styles/MenuButton.css';

import Sections from './Sections';

const NavButton = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };

  return (
    <div>
      <div>
        <GiHamburgerMenu className="menu-logo" onClick={handleClick} />
      </div>
      {menu ? <Sections /> : null}
    </div>
  );
};

export default NavButton;

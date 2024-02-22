import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import Logo from '../Logo';
import ThemeToggle from './ThemeToggle';

const NavContent = () => {
  const isMobile = useMediaQuery('sm', 'down');

  return (
    <div className="nav__content">
      {!isMobile && <Logo />}

      <div className="nav__menu">
        Nav items go here
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavContent;

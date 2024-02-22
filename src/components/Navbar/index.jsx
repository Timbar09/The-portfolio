import { useState } from 'react';

import Logo from '../Logo';
import ThemeToggle from './ThemeToggle';
import MenuToggleButton from './MenuToggleButton';

import '../../assets/scss/components/Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav ${isMenuOpen ? 'open' : 'closed'}`}>
      <div className="container px-2 flex flex-jc-sb flex-ai-c">
        <MenuToggleButton handleClick={handleToggleMenu} />
        <Logo />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

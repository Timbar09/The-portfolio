import { useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import MenuHeader from './MenuHeader';
import Logo from '../Logo';
import ThemeToggle from './ThemeToggle';
import NavContent from './NavContent';

import '../../assets/scss/components/Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery('sm', 'down');

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav ${isMenuOpen ? 'open' : 'closed'}`}>
      <div className="container px-2 flex-jc-sb flex-ai-c">
        {isMobile && (
          <MenuHeader
            isMenuOpen={isMenuOpen}
            handleToggleMenu={handleToggleMenu}
          />
        )}

        <NavContent />
      </div>
    </nav>
  );
};

export default Navbar;

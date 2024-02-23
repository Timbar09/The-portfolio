import PropTypes from 'prop-types';

import { useMediaQuery } from '../../hooks/useMediaQuery';

import MenuHeader from './MenuHeader';
import NavContent from './NavContent';

import '../../assets/scss/components/Navbar.scss';

const Navbar = ({ isMenuOpen, handleToggleMenu }) => {
  const isMobile = useMediaQuery('sm', 'down');

  return (
    <nav className={`nav ${isMobile && (isMenuOpen ? 'open' : 'closed')}`}>
      <div className="container flex-jc-sb flex-ai-c px-2">
        {isMobile && (
          <MenuHeader
            isMenuOpen={isMenuOpen}
            handleToggleMenu={handleToggleMenu}
          />
        )}

        <NavContent isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  handleToggleMenu: PropTypes.func.isRequired,
};

export default Navbar;

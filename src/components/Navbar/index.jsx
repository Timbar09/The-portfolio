import ThemeToggle from './ThemeToggle';

import '../../assets/scss/components/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container px-2">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

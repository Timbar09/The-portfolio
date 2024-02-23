import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import Logo from '../Logo';
import ThemeToggle from './ThemeToggle';

const menuItems = [
  {
    title: 'Home',
    link: '#home',
  },
  {
    title: 'Projects',
    link: '#projects',
  },
  {
    title: 'About',
    link: '#about',
  },
  {
    title: 'Abilities',
    link: '#abilities',
  },
  {
    title: 'Contact',
    link: '#contact',
  },
];

const NavContent = ({ isMenuOpen }) => {
  const isMobile = useMediaQuery('sm', 'down');

  const navContentVariants = {
    open: { opacity: 1, visibility: 'visible' },
    closed: {
      opacity: 0,
      transitionEnd: { visibility: 'hidden' },
    },
  };

  return (
    <motion.div
      initial="closed"
      animate={isMenuOpen ? 'open' : 'closed'}
      variants={navContentVariants}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
    >
      <div className="nav__content py-2">
        {!isMobile && <Logo />}

        <ul className="nav__menu">
          {menuItems.map((item, index) => (
            <li key={index} className="nav__menu-item">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}

          <li className="py-1">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default NavContent;

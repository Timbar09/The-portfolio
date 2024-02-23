import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import Logo from '../Logo';
import ThemeToggle from './ThemeToggle';

let menuItems = [
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

  const animationProps = isMobile
    ? {
        initial: 'closed',
        animate: isMenuOpen ? 'open' : 'closed',
        variants: navContentVariants,
        transition: { duration: 0.5, ease: 'easeInOut', delay: 0.2 },
      }
    : {};

  useEffect(() => {
    if (isMobile) {
      return;
    }

    menuItems = menuItems.filter((item) => item.title !== 'Contact');

    return () => {
      menuItems = [
        ...menuItems,
        {
          title: 'Contact',
          link: '#contact',
        },
      ];
    };
  }, [isMobile]);

  return (
    <motion.div
      {...animationProps}
      className="nav__content flex-ai-c flex-jc-sb gap-1"
    >
      {!isMobile && (
        <div className="nav__content--logo grid grid-pi-c">
          <Logo />
        </div>
      )}

      <ul className="nav__menu flex-ai-c gap-1">
        {menuItems.map((item, index) => (
          <li key={index} className="nav__menu-item">
            <a href={item.link}>{item.title}</a>
          </li>
        ))}

        <li className="py-1">
          <ThemeToggle />
        </li>
      </ul>
    </motion.div>
  );
};

export default NavContent;

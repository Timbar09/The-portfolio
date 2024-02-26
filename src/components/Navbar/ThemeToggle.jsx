import { useContext } from 'react';
import { ThemeContext } from '../App';

import { MdOutlineLightMode as LightModeIcon } from 'react-icons/md';
import { MdOutlineDarkMode as DarkModeIcon } from 'react-icons/md';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="nav__theme-toggle"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      onClick={toggleTheme}
    >
      <span className="light">Dark</span>

      <span className="dark">Light</span>

      <span
        className={`nav__theme-toggle--slider flex flex-ai-c gap-1 ${theme}mode`}
      >
        {theme === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
        <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
      </span>
    </button>
  );
};

export default ThemeToggle;

import { MdOutlineLightMode as LightModeIcon } from 'react-icons/md';
import { MdOutlineDarkMode as DarkModeIcon } from 'react-icons/md';

const ThemeToggle = () => {
  return (
    <button className="nav__theme-toggle" title="Darkmode">
      <span className="light" title="Lightmode">
        Dark
      </span>

      <span className="dark" title="Darkmode">
        Light
      </span>

      <span className="nav__theme-toggle--slider flex flex-ai-c gap-1">
        <DarkModeIcon />
        <span>Dark</span>
      </span>
    </button>
  );
};

export default ThemeToggle;

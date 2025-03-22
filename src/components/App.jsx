import { useEffect, useState, createContext } from 'react';
import useLocalStorage from 'use-local-storage';

import Overlay from './Overlay';
import Layout from '../layout';
import ErrorBoundary from './ErrorBoundary';

import '../assets/scss/components/App.scss';

export const ThemeContext = createContext(null);
export const MenuContext = createContext(null);
export const ProjectModalContext = createContext(null);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({
    title: 'Dummy Project',
    description: {
      brief: 'This is a dummy project.',
      overview: 'This is a dummy project.',
      problem: 'This is a dummy project.',
      features: ['This is a dummy project.'],
      summary: 'This is a dummy project.',
    },
    imagesFile: 'dummy',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '',
    source: 'https://github.com/Timbar09',
  });
  const preference = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useLocalStorage('theme', preference ? 'light' : 'dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMenu = () => {
    const body = document.querySelector('body');

    setIsMenuOpen(!isMenuOpen);
    body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const toggleProjectModal = () => {
    const body = document.querySelector('body');

    setIsProjectModalOpen(!isProjectModalOpen);
    body.style.overflow = isProjectModalOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const body = document.querySelector('body');

    body.dataset.theme = theme;
  }, [theme]);

  return (
    <ErrorBoundary>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
          <ProjectModalContext.Provider
            value={{
              isProjectModalOpen,
              toggleProjectModal,
              selectedProject,
              setSelectedProject,
            }}
          >
            <div className="app">
              <Overlay />

              <Layout />
            </div>
          </ProjectModalContext.Provider>
        </MenuContext.Provider>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
};

export default App;

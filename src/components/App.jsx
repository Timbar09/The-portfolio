import { useEffect, useState, createContext } from 'react';
import useLocalStorage from 'use-local-storage';

import Navbar from './Navbar';

import '../assets/scss/components/App.scss';

export const ThemeContext = createContext(null);

const App = () => {
  const preference = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    preference ? 'light' : 'dark'
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const body = document.querySelector('body');

    body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app">
        <Navbar />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

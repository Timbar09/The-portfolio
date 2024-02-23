import { useEffect, useState, createContext } from 'react';
import useLocalStorage from 'use-local-storage';

import Navbar from './Navbar';
import Overlay from './Overlay';

import '../assets/scss/components/App.scss';

export const ThemeContext = createContext(null);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const preference = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    preference ? 'light' : 'dark'
  );

  const handleToggleMenu = () => {
    const body = document.querySelector('body');

    setIsMenuOpen(!isMenuOpen);
    body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

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
        <Overlay isMenuOpen={isMenuOpen} />

        <Navbar isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />

        <div className="lorem-text px-1 py-3">
          <h1 id="home">Home</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem, accusantium facere nihil, laboriosam illo iste
            labore deserunt consectetur quibusdam rerum illum ab laborum id
            eligendi dolor neque quam alias voluptatibus voluptate? Accusamus
            laudantium quam placeat eveniet aliquid culpa, cumque perferendis.
            Ad soluta officia dolorum explicabo, excepturi exercitationem
            voluptatibus laborum illo praesentium. At quaerat voluptate, et odio
            explicabo deleniti tempora alias dolore consequatur velit libero
            recusandae, temporibus hic. Illo soluta commodi quae doloremque,
            excepturi quo ea molestiae magnam ipsa cum hic aliquid quidem minima
            nulla vero dignissimos mollitia sit earum velit tenetur nihil
            consequatur aspernatur at explicabo. Libero modi eos saepe! Dolorum
            architecto quos ea, eaque, modi a atque repudiandae magni ex numquam
            illo inventore distinctio esse dolor beatae. Sunt, dolorum quas.
            Molestias veniam vero quis reiciendis iste error tempore corrupti
            maiores. Nisi fugit ad quos. Harum nobis eum, inventore totam
            consectetur quis consequatur at quibusdam officiis aut pariatur ab
            accusamus nulla delectus, necessitatibus ullam iure earum vero
            beatae fuga dicta repudiandae. Temporibus excepturi assumenda
            eligendi unde voluptates ad deleniti pariatur. Incidunt ea delectus
            dolores eligendi officiis ipsum quod, ad nesciunt, vitae error ullam
            molestiae magni nemo corporis inventore? Incidunt, quo dolor quasi
            maiores soluta earum accusamus culpa quis. Error explicabo esse
            culpa vel laudantium consectetur deserunt aliquam cum beatae
            consequatur? Aperiam doloremque labore saepe quas eveniet! Ipsum,
            unde eum autem, tempora illo nobis consectetur sit numquam
            repudiandae vero incidunt quo eligendi esse hic delectus dolores
            accusamus provident. Tenetur corrupti expedita explicabo itaque
            fugiat vitae eveniet, illum odio quidem nihil quas blanditiis
            consequatur nesciunt maiores! At, repellendus voluptatum illum
            quisquam reiciendis culpa, labore eligendi possimus quis magni quam
            repellat. Illum recusandae cupiditate assumenda ut ad unde deserunt
            laboriosam sint, at, officiis fugiat aperiam cum corrupti accusamus?
            Accusamus ad tempore odio neque. Voluptate nisi aspernatur
            necessitatibus distinctio ipsam amet, aliquam praesentium? Aut.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quos, quae, quia, doloribus quidem quod voluptas nemo voluptatem
            doloremque tempora tenetur. Quisquam, quos. Quisquam, quos.
            Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
            Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
            Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
            Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
            Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
            Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
            Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
            Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
            Quisquam, quos. Quisquam, quos. Quisquam, quos. Quisquam, quos.
            Quisquam,
          </p>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

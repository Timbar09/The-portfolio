import { useState, useContext } from "react";
import GitHubCalendar from "react-github-calendar";

import { ThemeContext } from "../../components/App";

import Tooltip from "../../components/Tooltip";

const GitHubContribution = () => {
  const [selectedYear, setSelectedYear] = useState("last");
  const { theme } = useContext(ThemeContext);
  const colorTheme = {
    light: [
      "hsla(139, 54%, 28%, 0.05)",
      "#9BE9A8",
      "#40C463",
      "#30A14E",
      "#216E39",
    ],
    dark: [
      "hsla(127, 59%, 58%, 0.025)",
      "#033A16",
      "#196C2E",
      "#2EA043",
      "#56D364",
    ],
  };

  const isLastYear = selectedYear === "last";

  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 4;
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  );

  const styleVariables = {
    "--bg-active": "#56D364",
    "--bg-hover": "hsla(127, 59%, 58%, 0.25)",
  };

  return (
    <section className="home__github-contribution page__section">
      <div className="container">
        <h2 className="page__subtitle page__subtitle--short">
          GitHub Contributions
        </h2>

        <div className="home__github-contribution--grid flex flex-col gap-2">
          <div className="">
            <GitHubCalendar
              username="Timbar09"
              colorScheme={theme}
              theme={colorTheme}
              year={selectedYear}
            />
          </div>

          <ul
            className="home__github-contribution--year__list flex flex-jc-c flex_lg-jc-fs gap-1 flex-wrap"
            aria-label="GitHub contribution years"
            style={styleVariables}
          >
            {years.map((year) => (
              <li
                key={year}
                className="home__github-contribution--year__list--item"
              >
                <button
                  className={`home__github-contribution--year__list--item__button button ${
                    selectedYear === year ||
                    (isLastYear && year === currentYear)
                      ? "active"
                      : ""
                  }`}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GitHubContribution;

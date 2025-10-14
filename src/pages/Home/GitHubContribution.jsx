import { useState, useContext } from "react";
import GitHubCalendar from "react-github-calendar";

import { ThemeContext } from "../../components/App";

import { AnimatedComponent } from "../../components/Animations";
import { PageSubtitle } from "../PageTitles";

import { GITHUB_COLORS } from "./homeUtils";

const YearButtonItem = ({
  year,
  isLastYear,
  currentYear,
  selectedYear,
  setSelectedYear,
}) => {
  const isActive =
    selectedYear === year || (isLastYear && year === currentYear);

  return (
    <li key={year} className="home__github-contribution--year__list--item">
      <button
        className={`home__github-contribution--year__list--item__button button${
          isActive ? " active" : ""
        }`}
        onClick={() => setSelectedYear(year)}
      >
        {year}
      </button>
    </li>
  );
};

const GitHubContribution = () => {
  const [selectedYear, setSelectedYear] = useState("last");
  const { theme: colorScheme } = useContext(ThemeContext);

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

  const { theme } = GITHUB_COLORS;

  return (
    <section className="home__github-contribution page__section">
      <div className="container">
        <PageSubtitle text="GitHub Contributions" isShort />

        <div className="home__github-contribution--grid flex flex-col gap-2">
          <AnimatedComponent
            name="fadeInUp"
            trigger="whileInView"
            className="relative"
          >
            <GitHubCalendar
              username="Timbar09"
              colorScheme={colorScheme}
              theme={theme}
              year={selectedYear}
            />
          </AnimatedComponent>

          <AnimatedComponent
            tag="ul"
            name="enter"
            trigger="whileInView"
            className="home__github-contribution--year__list flex flex-jc-c flex_lg-jc-fs gap-1 flex-wrap"
            aria-label="GitHub contribution years"
            style={styleVariables}
          >
            {years.map((year) => (
              <YearButtonItem
                key={year}
                year={year}
                isLastYear={isLastYear}
                currentYear={currentYear}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
              />
            ))}
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
};

export default GitHubContribution;

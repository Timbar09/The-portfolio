import Tooltip from "./Tooltip";

import "../assets/scss/components/Tabs.scss";

export const TabButtons = ({ tabData, activeTab, setActiveTab }) => {
  return (
    <header className="tab__header">
      <ul className="tab__list flex">
        <li>
          <button
            className={`tab__button py-1 ${
              activeTab === "all" ? "tab__button--active" : ""
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
        </li>

        {[...new Set(tabData.map((item) => item.category))].map((category) => {
          const tabTitle = category.charAt(0).toUpperCase() + category.slice(1);

          return (
            <li key={category}>
              <button
                className={`tab__button py-1 ${
                  activeTab === category ? "tab__button--active" : ""
                }`}
                onClick={() => setActiveTab(category)}
              >
                {tabTitle}
                <Tooltip styles={{ fontWeight: "300" }}>
                  Show {tabTitle} technologies
                </Tooltip>
              </button>
            </li>
          );
        })}
      </ul>

      <div className={`tab__indicator ${activeTab}`}></div>
    </header>
  );
};

export const TabContent = ({ tabData, activeTab, Component }) => {
  return (
    <div className="tab__content">
      <Component data={tabData} activeTab={activeTab} />
    </div>
  );
};

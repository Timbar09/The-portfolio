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

        {[...new Set(tabData.map((item) => item.category))].map((category) => (
          <li key={category}>
            <button
              className={`tab__button py-1 ${
                activeTab === category ? "tab__button--active" : ""
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <div className={`tab__indicator ${activeTab}`}></div>
    </header>
  );
};

export const TabContent = ({ tabData, activeTab, Component }) => {
  return (
    <div className="tabs__content">
      {tabData
        .filter((item) => {
          if (activeTab === "all") {
            return item;
          } else if (item.category === activeTab) {
            return item;
          }
        })
        .map((item) => (
          <Component key={item.id} {...item} />
        ))}
    </div>
  );
};

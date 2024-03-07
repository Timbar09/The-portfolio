const SectionTitle = ({ firstWord, secondWord, underlineLeft = true }) => {
  return (
    <h2 className="section__title">
      {<span className={underlineLeft ? "underlined" : ""}>{firstWord}</span>}{" "}
      {
        <span className={underlineLeft ? "" : "underlined"}>
          {` ${secondWord}`}
        </span>
      }
    </h2>
  );
};

export default SectionTitle;

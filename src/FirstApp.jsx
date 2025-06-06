import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="data-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: "No hay título.",
  subTitle: "No hay subtítulo.",
  name: "Fernando Herrera",
};

import React from "react";
import PropTypes from "prop-types";
import "../Styles/Title.css";

const Title = ({ text }) => {
  return <h1 className="title">{text}</h1>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired, // Title text
};

export default Title;

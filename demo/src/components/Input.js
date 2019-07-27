import React from "react";
import PropTypes from "prop-types";

require("./Input.css");

const Input = ({ ...props }) => {
  return (
    <div className="Input">
      <input type="text" {...props} />
    </div>
  );
};

Input.displayName = "Input";

Input.propTypes = {
  onChange: PropTypes.func
};

export default Input;

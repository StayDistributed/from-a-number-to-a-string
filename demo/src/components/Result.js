import React from "react";
import PropTypes from "prop-types";
import Fantas from "@staydistributed/fantas";

const fantas = new Fantas();

require("./Result.css");

const Result = ({ value }) => {
  let str;
  try {
    str = value ? fantas.transform(parseFloat(value)) : "Start digit";
  } catch (error) {
    str = error.message;
  }

  return (
    <div className="Result">
      <p>{str}</p>
    </div>
  );
};

Result.displayName = "Result";

Result.propTypes = {
  value: PropTypes.string
};

export default Result;

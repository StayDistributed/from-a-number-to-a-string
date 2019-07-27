import React, { useEffect } from "react";
import PropTypes from "prop-types";

require("./Keyboard.css");

const Keyboard = ({ onDigitPress }) => {
  const allowed = ["9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0", "CL"];

  useEffect(() => {
    const listener = e => {
      if (e.target === document.body && allowed.find(d => d === e.key + "")) {
        onDigitPress(e.key);
      }
    };
    document.body.addEventListener("keypress", listener);
    return () => document.body.removeEventListener("keypress", listener);
  }, [allowed, onDigitPress]);

  return (
    <div className="Keyboard">
      {allowed.map(d => (
        <div key={d} className="Keyboard-digit" onClick={() => onDigitPress(d)}>
          {d}
        </div>
      ))}
    </div>
  );
};

Keyboard.displayName = "Keyboard";

Keyboard.propTypes = {
  onDigitPress: PropTypes.func
};

export default Keyboard;

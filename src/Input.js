import React from "react";
import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
  //   toggleFillAnimation,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autofocus
        className="color-input"
        type="text"
        placeholder="Change Color Here"
        required
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Dark Text{" "}
        <div style={{ display: isDarkText ? "none" : "block" }}>(Enabled)</div>
      </button>
      {/* <button type="button" onClick={() => toggleFillAnimation()}>
        Start Fill Animation!
      </button> */}
    </form>
  );
};

export default Input;

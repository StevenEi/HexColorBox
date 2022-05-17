import React from "react";
// couldn't get keyframes to be exported from css file
// import { keyframes } from "./App.css";

const Box = ({ colorValue, hexValue, isDarkText, fillAnimation }) => {
  //   var fill = keyframes`
  //     0% { transform: rotate(0deg); }
  //     100% { transform: rotate(0deg); }
  //     `;
  return (
    <section
      className="color-box"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
        // animation: `${fill} 2s linear infinite`,
        // animationPlayState: fillAnimation,
      }}
    >
      <p>{colorValue ? colorValue : "No Color"}</p>
      <p>{hexValue ? "Color Hex Value: " + hexValue : null}</p>
    </section>
  );
};

export default Box;

import { useState } from "react";
import Box from "./Box.js";
import Input from "./Input.js";
import Title from "./Title.js";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  // const [fillAnimation, setFillAnimation] = useState(false);

  // const toggleFillAnimation = () => {
  //   setFillAnimation(!fillAnimation);
  // };

  return (
    <div className="App">
      <Title />
      <Box
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
        // fillAnimation={fillAnimation}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
        // fillAnimation={fillAnimation}
        // toggleFillAnimation={toggleFillAnimation}
      />
    </div>
  );
}

export default App;

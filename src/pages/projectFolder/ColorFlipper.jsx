import React, { useState } from "react";

const ColorFlipper = () => {
  const colors = ["#9ae61d", "#3c2caf", "#e66f1d", "#810b46", "#23e8e2"];

  const [currentColor, setCurrentColor] = useState("");

  function colorGenerator() {
    const randomNumber = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomNumber];
    return randomColor;
  }

  function generateColor() {
    setCurrentColor(colorGenerator());
  }

  return (
    <div
      className="w-full h-screen"
      style={{ backgroundColor: `${currentColor}` }}
    >
      <button
        onClick={generateColor}
        className="bg-green-600 px-3 py-1 rounded-md"
      >
        Color Generator
      </button>
    </div>
  );
};

export default ColorFlipper;

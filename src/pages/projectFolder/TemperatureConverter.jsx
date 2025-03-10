import React, { useState } from "react";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [tempType, setTempType] = useState("celcius");

  const celciusValue = function convertToCelcius() {
    const temp = parseFloat(temperature);
    const result = isNaN(temp) ? "" : temp;
    return (result * 9) / 5 + 32;
  };

  const farenheitValue = function convertToFarenheit() {
    const temp = parseFloat(temperature);
    const result = isNaN(temp) ? "" : temp;
    return ((result - 32) * 5) / 9;
  };

  const convertedValue =
    tempType === "celcius" ? farenheitValue() : celciusValue();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Convert Temperature</h2>

        <input
          type="text"
          placeholder="Enter your value"
          value={temperature}
          onChange={(e) => {
            setTemperature(e.target.value);
          }}
        />

        <label>
          <input
            type="radio"
            value="celcius"
            name="temperature"
            onChange={(e) => {
              setTempType(e.target.value);
            }}
          />
          Convert To Celcius
        </label>

        <label>
          <input
            type="radio"
            value="farenheit"
            name="temperature"
            onChange={(e) => {
              setTempType(e.target.value);
            }}
          />
          Convert To Ferenheit
        </label>

        <p>Here is entered value : {convertedValue}</p>
        <p>{tempType}</p>
      </div>
    </div>
  );
};

export default TemperatureConverter;

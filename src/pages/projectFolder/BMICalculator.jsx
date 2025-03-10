import { useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [BMI, setBMI] = useState(0);
  const [result, setResult] = useState("");

  console.log(`This is entered weight ${weight}`);
  console.log(`This is entered height ${height}`);

  function calculateBMIFunc() {
    const calculatedBMI = weight / (height * height);
    setBMI(calculatedBMI);
    calculateWeightStatus(calculatedBMI);
  }

  function calculateWeightStatus(BMIValue) {
    if (BMIValue < 18.5) {
      setResult("You are underweight");
    } else if (BMIValue >= 18.5 && BMIValue <= 24.9) {
      setResult("Your weight is normal");
    } else if (BMIValue >= 25 && BMIValue <= 29.9) {
      setResult("You are overweight");
    } else {
      setResult("You are obese");
    }
  }

  return (
    <div className="m-6">
      <div className="flex items-center gap-3 mb-4">
        <p>Enter your weight</p>
        <input
          className="border-2 border-black"
          type="text"
          placeholder="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-3 mb-4">
        <p>Enter your height</p>
        <input
          className="border-2 border-black"
          type="text"
          placeholder="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <button
        className="bg-green-600 px-4 py-2 rounded-md text-white font-medium"
        onClick={calculateBMIFunc}
      >
        Calculate
      </button>

      <p>{`Your BMI is ${BMI}`}</p>
      <p>Your Weight Status {result}</p>
    </div>
  );
};

export default BMICalculator;

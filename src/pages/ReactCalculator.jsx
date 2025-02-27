// import React, { useState } from "react";

// const ReactCalculator = () => {
//   const enteredNumbers = [];
//   const [currentValue, setCurrentValue] = useState([]);

//   //   var a = ['1','2','3']
//   // var result = a.map(function (x) {
//   //   return parseInt(x, 10);
//   // });

//   // console.log(result);

//   function addNumber() {
//     const userNumbers = [...(enteredNumbers + currentValue)];

//     const converArrayToInteger = userNumbers.map(function (item) {
//       return parseInt(item);
//     });

//     const result = converArrayToInteger.reduce(function (acc, cur) {
//       return acc + cur;
//     }, 0);

//     console.log(result);
//     setCurrentValue([]);
//   }

//   function addButton() {
//     addNumber();
//   }

//   return (
//     <>
//       <div className="flex items-center justify-center pt-10">
//         <div className="flex items-center gap-4">
//           <input
//             className="border-2 border-black text-black"
//             placeholder="Enter your number"
//             value={currentValue}
//             onChange={(e) => setCurrentValue(e.target.value)}
//           />
//           <button
//             onClick={addButton}
//             className="w-[50px] h-[25px] bg-[#3faf72] rounded-sm font-medium text-white"
//           >
//             +
//           </button>
//           <button className="w-[50px] h-[25px] bg-[#3faf72] rounded-sm font-medium text-white">
//             -
//           </button>
//           <button className="w-[50px] h-[25px] bg-[#3faf72] rounded-sm font-medium text-white">
//             X
//           </button>
//           <button className="w-[50px] h-[25px] bg-[#3faf72] rounded-sm font-medium text-white">
//             /
//           </button>

//           <h1>Calculation Result: </h1>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ReactCalculator;

import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult(null);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="w-80 mx-auto mt-10 p-4 border rounded-lg shadow-lg bg-gray-100">
      <h2 className="text-center text-xl font-bold mb-4">Calculator</h2>
      <div className="mb-2 p-2 bg-white text-right text-xl rounded">
        {input || 0}
      </div>
      <div className="mb-2 p-2 bg-white text-right text-xl rounded font-bold">
        {result !== null ? result : ""}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "C",
          "+",
        ].map((item) => (
          <button
            key={item}
            onClick={() => (item === "C" ? clearInput() : handleClick(item))}
            className="p-4 bg-gray-300 rounded hover:bg-gray-400"
          >
            {item}
          </button>
        ))}
        <button
          onClick={calculateResult}
          className="col-span-4 p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          =
        </button>
      </div>
    </div>
  );
}

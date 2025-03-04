// import React, { useReducer } from "react";

// const TodoList = () => {
//   const initialArray = [];

//   function reducer(currentState, action) {
//     switch (action.type) {
//       case "Add Items":
//         return [...items, currentState];
//     }
//   }

//   const [items, dispatch] = useReducer(reducer, initialArray);

//   return (
//     <div>
//       <input
//         className="border-2 border-gray-700 bg-[#c5c5c5] text-black"
//         placeholder="add an item"
//         value={items}
//         onChange={(e) => e.target.value}
//       />
//       <button
//         onClick={() => dispatch({ type: "Add Items" })}
//         className=" bg-[#23a037] text-black px-3 py-1 rounded-sm"
//       >
//         Add Items
//       </button>
//     </div>
//   );
// };

// export default TodoList;

import { useReducer, useState } from "react";

// Reducer function
const counterReducer = (currentState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: currentState.count + action.payload };
    case "DECREMENT":
      return { count: currentState.count - action.payload };
    default:
      return currentState;
  }
};

export default function CounterApp() {
  // useReducer setup
  const [counter, dispatch] = useReducer(counterReducer, { count: 0 });
  const [step, setStep] = useState(1); // Input value for increment/decrement

  return (
    <div className="p-4 border rounded w-64 text-center">
      <h2 className="text-xl font-bold">Counter: {counter.count}</h2>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        className="border p-1 my-2 w-20 text-center"
      />
      <div className="flex justify-between mt-2">
        <button
          className="bg-green-500 text-white px-4 py-1 rounded"
          onClick={() => dispatch({ type: "INCREMENT", payload: step })}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-1 rounded"
          onClick={() => dispatch({ type: "DECREMENT", payload: step })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

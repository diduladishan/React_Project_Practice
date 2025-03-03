"use strict";

import React, { useReducer } from "react";

const UseReducerPractice = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;

      case "decrement":
        return state - 1;

      case "reset":
        return 0;

      default:
        throw new Error();
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p className="mb-4 text-2xl font-medium">Counter : {count}</p>

      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="w-[30px] bg-[#3b3b3b] font-medium text-white"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="w-[90px] bg-[#8a1919] font-medium text-white"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="w-[30px] bg-[#3b3b3b] font-medium text-white"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default UseReducerPractice;

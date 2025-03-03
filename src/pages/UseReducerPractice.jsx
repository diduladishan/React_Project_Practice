import { useReducer } from "react";

const UseReducerPractice = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;

      case "reset":
        return 0;
    }
  }

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p className="text-3xl mb-4 mt-2">Counter : {count}</p>

      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="w-[30px] bg-[#1f6c92] font-medium text-white text-xl"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="w-[90px] bg-[#ac2525] font-medium text-white text-xl"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="w-[30px] bg-[#1f6c92] font-medium text-white text-xl"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default UseReducerPractice;

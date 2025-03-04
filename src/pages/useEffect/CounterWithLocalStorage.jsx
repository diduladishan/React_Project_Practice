import React, { useEffect, useState } from "react";

const CounterWithLocalStorage = () => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count");
    return Number(savedCount) || 0;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <div className="m-8">
      <p className="text-3xl font-bold mb-4">Counter : {count}</p>

      <div className="flex items-center gap-4">
        <button
          onClick={increment}
          className="w-[50px] bg-green-700 px-2 py-1.5 rounded-sm font-bold text-white"
        >
          +
        </button>
        <button
          className="w-[80px] bg-red-800  px-2 py-1.5 rounded-sm font-bold text-white"
          onClick={reset}
        >
          Reset
        </button>
        <button
          onClick={decrement}
          className="w-[50px] bg-green-700 px-2 py-1.5 rounded-sm font-bold text-white"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CounterWithLocalStorage;

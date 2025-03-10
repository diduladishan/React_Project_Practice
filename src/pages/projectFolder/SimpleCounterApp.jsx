import { useState } from "react";

const SimpleCounterApp = () => {
  const [count, setCount] = useState(0);

  //for increment
  function increment() {
    setCount(count + 1);
  }

  //for decrement
  function decrement() {
    setCount(count - 1);
  }

  //reset
  function resetCount() {
    setCount(0);
  }

  return (
    <div className="bg-slate-500 h-screen flex items-center justify-center">
      <div>
        <p className="text-3xl text-center mb-6 text-white">Count: {count}</p>
        <div className="flex items-center justify-center gap-4">
          <div
            className="bg-[#5db932] text-[30px] font-semibold w-12 h-12 flex items-center justify-center"
            onClick={decrement}
          >
            <button className="p-0 m-0 border-none">-</button>
          </div>

          <div
            className="bg-[#8a303c] text-white text-2xl font-semibold w-fit px-4 py-2"
            onClick={resetCount}
          >
            <button>Reset</button>
          </div>

          <div
            className="bg-[#5db932] text-[30px] font-semibold w-12 h-12 flex items-center justify-center"
            onClick={increment}
          >
            <button className="p-0 m-0 border-none">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCounterApp;

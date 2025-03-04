import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const initialValue = JSON.parse(localStorage.getItem("mode")) || {
    textColor: "black",
    backgroundColor: "white",
  };
  const [mode, setMode] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  function darkMode() {
    setMode({ textColor: "white", backgroundColor: "black" });
  }

  function lightMode() {
    setMode({ textColor: "black", backgroundColor: "white" });
  }

  return (
    <div
      className="m-4 h-screen"
      style={{
        backgroundColor: `${mode.backgroundColor}`,
        color: `${mode.textColor}`,
      }}
    >
      <div className="mb-6 flex items-center gap-4">
        <button
          onClick={darkMode}
          className="border border-white bg-[#4e4e4e] w-[110px] px-2 py-1.5 font-semibold text-white"
        >
          Dark Mode
        </button>
        <button
          onClick={lightMode}
          className="border border-black bg-[#e6e6e6] w-[110px] px-2 py-1.5 font-semibold text-black"
        >
          Light Mode
        </button>
      </div>

      <div>
        <p className="text-4xl font-bold mb-4">This is the page title</p>

        <p className="text-2xl font-semibold mb-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          quidem veritatis pariatur quod dolorem distinctio voluptatibus
          voluptate adipisci ipsa. Ratione, quo! Eveniet praesentium a minus
          facilis tempora placeat ipsa enim.
        </p>

        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          voluptates ipsa dolore vitae laboriosam alias odio veritatis, saepe
          expedita quos blanditiis odit tenetur dignissimos.
        </p>
      </div>
    </div>
  );
};

export default DarkModeToggle;

import { useState } from "react";

const Light_DarkModeToggle = () => {
  let modeObject = {
    color: "#000",
    backgroundColor: "#fff",
  };

  const [mode, setMode] = useState(modeObject);

  function modeChangeDark() {
    const updatedColorProfile = (modeObject = {
      color: "#fff",
      backgroundColor: "#000",
    });

    setMode(updatedColorProfile);
  }

  function modeChangeLight() {
    const updatedColorProfile = (modeObject = {
      color: "#000",
      backgroundColor: "#fff",
    });

    setMode(updatedColorProfile);
  }

  return (
    <div
      className="m-6 h-screen"
      style={{ backgroundColor: `${mode.backgroundColor}` }}
    >
      <button
        onClick={modeChangeLight}
        className="w-[110px] bg-[#aaa] py-2 text-black font-medium rounded-md mr-4"
      >
        Light Mode
      </button>

      <button
        onClick={modeChangeDark}
        className="w-[110px] bg-[#313131] py-2 text-white font-medium rounded-md"
      >
        Dark Mode
      </button>

      {/* content of the web page */}
      <div className="mt-6" style={{ color: `${mode.color}` }}>
        <h1 className="text-4xl mb-2">This is the Title</h1>

        <p className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          dolores porro quo aliquid sapiente omnis nesciunt, id eligendi
          voluptatem maiores, labore culpa facilis delectus explicabo quod
          aperiam ratione, alias sequi.
        </p>
      </div>
    </div>
  );
};

export default Light_DarkModeToggle;

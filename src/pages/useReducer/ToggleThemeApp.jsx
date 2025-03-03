import { useReducer } from "react";

const ToggleThemeApp = () => {
  const initialValue = { textColor: "#324", backgroundColor: "#338" };

  function reducer(state, action) {
    switch (action.type) {
      case "dark":
        return {
          textColor: "#fff",
          backgroundColor: "#000",
        };

      case "light":
        return {
          textColor: "#000",
          backgroundColor: "#fff",
        };

      default:
        return state;
    }
  }

  const [mode, dispatch] = useReducer(reducer, initialValue);

  return (
    <div
      className="h-screen"
      style={{
        backgroundColor: `${mode.backgroundColor}`,
        color: `${mode.textColor}`,
      }}
    >
      <button
        onClick={() => dispatch({ type: "dark" })}
        className="w-[110px] px-3 py-1 bg-[#272727] text-white"
      >
        Dark Mode
      </button>

      <button
        onClick={() => dispatch({ type: "light" })}
        className="w-[110px] px-3 py-1 bg-[#f5f5f5] text-black border-2 border-black"
      >
        Light Mode
      </button>

      <h1 className="text-4xl text-bold mb-4">Hello World</h1>

      <p className="text-xl text-semibold mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minima,
        ducimus, ea deserunt enim incidunt nam similique perferendis quaerat
        totam excepturi cupiditate facilis aut repellat voluptates velit unde
        ipsam quo.
      </p>

      <p className="text-lg text-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minima,
        ducimus, ea deserunt enim incidunt nam similique perferendis quaerat
        totam
      </p>
    </div>
  );
};

export default ToggleThemeApp;

import React, { useState } from "react";

const GroceryListApp = () => {
  const [item, setItem] = useState([]);
  const [text, setTexts] = useState("");

  function addItems() {
    setItem([...item, text]);
    setTexts("");
  }

  function deleteItem(deleteItem) {
    const updatedItem = item.filter((item) => item !== deleteItem);

    setItem(updatedItem);
  }

  function clearAll() {
    const clearedList = [];
    setItem(clearedList);
  }

  console.log(text);
  return (
    <div>
      <p>Enter Your Item Here</p>
      <input
        type="text"
        placeholder="Enter an item"
        className="border-2 border-black rounded-sm"
        value={text}
        onChange={(e) => {
          setTexts(e.target.value);
        }}
      />

      <button onClick={addItems}>Add Item</button>
      <button onClick={clearAll}>Clear All</button>

      <div>
        {item.map((item, index) => {
          return (
            <li key={index}>
              {item}{" "}
              <button
                onClick={() => {
                  deleteItem(item);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default GroceryListApp;

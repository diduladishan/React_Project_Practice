// import React, { useState } from "react";

// const GroceryListApp = () => {
//   const [item, setItem] = useState([]);
//   const [text, setTexts] = useState("");

//   function addItems() {
//     setItem([...item, text]);
//     setTexts("");
//   }

//   function deleteItem(deleteItem) {
//     const updatedItem = item.filter((item) => item !== deleteItem);

//     setItem(updatedItem);
//   }

//   function clearAll() {
//     const clearedList = [];
//     setItem(clearedList);
//   }

//   console.log(text);
//   return (
//     <div>
//       <p>Enter Your Item Here</p>
//       <input
//         type="text"
//         placeholder="Enter an item"
//         className="border-2 border-black rounded-sm"
//         value={text}
//         onChange={(e) => {
//           setTexts(e.target.value);
//         }}
//       />

//       <button onClick={addItems}>Add Item</button>
//       <button onClick={clearAll}>Clear All</button>

//       <div>
//         {item.map((item, index) => {
//           return (
//             <li key={index}>
//               {item}{" "}
//               <button
//                 onClick={() => {
//                   deleteItem(item);
//                 }}
//               >
//                 X
//               </button>
//             </li>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default GroceryListApp;

import { useState } from "react";

const GroceryListApp = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function addItemsToArray() {
    setItems([...items, text]);
    setText("");
  }

  // const updatedItem = item.filter((item) => item !== deleteItem);

  function deleteItems(deleteItem) {
    const afterItemsDelete = items.filter((item) => item !== deleteItem);

    setItems(afterItemsDelete);
  }

  return (
    <div>
      <input
        className="border-2 border-black rounded-sm bg-slate-300 m-4"
        placeholder="Enter an item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={addItemsToArray}
        className="bg-green-600 rounded-md text-white py-1.5 px-3"
      >
        Add Item
      </button>

      {/* Display the items in the UI */}

      {items.map((item, index) => {
        return (
          <div key={index} className="flex items-center gap-2">
            <li>{item}</li>

            <button
              onClick={() => {
                deleteItems(item);
              }}
            >
              ❌
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default GroceryListApp;

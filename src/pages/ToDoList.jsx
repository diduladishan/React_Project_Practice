import { useState } from "react";

const ToDoList = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function addItems() {
    setItems([...items, text]);
    setText("");
  }

  function deleteItems(itemToRemove) {
    setItems(
      items.filter((item) => {
        return item !== itemToRemove;
      })
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your Task"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button onClick={addItems}>Add Task</button>

      {/* Display the tasks as list */}
      <ul>
        {items.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
              <button
                onClick={() => {
                  deleteItems(item);
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;

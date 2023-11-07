import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import "../Assets/Css/todo.css";

const Todo = () => {
  const [Items, setItems] = useState<Array<string>>([]);
  const [inputList, setInputList] = useState<string>("");

  const handleClick = () => {
    if (inputList.trim() !== "") {
      setItems([...Items, inputList]);
      setInputList("");
    }
  };

  const deleteItem = (index: any) => {
    const updatedList = Items.filter((_, i) => i !== index);
    setItems(updatedList);
  };

  const itemEvent = (event: any) => {
    setInputList(event.target.value);
  };

  return (
    <div className="app">
      <div className="card">
        <p className="text">Get Things Done!</p>
        <div>
          <input
            type="text"
            value={inputList}
            className="placeholder"
            placeholder="What is the task today?"
            onChange={itemEvent}
          />
          <button onClick={handleClick} className="btn">
            Add Task
          </button>
          <div>
            <ul>
              {Items.map((itemval, index) => (
                <li className="txt" key={index}>
                  {itemval}
                  <button className="dltbtn" onClick={() => deleteItem(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

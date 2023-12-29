import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;

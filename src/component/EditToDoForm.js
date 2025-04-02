import React, { useState } from "react";

export const EditToDoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="update task?"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="sumbit" className="todo-btn">
        update task
      </button>
    </form>
  );
};

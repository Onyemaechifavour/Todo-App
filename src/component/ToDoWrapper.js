import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToDo } from "./todo";
import { ToDoForm } from "./todoform";
import { EditToDoForm } from "./EditToDoForm";
uuidv4();

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editToDo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
const editTask = (task, id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    )
  );
};

  return (
    <div className="ToDoWrapper">
      <h1>Gets things done</h1>
      <ToDoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditToDoForm editTodo={editTask} task={todo} />
        ) : (
          <ToDo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editToDo={editToDo}
          />
        )
      )}
    </div>
  );
};

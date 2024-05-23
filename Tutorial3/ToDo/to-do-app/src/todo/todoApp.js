import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="my-4">Todo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {todo}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

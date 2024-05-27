import React, { useState } from "react"; // Importing React and the useState hook
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap CSS for styling

const TodoApp = () => {
  const [todos, setTodos] = useState([]); // State to hold the list of todos
  const [newTodo, setNewTodo] = useState(""); // State to hold the value of the new todo input

  // Function to handle input changes and update the newTodo state
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Function to add a new todo to the list
  const handleAddTodo = () => {
    if (newTodo.trim()) { // Check if the input is not empty or just whitespace
      setTodos([...todos, newTodo]); // Add the new todo to the list
      setNewTodo(""); // Clear the input field
    }
  };

  // Function to delete a todo from the list based on its index
  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Filter out the todo at the specified index
  };

  return (
    <div className="container">
      <h1 className="my-4">Todo List</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={newTodo} // Bind the input value to newTodo state
          onChange={handleInputChange} // Update newTodo state on input change
          placeholder="Enter a new todo" // Placeholder text for the input
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
              onClick={() => handleDeleteTodo(index)} // Delete the todo when button is clicked
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp; // Export the TodoApp component as default

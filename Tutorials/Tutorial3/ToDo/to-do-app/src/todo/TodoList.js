import React from "react"; // Import React
import TodoList from "./TodoList"; // Import the TodoList component

class TodoApp extends React.Component {
  constructor() {
    super();
    // Initialize state with inputData and todoItems
    this.state = {
      inputData: "",
      todoItems: [],
    };
  }

  // Method to handle changes in the input field
  changeTodoInput = (event) => {
    this.setState({ inputData: event.target.value });
  };

  // Method to add a new todo item to the list
  addTodo = (event) => {
    if (this.state.inputData !== "") { // Check if inputData is not empty
      // Create a new array with the existing todo items and the new item
      let newTodoItems = [...this.state.todoItems, this.state.inputData];
      // Update state with the new array and clear the input field
      this.setState({ todoItems: newTodoItems, inputData: "" });
    }
  };

  // Method to delete a todo item based on its index
  deleteTodo = (index) => {
    // Create a copy of the current todo items array
    let todoItems = [...this.state.todoItems];
    // Filter out the item at the specified index
    let newTodoItems = todoItems.filter((value, key) => {
      return index !== key;
    });
    // Update state with the new array
    this.setState({ todoItems: newTodoItems });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3 className="text-center">React Todo App</h3>
            <div className="input-group">
              <input
                type="text"
                placeholder="Enter Something"
                className="form-control"
                onChange={this.changeTodoInput} // Handle input changes
                value={this.state.inputData} // Bind input value to state
              />
              <div className="input-group-append">
                <span className="btn btn-success" onClick={this.addTodo}>
                  Add
                </span>
              </div>
            </div>
            <TodoList
              items={this.state.todoItems} // Pass todo items to TodoList component
              deleteTodo={this.deleteTodo} // Pass delete method to TodoList component
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoApp; // Export the TodoApp component as default

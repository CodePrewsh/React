import React, { useReducer, useEffect } from 'react';
import axios from 'axios'; // Import Axios

import ToDoList from './ToDoList';

const todosInitialState = {
  todos: []
};

export const TodosContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);

  useEffect(() => {
    // Example of using Axios to fetch data
    axios.get('http://example.com/api/todos')
      .then(response => {
        dispatch({ type: 'get', payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  );
}

function todosReducer(state, action) {
  switch (action.type) {
    case 'get':
      return { ...state, todos: action.payload };
    case 'add':
      const addedToDos = [...state.todos, action.payload];
      return { ...state, todos: addedToDos };
    case 'delete':
      const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id);
      return { ...state, todos: filteredTodoState };
    case 'edit':
      const updatedToDo = { ...action.payload };
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id);
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return { ...state, todos: updatedToDos };
    default:
      return todosInitialState;
  }
}

export default App;

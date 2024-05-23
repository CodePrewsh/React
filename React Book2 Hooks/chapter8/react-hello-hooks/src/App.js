import React, { useReducer } from 'react';
import ToDoList from './ToDoList'; // Importing ToDoList component
import { v4 as uuidv4 } from 'uuid'; // Importing uuidv4 for generating unique IDs

// Initial state for todos
const todosInitialState = { 
  todos: [
    { id:1, text: "finishing writing hooks chapter"},
    { id:2, text: "play with kids"},
    { id:3, text: "read bible"}
  ]
};

// Creating a context for todos
export const TodosContext = React.createContext();

function App (){
  // Using useReducer hook to manage state and actions for todos
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>      
      {/* Providing ToDoList component with context */}
      <ToDoList />
    </TodosContext.Provider>    
  );
}

// Reducer function to handle state changes for todos
function todosReducer(state, action){ 
  switch(action.type){     
    case 'add':
      // Adding a new todo item
      const newToDo = { id: uuidv4(), text: action.payload };
      const addedToDos = [...state.todos, newToDo];
      return { ...state, todos: addedToDos };
    case 'delete':
      // Deleting a todo item
      const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id);
      return { ...state, todos: filteredTodoState };
    case 'edit':   
      // Editing a todo item
      const updatedToDo = { ...action.payload }; 
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id);
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return { ...state, todos: updatedToDos };      
    default:
      return todosInitialState; // Returning initial state if action type is unknown
  }
}

export default App;

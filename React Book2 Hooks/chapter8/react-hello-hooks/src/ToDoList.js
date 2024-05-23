import React, { useContext, useState } from 'react';
import { TodosContext } from './App'; // Importing TodosContext from App
import { Table, Form, Button } from 'react-bootstrap'; // Importing Table, Form, and Button components from react-bootstrap

function ToDoList(){
    const { state, dispatch } = useContext(TodosContext); // Accessing state and dispatch function from TodosContext
    const [todoText, setTodoText] = useState(""); // State variable for storing todo text   
    const [editMode, setEditMode] = useState(false); // State variable for tracking edit mode  
    const [editTodo, setEditTodo] = useState(null); // State variable for storing todo being edited  
    const buttonTitle = editMode ? "Edit" : "Add"; // Determining button title based on edit mode

    // Function to handle form submission
    const handleSubmit = event => {
        event.preventDefault();
        if(editMode){            
            // If in edit mode, dispatch edit action with updated todo text
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } });
            setEditMode(false); // Exiting edit mode
            setEditTodo(null); // Clearing edit todo
        }
        else{
            // If not in edit mode, dispatch add action with new todo text
            dispatch({ type: 'add', payload: todoText });
        }            
        setTodoText(""); // Clearing todo text input field
    };
      
    return(
        <div>
            {/* Form for adding or editing todo */}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">                
                    <Form.Control 
                        type="text" 
                        placeholder="Enter To Do" 
                        onChange={event => setTodoText(event.target.value)}
                        value={todoText}
                    />
                </Form.Group> 
                <Button variant="primary" type="submit">
                    {buttonTitle} {/* Displaying button title based on edit mode */}
                </Button>                               
            </Form>

            {/* Table for displaying todos */}
            <Table striped bordered hover>
                <thead>
                    <tr>                
                        <th>To Do</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapping over todos to display each todo */}
                    {state.todos.map(todo =>(
                        <tr key={todo.id}>                        
                            <td>{todo.text}</td>
                            {/* Clickable cell to edit todo */}
                            <td onClick={() => {
                                setTodoText(todo.text); // Setting todo text for editing
                                setEditMode(true); // Setting edit mode to true
                                setEditTodo(todo); // Setting todo being edited
                            }}>
                                Edit
                            </td>
                            {/* Clickable cell to delete todo */}
                            <td onClick={() => dispatch({ type:'delete', payload:todo })}>Delete</td>
                        </tr>
                    ))}                
                </tbody>
            </Table>            
        </div>
    );
}

export default ToDoList;

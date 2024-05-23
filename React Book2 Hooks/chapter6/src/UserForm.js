import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';

function UserForm() {
    // State variables for email, password, and their respective error messages
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");        

    // Function to handle form submission
    const handleSubmit = event => {
        event.preventDefault(); // Prevents default form submission behavior
        
        // Validation for email
        var emailValid = false;
        if(email.length === 0){
            setEmailError("Email is required");
        }        
        else if(email.length < 6){
            setEmailError("Email should be minimum 6 characters");
        }      
        else if(email.indexOf(' ') >= 0){        
            setEmailError('Email cannot contain spaces');                          
        }    
        else{
            setEmailError("");
            emailValid = true;
        }

        // Validation for password
        var passwordValid = false;
        if(password.length === 0){
            setPasswordError("Password is required");
        }        
        else if(password.length < 6){
            setPasswordError("Password should be minimum 6 characters");
        }      
        else if(password.indexOf(' ') >= 0){        
            setPasswordError('Password cannot contain spaces');                          
        }    
        else{
            setPasswordError("");
            passwordValid = true;
        }        

        // If both email and password are valid, alert their values
        if(emailValid && passwordValid){            
            alert('Email: ' + email + '\nPassword: ' + password); 
            // Reset email and password fields after submission
            setEmail("");
            setPassword("");
        }              
    }

    return (
        <div>
            {/* Form component with onSubmit handler */}
            <Form onSubmit={handleSubmit}>
                {/* Input field for email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} value={email}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {/* Display email error message if any */}
                {emailError.length > 0 &&
                <Alert variant="danger">{emailError}</Alert>}

                {/* Input field for password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} value={password}/>
                </Form.Group> 
                {/* Display password error message if any */}
                {passwordError.length > 0 &&
                <Alert variant="danger">{passwordError}</Alert>}           
                {/* Submit button */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>  
            {/* Display email and password entered */}
            Email entered: {email}  
            <br />
            Password entered: {password}              
        </div>
    );
}

export default UserForm;

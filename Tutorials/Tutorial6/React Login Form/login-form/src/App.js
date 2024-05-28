import React, { useState } from "react"; // Import React and useState hook
import ReactDOM from "react-dom"; // Import ReactDOM for rendering

import "./styles.css"; // Import styles

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({}); // State for storing error messages
  const [isSubmitted, setIsSubmitted] = useState(false); // State for tracking form submission status

  // User login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  // Error messages
  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  // Handle form submission
  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    // Extract username and password from the form
    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        // Successful login
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")} {/* Render error message for username */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")} {/* Render error message for password */}
        </div>
        <div className="button-container">
          <input type="submit" /> {/* Submit button */}
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? (
          <div>User is successfully logged in</div> // Message displayed on successful login
        ) : (
          renderForm // Display login form if not submitted
        )}
      </div>
    </div>
  );
}

export default App; // Export the App component as the default export

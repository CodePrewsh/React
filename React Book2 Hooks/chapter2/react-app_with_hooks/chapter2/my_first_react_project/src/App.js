import React from "react";
import Products from "./Products"; // Importing the Products component

// Function to format user's name
function formatName(user) {
  return user.firstName + " " + user.lastName;
}

// Functional Component
function App() {
  const user = {
    firstName: "Precious",
    lastName: "Bhembe",
  };

  return (
    <div>
      {/* Rendering a greeting with the formatted user's name */}
      <h1>Hello, {formatName(user)}</h1>

      {/* Rendering the Products component */}
      <Products />
    </div>
  );
}

export default App;

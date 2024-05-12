// Importing necessary modules from React library
import React, { Component } from 'react';

// Importing the Products component from './Products' file
import Products from './Products';

// Defining the main App component
class App extends Component {
  render() {
    // Rendering the main component
    return (
      <div>
        {/* Main title of the application */}
        <h1>My First React App</h1>
        
        {/* Rendering the Products component */}
        <Products />        
      </div>
    );
  }
}

// Exporting the App component to be used in other files
export default App;

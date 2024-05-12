import React, { Component } from "react";
import Products from "./Products"; // Importing the Products component

class App extends Component {
  // Method to format user's name
  formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  render() {
    const user = {
      firstName: "Precious",
      lastName: "Bhembe",
    };

    return (
      <div>
        {/* Rendering a greeting with the formatted user's name */}
        <h1>Hello, {this.formatName(user)}</h1>

        {/* Rendering the Products component */}
        <Products />
      </div>
    );
  }
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoApp from "./todo/todoApp";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return <TodoApp />;
  }
}

export default App;

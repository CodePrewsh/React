import React, { Component } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./User";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ <User />} /> 
            <Route path="/*" element={ <NotFound />} /> 
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

class NotFound extends Component {
  render() {
    return <div>Not Found</div>
  }
}

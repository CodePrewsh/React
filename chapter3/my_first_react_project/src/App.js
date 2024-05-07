import './App.css';
import React, { Component } from 'react';
import Products from './Products';
import Rating from './Rating';
import { Button } from 'react-bootstrap';

class App extends Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  render() {
    // const isValid = true;
    const user = {
      firstName: 'Precious',
      lastName: 'Bhembe'
    };

    return (
      <div>
        <h1> Hello, {this.formatName(user)}</h1>
        <Products />
        <Rating rating="1"/>
        <Rating rating="2"/>
        <Rating rating="3"/>
        <Rating rating="4"/>
        <Rating rating="5"/>

        <Button variant="outline-success">Success</Button>{' '}
 
     
     
      </div>
    );
  }
}

export default App;

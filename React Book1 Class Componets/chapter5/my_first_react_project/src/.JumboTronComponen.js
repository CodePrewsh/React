// Importing necessary modules from React library
import React, { Component } from 'react';

// Importing Jumbotron and Button components from 'react-bootstrap'
import { Jumbotron, Button } from 'react-bootstrap';

// Defining the JumboTronComponent component
class JumboTronComponent extends Component {
  constructor(props){
    super(props);
    // Initializing the component with props
  }

  // Rendering the JumboTronComponent component
  render() { 
    return (
      <div>                
        {/* Jumbotron component displaying a message */}
        <Jumbotron>
            {/* Heading inside the Jumbotron */}
            <h1>Hello, world!</h1>
            {/* Displaying children passed to the component */}
            <p>{this.props.children}</p>
            {/* Button with primary style */}
            <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>                                                                                                                                 
      </div>
    );
  }  
}

// Exporting the JumboTronComponent component to be used in other files
export default JumboTronComponent;

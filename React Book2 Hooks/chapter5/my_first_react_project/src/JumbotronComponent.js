import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'; // Importing Jumbotron and Button components from react-bootstrap

function JumbotronComponent(props) {
  // Rendering Jumbotron with props.children and a Button
  return (
    <div>
        <Jumbotron>
            <h1>Hello, world!</h1>  {/* Jumbotron heading */}
            <p>{props.children}</p> {/* Content passed as children */}
            <p><Button variant="primary">Learn more</Button></p> {/* Button with variant primary */}
        </Jumbotron>                                                                                                                                 
    </div>
  );
}
export default JumbotronComponent;

/** */

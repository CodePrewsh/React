import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function JumbotronComponent(props) {
    return (
        <div>
            {/* Jumbotron component */}
            <Jumbotron>
                <h1>Hello, world!</h1>  {/* Jumbotron title */}
                <p>{props.children}</p> {/* Display children passed to the component */}
                <p><Button variant="primary">Learn more</Button></p> {/* Button with variant primary */}
            </Jumbotron>                                                                                                                                 
        </div>
    );
}

export default JumbotronComponent;

/** 
 * This component represents a Jumbotron, which is a large callout/hero message 
 * at the top of a page. It displays a title, content (passed as children), 
 * and a primary button to learn more.
 */

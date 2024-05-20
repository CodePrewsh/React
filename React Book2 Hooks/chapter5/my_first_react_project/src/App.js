import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

import JumbotronComponent from './JumbotronComponent'; // Importing JumbotronComponent

function App() {
  return (
    <div>
        {/* Using JumbotronComponent with content inserted from the outside */}
        <JumbotronComponent>        
          This is a long sentence, and I want to insert content into the 
          jumbotron component from the outside.
        </JumbotronComponent>   
    </div>
  );
}
export default App;

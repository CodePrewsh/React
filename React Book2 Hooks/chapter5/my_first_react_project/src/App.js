import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import JumbotronComponent from './JumbotronComponent';

function App() {
  return (
    <div>
        <JumbotronComponent>        
          This is a long sentence, and I want to insert content into the 
          jumbotron component from the outside.
        </JumbotronComponent>   

    </div>
  );
}
export default App;

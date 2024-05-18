import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS

import Rating from './Rating'; // Importing the Rating component

function App() {
  return (
    <div>
      {/* Rendering multiple instances of the Rating component with different ratings */}
      <Rating rating='1' /> {/* Renders a Rating component with rating of 1 */}
      <Rating rating='2' /> {/* Renders a Rating component with rating of 2 */}
      <Rating rating='3' /> {/* Renders a Rating component with rating of 3 */}
      <Rating rating='4' /> {/* Renders a Rating component with rating of 4 */}
      <Rating rating='5' /> {/* Renders a Rating component with rating of 5 */}
    </div>
  );
}

export default App;

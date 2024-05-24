import React, { useState } from 'react';
import useFetch from './useFetch'; // Importing custom hook for fetching data
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import { Button } from 'react-bootstrap'; // Importing Button component from React Bootstrap
import Users from './Users'; // Importing Users component

const App = () => {
  // URLs for fetching data
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  
  // State to track the currently requested URL
  const [requested, setRequested] = useState(postsUrl);
  
  // Custom hook to fetch data based on the requested URL
  const data = useFetch(requested);

  return (
    <div>
      {/* Render Users component */}
      <Users />
      {/* Button to switch data request to posts */}
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      {/* Button to switch data request to todos */}
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      {/* Display the currently requested URL */}
      Requested: {requested}
      {/* Render the fetched data */}
      <ul>
        {/* Map through the fetched data and render list items */}
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

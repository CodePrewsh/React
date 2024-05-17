import React, { useState } from 'react';
import useFetch from './useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Users from './Users';


const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts",
    todosUrl = "https://jsonplaceholder.typicode.com/todos",
    
    [requested, setRequested] = useState(postsUrl),
  
    data = useFetch(requested);

  return (
    <div>
      <Users />
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      Requested:{requested}
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
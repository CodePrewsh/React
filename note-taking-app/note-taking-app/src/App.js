// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoteList from './components/noteList';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={NoteList} />
      </Switch>
    </Router>
  );
};

export default App;

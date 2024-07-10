// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NoteList />} />
      </Routes>
    </Router>
  );
};

export default App;

// src/App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/add-expense" element={user ? <AddExpense /> : <Login />} />
      <Route path="/" element={user ? <ExpenseList /> : <Login />} />
    </Routes>
  );
}

export default App;

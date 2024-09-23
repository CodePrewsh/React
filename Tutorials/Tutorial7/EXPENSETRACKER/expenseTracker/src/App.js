import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import { auth } from './firebase';

function App() {
  // State variable to hold the current user
  const [user, setUser] = useState(null);

  // Effect to listen for authentication state changes
  useEffect(() => {
    // Set up an observer on the Auth object to listen for changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update state with the current user
    });

    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <Routes>
      {/* Route for the login page */}
      <Route path="/login" element={<Login />} />
      {/* Route for adding an expense */}
      {/* Redirects to Login if no user is authenticated */}
      <Route path="/add-expense" element={user ? <AddExpense /> : <Login />} />
      {/* Route for displaying the expense list */}
      {/* Redirects to Login if no user is authenticated */}
      <Route path="/" element={user ? <ExpenseList /> : <Login />} />
    </Routes>
  );
}

export default App;

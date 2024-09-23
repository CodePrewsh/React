import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase'; // Corrected path to Firebase configuration

function ExpenseList() {
  // State variables for managing expenses and new expense input
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: '', amount: '' });

  // Effect hook to fetch expenses from Firestore on component mount
  useEffect(() => {
    const fetchExpenses = async () => {
      // Fetch all documents from the 'expenses' collection
      const querySnapshot = await getDocs(collection(db, 'expenses'));
      // Map Firestore documents to a list of expense objects
      const expensesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      // Update state with the fetched expenses
      setExpenses(expensesList);
    };

    fetchExpenses(); // Call the function to fetch expenses
  }, []); // Empty dependency array means this effect runs once on mount

  // Handler function to update newExpense state based on input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  // Handler function to add a new expense to Firestore
  const handleAddExpense = async () => {
    try {
      // Add new expense document to Firestore
      const docRef = await addDoc(collection(db, 'expenses'), newExpense);
      // Update state with the newly added expense
      const updatedExpenses = [...expenses, { id: docRef.id, ...newExpense }];
      setExpenses(updatedExpenses);
      // Reset input fields
      setNewExpense({ name: '', amount: '' });
    } catch (e) {
      console.error('Error adding document: ', e); // Log any errors
    }
  };

  // Handler function to delete an expense from Firestore
  const handleDeleteExpense = async (id) => {
    try {
      // Delete the document from Firestore
      await deleteDoc(doc(db, 'expenses', id));
      // Update state to remove the deleted expense
      const updatedExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(updatedExpenses);
    } catch (e) {
      console.error('Error deleting document: ', e); // Log any errors
    }
  };

  return (
    <div>
      <h2>Expense List</h2>
      <div>
        {/* Input fields for adding a new expense */}
        <input
          type="text"
          name="name"
          placeholder="Expense Name"
          value={newExpense.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={handleInputChange}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      {/* Render the list of expenses or a message if no expenses are found */}
      {expenses.length > 0 ? (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              <strong>{expense.name}</strong>: R{expense.amount}{' '}
              <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No expenses found.</p>
      )}
    </div>
  );
}

export default ExpenseList;

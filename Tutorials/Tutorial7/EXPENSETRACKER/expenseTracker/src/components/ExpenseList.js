import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase'; // Corrected path

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: '', amount: '' });

  useEffect(() => {
    const fetchExpenses = async () => {
      const querySnapshot = await getDocs(collection(db, 'expenses'));
      const expensesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setExpenses(expensesList);
    };

    fetchExpenses();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleAddExpense = async () => {
    try {
      const docRef = await addDoc(collection(db, 'expenses'), newExpense);
      const updatedExpenses = [...expenses, { id: docRef.id, ...newExpense }];
      setExpenses(updatedExpenses);
      setNewExpense({ name: '', amount: '' });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await deleteDoc(doc(db, 'expenses', id));
      const updatedExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(updatedExpenses);
    } catch (e) {
      console.error('Error deleting document: ', e);
    }
  };

  return (
    <div>
      <h2>Expense List</h2>
      <div>
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

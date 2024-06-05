import React, { useState } from 'react';

function AddExpense({ onAddExpense }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!amount || !description) {
      alert('Please enter both amount and description.');
      return;
    }

    // Call the parent component's function to add the expense
    onAddExpense({ amount: parseFloat(amount), description });
    
    // Reset input fields
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleAddExpense}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;

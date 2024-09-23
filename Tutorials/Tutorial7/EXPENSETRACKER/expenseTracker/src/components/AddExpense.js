import React, { useState } from 'react';

function AddExpense({ onAddExpense }) {
  // State variables to hold the input values for amount and description
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  // Handler function to process the form submission
  const handleAddExpense = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if both amount and description are provided
    if (!amount || !description) {
      alert('Please enter both amount and description.'); // Alert if any field is empty
      return; // Exit the function if validation fails
    }

    // Call the parent component's function to add the expense
    onAddExpense({ amount: parseFloat(amount), description });
    
    // Reset input fields after adding the expense
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={handleAddExpense}>
      {/* Input field for the expense amount */}
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      {/* Input field for the expense description */}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      {/* Button to submit the form */}
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;

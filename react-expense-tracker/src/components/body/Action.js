import React, { useState } from 'react';

const Action = ({ onAddIncome, onDeductExpense }) => {
  const [amount, setAmount] = useState('');

  const handleInputChange = (e) => {
    setAmount(e.target.value);
  };

  const handleAddIncome = () => {
    const value = Number(amount);
    if (value > 0) {
      onAddIncome(value);
      setAmount('');
    }
  };

  const handleDeductExpense = () => {
    const value = Number(amount);
    if (value > 0) {
      onDeductExpense(value);
      setAmount('');
    }
  };

  return (
    <div>
      <h2>Add transaction</h2>
      <div>
        <input 
          type="number" 
          placeholder="Enter amount" 
          value={amount}
          onChange={handleInputChange} 
        />
        <button className="income" onClick={handleAddIncome}>+ Income</button>
        <button className="expense" onClick={handleDeductExpense}>- Expense</button>
      </div>
    </div>
  );
};

export default Action;
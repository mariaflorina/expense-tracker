import React, { useState } from 'react';
import Action from './body/Action';
import Balance from './body/Balance';
import TransactionHistory from './body/TransactionHistory';

const Body = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleAddIncome = (amount) => {
    setBalance(balance + amount);
    setTransactions([...transactions, { type: 'Income', amount }]);
  };

  const handleDeductExpense = (amount) => {
    setBalance(balance - amount);
    setTransactions([...transactions, { type: 'Expense', amount }]);
  };

  const handleDeleteTransaction = (index) => {
    const transaction = transactions[index];
    const newTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(newTransactions);
    if (transaction.type === 'Income') {
      setBalance(balance - transaction.amount);
    } else {
      setBalance(balance + transaction.amount);
    }
  };

  return (
    <div>
      <Action onAddIncome={handleAddIncome} onDeductExpense={handleDeductExpense} />
      <Balance balance={balance} />
      <TransactionHistory transactions={transactions} onDeleteTransaction={handleDeleteTransaction} />
    </div>
  );
};

export default Body;
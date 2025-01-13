import React, { useState, useEffect } from 'react';
import Action from './body/Action';
import Balance from './body/Balance';
import TransactionHistory from './body/TransactionHistory';

const Body = () => {
  const [balance, setBalance] = useState(() => {
    return JSON.parse(localStorage.getItem('balance')) || 0;
  });
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem('transactions')) || [];
  });

  useEffect(() => {
    localStorage.setItem('balance', JSON.stringify(balance));
  }, [balance]);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleAddIncome = (amount) => {
    const newTransactions = [...transactions, { type: 'Income', amount }];
    setTransactions(newTransactions);
    setBalance(balance + amount);
  };

  const handleDeductExpense = (amount) => {
    const newTransactions = [...transactions, { type: 'Expense', amount }];
    setTransactions(newTransactions);
    setBalance(balance - amount);
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
      <Balance balance={balance} />
      <Action onAddIncome={handleAddIncome} onDeductExpense={handleDeductExpense} />
      <TransactionHistory transactions={transactions} onDeleteTransaction={handleDeleteTransaction} />
    </div>
  );
};

export default Body;
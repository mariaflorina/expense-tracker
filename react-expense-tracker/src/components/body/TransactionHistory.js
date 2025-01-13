import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions, onDeleteTransaction }) => {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTransactions = transactions.filter(transaction => 
    filter === 'All' || transaction.type === filter
  );

  return (
    <div>
      <h2>Transactions History</h2>
      <div>
        <label htmlFor="filter">Filter by type: </label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>
      <ul>
        {filteredTransactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type}: {transaction.amount}€
            <button className="delete" onClick={() => onDeleteTransaction(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  ).isRequired,
  onDeleteTransaction: PropTypes.func.isRequired
};

export default TransactionHistory;
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TransactionHistory from '../../components/body/TransactionHistory';

describe('TransactionHistory Component', () => {
  test('renders transaction details', () => {
    const transactions = [
      { id: 1, type: 'Expense', amount: 500 },
      { id: 2, type: 'Income', amount: 1000 },
    ];
    render(<TransactionHistory transactions={transactions} />);
    expect(screen.getByText(/Expense: 500€/)).toBeInTheDocument();
    expect(screen.getByText(/Income: 1000€/)).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Body from '../components/Body';

describe('Body Component', () => {
  test('renders initial balance and transactions', () => {
    render(<Body />);
    expect(screen.getByText(/Balance/)).toBeInTheDocument();
    expect(screen.getByText(/Transactions History/)).toBeInTheDocument();
  });

  test('adds income and updates balance and transactions', () => {
    render(<Body />);
    const addButton = screen.getByText(/Add Income/);
    fireEvent.click(addButton);
    const amountInput = screen.getByPlaceholderText(/Enter amount/);
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(screen.getByText(/Add Income/));
    expect(screen.getByText(/Balance: 100€/)).toBeInTheDocument();
    expect(screen.getByText(/Income: 100€/)).toBeInTheDocument();
  });

  test('deducts expense and updates balance and transactions', () => {
    render(<Body />);
    const deductButton = screen.getByText(/Deduct Expense/);
    fireEvent.click(deductButton);
    const amountInput = screen.getByPlaceholderText(/Enter amount/);
    fireEvent.change(amountInput, { target: { value: '50' } });
    fireEvent.click(screen.getByText(/Deduct Expense/));
    expect(screen.getByText(/Balance: -50€/)).toBeInTheDocument();
    expect(screen.getByText(/Expense: 50€/)).toBeInTheDocument();
  });

  test('deletes a transaction and updates balance', () => {
    render(<Body />);
    const addButton = screen.getByText(/Add Income/);
    fireEvent.click(addButton);
    const amountInput = screen.getByPlaceholderText(/Enter amount/);
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(screen.getByText(/Add Income/));
    const deleteButton = screen.getByText(/Delete/);
    fireEvent.click(deleteButton);
    expect(screen.getByText(/Balance: 0€/)).toBeInTheDocument();
    expect(screen.queryByText(/Income: 100€/)).not.toBeInTheDocument();
  });
});
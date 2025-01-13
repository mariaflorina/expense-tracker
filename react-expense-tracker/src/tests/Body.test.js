import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Body from '../components/Body';

describe('Body Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders initial balance and transactions', () => {
    render(<Body />);
    expect(screen.getByText(/balance/i)).toBeInTheDocument();
    expect(screen.getByText(/transactions history/i)).toBeInTheDocument();
  });

  test('adds income and updates balance and transactions', () => {
    render(<Body />);
    const addButton = screen.getByText(/add income/i);
    fireEvent.click(addButton);
    const amountInput = screen.getByPlaceholderText(/enter amount/i);
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(screen.getByText(/add income/i));
    expect(screen.getByText(/balance: 100/i)).toBeInTheDocument();
    expect(screen.getByText(/income: 100/i)).toBeInTheDocument();
  });

  test('deducts expense and updates balance and transactions', () => {
    render(<Body />);
    const deductButton = screen.getByText(/deduct expense/i);
    fireEvent.click(deductButton);
    const amountInput = screen.getByPlaceholderText(/enter amount/i);
    fireEvent.change(amountInput, { target: { value: '50' } });
    fireEvent.click(screen.getByText(/deduct expense/i));
    expect(screen.getByText(/balance: -50/i)).toBeInTheDocument();
    expect(screen.getByText(/expense: 50/i)).toBeInTheDocument();
  });

  test('deletes a transaction and updates balance', () => {
    render(<Body />);
    const addButton = screen.getByText(/add income/i);
    fireEvent.click(addButton);
    const amountInput = screen.getByPlaceholderText(/enter amount/i);
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(screen.getByText(/add income/i));
    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);
    expect(screen.getByText(/balance: 0/i)).toBeInTheDocument();
    expect(screen.queryByText(/income: 100/i)).not.toBeInTheDocument();
  });
});
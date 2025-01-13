import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Action from '../components/body/Action';

describe('Action Component', () => {
  test('renders input and buttons', () => {
    render(<Action onAddIncome={jest.fn()} onDeductExpense={jest.fn()} />);
    expect(screen.getByPlaceholderText(/Enter amount/)).toBeInTheDocument();
    expect(screen.getByText(/Add Income/)).toBeInTheDocument();
    expect(screen.getByText(/Deduct Expense/)).toBeInTheDocument();
  });

  test('calls onAddIncome with correct value', () => {
    const onAddIncome = jest.fn();
    render(<Action onAddIncome={onAddIncome} onDeductExpense={jest.fn()} />);
    const input = screen.getByPlaceholderText(/Enter amount/);
    fireEvent.change(input, { target: { value: '100' } });
    fireEvent.click(screen.getByText(/Add Income/));
    expect(onAddIncome).toHaveBeenCalledWith(100);
    expect(input.value).toBe('');
  });

  test('calls onDeductExpense with correct value', () => {
    const onDeductExpense = jest.fn();
    render(<Action onAddIncome={jest.fn()} onDeductExpense={onDeductExpense} />);
    const input = screen.getByPlaceholderText(/Enter amount/);
    fireEvent.change(input, { target: { value: '50' } });
    fireEvent.click(screen.getByText(/Deduct Expense/));
    expect(onDeductExpense).toHaveBeenCalledWith(50);
    expect(input.value).toBe('');
  });
});
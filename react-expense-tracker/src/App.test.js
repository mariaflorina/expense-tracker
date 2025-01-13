import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders Header and Body components', () => {
    render(<App />);
    expect(screen.getByText(/Expense Tracker/)).toBeInTheDocument();
    expect(screen.getByText(/Balance/)).toBeInTheDocument();
    expect(screen.getByText(/Transactions History/)).toBeInTheDocument();
  });
});
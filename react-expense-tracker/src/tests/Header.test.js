import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header Component', () => {
    test('renders header with text', () => {
        render(<Header />);
        expect(screen.getByText(/Expense Tracker/)).toBeInTheDocument();
    });
});
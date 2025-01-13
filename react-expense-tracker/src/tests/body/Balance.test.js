import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Balance from '../../components/body/Balance';

describe('Balance Component', () => {
    test('renders the balance with dollar sign and the balance amount', () => {
        render(<Balance balance={1000} />);
        const balanceElement = screen.getByText(/Balance: 1000€/);
        expect(balanceElement).toBeInTheDocument();
    });
});
# Expense Tracker

An expense tracker application built with React. This application allows users to track their income and expenses, view transaction history, and filter transactions by type. The data is persisted using local storage.

## Functionality

- Add income and expenses with descriptions
- View current balance
- View transaction history
- Filter transactions by type (All, Income, Expense)
- Delete transactions
- Data persistence using local storage

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **PropTypes**: A library for type-checking props passed to React components.
- **Local Storage**: A web storage API for persisting data in the browser.
- **Jest**: A JavaScript testing framework for unit tests.
- **React Testing Library**: A set of helpers for testing React components.
- **CSS**: Used for styling the application.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```
4. Open your browser and navigate to http://localhost:3000 .

## Configuration

No additional configuration is required. The application uses local storage to persist data, so it works out of the box.

## How to Use

- Add Transactions: Use the input fields to enter the amount and description, then click "Add Income" or "Deduct Expense" to add a transaction.
- View Balance: The current balance is displayed at the top of the application.
- View Transaction History: The transaction history is displayed below the balance. Use the filter dropdown to filter transactions by type.
- Delete Transactions: Click the "Delete" button next to a transaction to remove it from the history.

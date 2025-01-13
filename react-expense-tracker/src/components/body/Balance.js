import React from 'react';
import PropTypes from 'prop-types';

const Balance = ({ balance }) => {
  return (
    <div className='balance'>
      <h2>Balance: {balance}€</h2>
    </div>
  );
};
Balance.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Balance;
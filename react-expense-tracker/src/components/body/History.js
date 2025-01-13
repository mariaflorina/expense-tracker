import React from 'react';

function History() {

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li>
        <li className="plus">
          Salary <span>+$1000</span><button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
}

export default History;
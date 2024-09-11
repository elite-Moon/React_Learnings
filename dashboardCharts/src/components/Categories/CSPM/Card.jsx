import React from 'react';
import './Card.css';

const Card = ({ title, children }) => {
  return (
    <div className='card'>
      <h3>{title}</h3> {/* Using the title prop */}
      <div className='card-content'>
        {children} {/* Placeholder for chart or graph */}
      </div>
    </div>
  );
};

export default Card;

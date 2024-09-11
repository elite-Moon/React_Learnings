import React from 'react';

const CardComponent = ({ image }) => {
  return (
    <div className='main-card'>
      <img src={image} alt='card-pic' />
      <p>{status}</p>
      <h3>{title}</h3>

      <button>Participate Now</button>
    </div>
  );
};

export default CardComponent;

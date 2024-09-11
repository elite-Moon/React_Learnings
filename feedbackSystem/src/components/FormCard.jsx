// import React from 'react';

const FormCard = ({ form, onDelete }) => {
  return (
    <div className='form-card'>
      <h3>{form.title}</h3>
      <p>{form.description}</p>
      <button onClick={() => onDelete(form.id)}>Delete</button>
    </div>
  );
};

export default FormCard;

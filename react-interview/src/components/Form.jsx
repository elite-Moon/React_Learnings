import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState();
  const [submitdata, setSubmitdata] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitdata({ name });
    setName('');
  };
  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      {submitdata} &&{' '}
      <div>
        <h2>SubmiteData:</h2>
      </div>
    </div>
  );
}

export default Form;

import React, { useState } from 'react';

function CounterNum() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Inc</button>
      <button onClick={() => setCounter(counter - 1)}>Dec</button>
      <h2>Counter value is : {counter}</h2>
    </div>
  );
}

export default CounterNum;

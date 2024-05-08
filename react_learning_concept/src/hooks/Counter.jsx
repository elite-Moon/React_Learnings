import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(10);

  // let counter = 10;

  const incValue = () => {
    console.log('value inc', counter);
    // counter = counter + 1;
    if (counter >= 10 && counter < 20) {
      setCounter(counter + 1);
    } else {
      alert('counter value must be in 10 - 20');
    }
  };

  const decValue = () => {
    console.log('value dec', counter);
    if (counter > 10) {
      setCounter(counter - 1);
    } else {
      alert('counter value must be in 10 - 20');
    }
  };

  return (
    <div>
      <h1>counter concept with hook</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={incValue}>inc value</button>
      <br />
      <br />
      <button onClick={decValue}>dec value</button>
      <footer>footer value : {counter}</footer>
    </div>
  );
}

export default Counter;

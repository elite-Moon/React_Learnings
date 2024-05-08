import { useState } from 'react';

function CounterInterviewQues() {
  const [counter, setCounter] = useState(10);

  // let counter = 10;

  const incValue = () => {
    console.log('value inc', counter);
    // counter = counter + 1;
    setCounter(counter + 1); //! So if ques is if we want to inc value with one click of button so it will change with all four value summation of sinle value at a time
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  //** So if we want to inc this value with multiple update value like above with setCounter it will not change in  summation value it will make it bundle and chnage at a single value
  //** */ bcoz of useState it will be possible */

  const decValue = () => {
    console.log('value dec', counter);
    //! here again but if we want to do that thing we have to do callback fn with setCounter
    setCounter((decCounter) => decCounter - 1);
    setCounter((decCounter) => decCounter - 1);
    setCounter((decCounter) => decCounter - 1);
    setCounter((decCounter) => decCounter - 1);
    //** this can do operation in a batch format thats what is not possible above bcoz react react useState algo which is good but here it is possible */
  };

  return (
    <div>
      <h1>counter ques for interview</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={incValue}>inc value</button>
      <br />
      <br />
      <button onClick={decValue}>dec value</button>
      <footer>footer value : {counter}</footer>
    </div>
  );
}

export default CounterInterviewQues;

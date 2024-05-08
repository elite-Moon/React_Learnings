import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('grey');
  return (
    <>
      <div
        className='w-dvw h-dvh p-3 duration-100 overflow-y-hidden'
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 scroll-mx-0 overflow-y-hidden'>
          <button
            onClick={() => setColor('red')} //! onClick always expect a function so it good to be pass a function inside that
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => setColor('blue')}
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor('green')}
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          test
        </div>
      </div>
    </>
  );
}

export default App;

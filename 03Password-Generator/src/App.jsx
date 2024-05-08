// eslint-disable-next-line no-unused-vars
import { useState, useCallback, useRef } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numcheck, setNumCheck] = useState(false);
  const [charcheck, setCharCheck] = useState(false);
  const [password, setPassword] = useState('');

  //using ref hook
  const inputPassRef = useRef(null);

  const copyInputPasstoClipBoard = useCallback(() => {
    inputPassRef.current?.select();
    inputPassRef.current?.setSelectionRange(0, 99);

    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numcheck) str += '0123456789';
    if (charcheck) str += '!@#$%^&*()_+=-';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numcheck, charcheck, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numcheck, charcheck, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadoow-md rounded-lg py-5 px-4 my-8 text-orange-300 bg-gray-600'>
        <h1>Password Generator</h1>
        <div className='flex shadow-sm rounded-lg overflow-hidden md-6'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-2 px-8 tracking-wide'
            readOnly
            placeholder='password generate'
            ref={inputPassRef}
          />
          <button
            className='bg-green-700 outline-none w-55 px-2'
            onClick={copyInputPasstoClipBoard}
          >
            copy
          </button>
          {/* to do action of copy from input we have to communicate between input
          and button for that we have to take refrence of input from useRef hook */}
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-3  py-2'>
            <input
              type='range'
              min={6}
              max={99}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className='cursor-pointer'
            />
            <label htmlFor=''>length :{length}</label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              type='checkbox'
              id='numcheck'
              defaultChecked={numcheck}
              onChange={() => {
                setNumCheck((prev) => !prev);
              }}
            />
            <label htmlFor='numberCheck'>Numbers</label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              type='checkbox'
              id='charcheck'
              defaultChecked={charcheck}
              onChange={() => {
                setCharCheck((prev) => !prev);
              }}
            />
            <label htmlFor='charCheck'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

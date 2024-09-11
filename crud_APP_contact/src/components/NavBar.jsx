import React from 'react';
import { CiSearch } from 'react-icons/ci';
function NavBar() {
  return (
    <div className='bg-cyan-400 w-[400px]  items-center    '>
      <div
        className=' h-[60px] w-[400px] bg-yellow-300  rounded-md flex items-center justify-center gap-3
      '
      >
        <img src='firebase.svg' alt='nav-loog' />
        <h1>contact navbar</h1>
      </div>
    </div>
  );
}

export default NavBar;

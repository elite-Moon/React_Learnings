import React from 'react';
import { BiMessageRoundedAdd } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='main-nav'>
      <div className='nav-text'>
        <BiMessageRoundedAdd />
        <h2>USER DASHBOARD</h2>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;

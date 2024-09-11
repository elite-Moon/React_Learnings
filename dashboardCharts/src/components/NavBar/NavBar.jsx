import React from 'react';
import './NavBar.css';
import { IoMdSearch } from 'react-icons/io';
import { MdNotificationsActive } from 'react-icons/md';

const NavBar = () => {
  return (
    <div className='main'>
      <div className='menu'>
        <ul>
          <li>
            <a href='/' className='nav-link'>
              Home
            </a>
          </li>
          <li>
            <a href='/'>Dashboard</a>
          </li>
        </ul>
      </div>
      <div className='search'>
        <IoMdSearch
          style={{
            backgroundColor: 'inherit',
            position: 'fixed',
            marginLeft: '0.2rem',
            marginTop: '0.4rem',
            fontSize: '1.3rem',
          }}
        />
        <input className='input' type='text' placeholder='Search anything...' />
      </div>
      <div className='notification'>
        <MdNotificationsActive />
      </div>
    </div>
  );
};

export default NavBar;

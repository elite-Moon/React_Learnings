import React from 'react';
import './Navigation.css';
function Navigation() {
  return (
    <nav className='container'>
      <div className='logo'>
        <img src='/public/logo.png' alt='logo' />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;

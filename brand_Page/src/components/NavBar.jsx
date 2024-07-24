import './NavBar.css';
function NavBar() {
  return (
    <div>
      <nav>
        <div className='logo'>
          <img src='public/brand_logo.png' alt='logo' />
        </div>
        <ul>
          <li style={{ cursor: 'pointer' }} href='#'>
            Menu
          </li>
          <li style={{ cursor: 'pointer' }} href='#'>
            Locations
          </li>
          <li style={{ cursor: 'pointer' }} href='#'>
            About
          </li>
          <li style={{ cursor: 'pointer' }} href='#'>
            Contact
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
}

export default NavBar;

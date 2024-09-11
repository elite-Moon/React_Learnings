import './Website.css';

const Website = () => {
  return (
    <div className='main'>
      <nav className='navbar'>
        <ul className='navbar-links'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/services'>Services</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
        <div className='nav-btn'>
          <button> Lets Talk </button>
          <span className='arrow'>→</span>
        </div>
      </nav>
      <div className='hero'>
        <div className='hero-section'>
          <img
            src='/public/pexels-bradleyhook.jpg'
            alt=''
            className='background-image'
          />
          <div className='content'>
            <h1>Creative Visual Designer</h1>
            <p>Currently available for freelance worldwide</p>
            <button>Lets Talk</button>
          </div>
        </div>
      </div>
      <div className='footer'>
        <h1>I am a Brand Desginer & Webflow Designer</h1>
      </div>
    </div>
  );
};

export default Website;

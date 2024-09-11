import React from 'react';
import '../styles/Dashboard.css';
import SearchComponent from './SearchComponent';

const Dashboard = () => {
  return (
    <div className='main'>
      <div className='navbar'>
        <img className='image' src='Navlogo.jpg' alt='nav-logo' />
      </div>
      <div className='banner'>
        <div className='banner-upper'>
          <div className='banner-left'>
            <h2>Accelerate Innovation with Global AI Challenges</h2>
            <p>
              AI Challenges at DPhi simulate real-world problems. It is a great
              place to put your AI/Data Science skills to test on diverse
              datasets allowing you to foster learning through competitions.
            </p>
            <button>Create Challenge</button>
          </div>
          <div className='banner-right'>
            <img className='image' src='Rocket.png' alt='nav-logo' />
          </div>
        </div>
        <div className='banner-lower'>
          <div className='banner-lower-first'>
            <img src='logo1.png' alt='' />
            <div>
              <h3>100K+</h3>
              <p>AI MODEL SUBMISSION</p>
            </div>
          </div>
          <div className='divider'></div>
          <div className='banner-lower-second'>
            <img src='logo2.png' alt='' />

            <div>
              <h3>50K+</h3>
              <p>DATA SCIENTIST</p>
            </div>
          </div>
          <div className='divider'></div>
          <div className='banner-lower-third'>
            <img src='logo3.png' alt='' />
            <div>
              <h3>100+</h3>
              <p>AI CHALLENGES HOSTED</p>
            </div>
          </div>
        </div>
      </div>
      <div className='dashboard-content'>
        <div>
          <h2>
            Why Participants in{' '}
            <span style={{ color: 'green' }}>AI Challenges</span>
          </h2>
        </div>
        <div className='card-design'>
          <div className='card'>
            <img src='cardicon1.png' alt='prove skill' />
            <h3>Prove your skills</h3>
            <p>
              Gain substantial experience by solving real-world problems and pit
              against others to come up with innovative solutions.
            </p>
          </div>
          <div className='card'>
            <img src='cardicon2.png' alt='' />
            <h3>Learn from community</h3>
            <p>
              One can look and analyze the solutions submitted by the other Data
              Scientists in the community and learn from them.
            </p>
          </div>
          <div className='card'>
            <img src='cardicon3.png' alt='' />
            <h3>Challenge yourself</h3>
            <p>
              There is nothing for you to lose by participating in a challenge.
              You can fail safe, learn out of the entire experience
            </p>
          </div>
          <div className='card'>
            <img src='cardicon4.png' alt='' />
            <h3>Earn recognition</h3>
            <p>
              You will stand out from the crowd if you do well in AI challenges.
              It not only helps you shine in the community but   also earns
              rewards.
            </p>
          </div>
        </div>
      </div>
      <div className='dashboard-challenge'>
        <div className='search-component'>
          <SearchComponent />
        </div>
        <div className='card-component'>cards component</div>
      </div>
    </div>
  );
};

export default Dashboard;

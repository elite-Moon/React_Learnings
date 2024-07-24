import React from 'react';
import './MainCompo.css';

function MainCompo() {
  return (
    <div className='main'>
      <div className='main-content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className='btn-sec'>
          <button>Shop Now</button>
          <button>Category</button>
        </div>
        <div className='shop-now'>
          <p>Also Available On</p>
          <div className='brand-logo'>
            <img src='/public/amazon.png' alt='amazon-logo' />
            <img src='/public/flipkart.png' alt='flipkart-logo' />
          </div>
        </div>
      </div>

      <div className='main-img'>
        <img
          src='/public/shoe_image.png'
          alt='shoe-pic'
          width={500}
          height={540}
        />
      </div>
    </div>
  );
}

export default MainCompo;

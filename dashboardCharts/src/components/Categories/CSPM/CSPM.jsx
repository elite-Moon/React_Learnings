import React from 'react';
import Card from './Card';
import Chart from './Chart';
import './CSPM.css';

const CSPM = () => {
  return (
    <div className='cspm-main'>
      <h3 style={{ position: 'absolute' }}>CSPM EXECUTIVE</h3>
      <div className='card-container'>
        <div className='card'>
          <Card title='Cloud '>
            <Chart />
            <Chart />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CSPM;

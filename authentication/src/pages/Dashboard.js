import React from 'react';
import Frodo from '../img/frodo.png';

const Dashboard = () => {
  return (
    <div className='page dashboard'>
      <div>
        <img src={Frodo} alt='Frodo' />
        <h2>Welcome Persom</h2>
      </div>
    </div>
  );
};

export default Dashboard;

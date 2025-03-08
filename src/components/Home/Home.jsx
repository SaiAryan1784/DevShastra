import React from 'react';
import Button from '../../utils/Button';

function Home() {
  return (
    <div className='h-screen flex flex-col items-center justify-center my-4 -mt-8' id='home'>
      <h1 className='text-[8rem] font-bold text-[#783128]'>DevShastra</h1>
      <p className='text-4xl font-semibold text-[#783128]'>CODE. COLLAB. CONQUER.</p>
      <div className='flex space-x-4 mt-8'>
        <Button element='Register' />
      </div>
    </div>
  );
}

export default Home;
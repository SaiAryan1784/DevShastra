import React from 'react'

const Prizes = () => {
  return (
    <div>
      <h1 className='font-bold  text-3xl text-center'>Prizes</h1>

      <h2 className='font-bold text-2xl text-center'>Total Prize Pool: ₹1,00,000</h2>
      
      <div>
        <div className='flex items-center justify-center gap-4 flex-wrap'>
          <div className='flex flex-col items-center justify-center gap-4 mt-10 p-8 rounded-2xl border-[#773129] border-3 bg-[#B89C7B] w-80'>
            <div className='bg-white p-4 rounded-full'>
              <h1 className='text-8xl py-4'>🥈</h1>
            </div>
            <h1 className='font-bold text-2xl'>First Runner Up</h1>
            <h2 className='font-bold text-3xl text-yellow-200'>₹50,000</h2>
          </div>
          <div className='flex flex-col items-center justify-center gap-4 mt-10 p-8 rounded-2xl border-[#773129] border-3 bg-[#B89C7B] w-80'>
            <div className='bg-white p-4 rounded-full'>
              <img src="./first.png" alt="" />
            </div>
            <h1 className='font-bold text-2xl'>Winner</h1>
            <h2 className='font-bold text-3xl text-yellow-200'>₹30,000</h2>
          </div>
          <div className='flex flex-col items-center justify-center gap-4 mt-10 p-8 rounded-2xl border-[#773129] border-3 bg-[#B89C7B] w-80'>
            <div className='bg-white p-4 rounded-full'>
              <h1 className='text-8xl py-4'>🥉</h1>
            </div>
            <h1 className='font-bold text-2xl'>Second Runner Up</h1>
            <h2 className='font-bold text-3xl text-yellow-200'>₹20,000</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prizes
import React from 'react'

export default function Exam() {
  return (
    <div className='flex w-full mb-10 py-20 px-8'>
        <div className=' w-[50%] h-[500px]'>
            <img src="src/assets/img/1.png" alt="" className='w-full h-full' />
        </div>
        <div className='w-[50%] px-6 py-20'>
            <h2 className='font-bold text-4xl mb-8'>
                I will stay with you until you pass your exam.
            </h2>

            <h5 className='font-semibold text-blue-400  mb-8 text-lg'>
                Who else do you know who'll do that for you?
            </h5>

            <p className='font-extralight text-black text-lg mb-12'>
            So I said codswallop car boot cheers mufty I don't want no agro are you taking the piss cheeky my lady gutted mate excuse my french, gormless have it cras.
            </p>

            <button className='font-semibold text-white bg-blue-400 px-10 py-5 rounded-lg shadow-md'>
                know More 
            </button>
        </div>
    </div>
  )
}

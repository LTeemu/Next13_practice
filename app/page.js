'use client';
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="relative h-[150vh] bg-[url(/abstract-background-g458751548_640.jpg)]">
      <div className='bg-[#272525fb] min-h-full'>

        <div className='flex flex-col w-full h-full px-8 border-b border-stone-700 sm:flex-row'>
          <div className='flex items-center justify-center flex-1 order-2 sm:order-1'>
            <div className='flex flex-col'>
              <h1 className='text-4xl font-semibold text-white'>Organic plantbased<br /> potato milk is here!</h1>
              <button className='px-4 py-2 mt-6 mb-2 text-xl font-semibold text-white border-4 border-gray-400 rounded-full bg-stone-900 w-max'>Press button</button>
            </div>
          </div>
          <div className='relative min-h-[300px] max-h-[900px] h-[60vh] flex items-center justify-center flex-1 order-1 sm:order-2'>
            <Image src={'/giphy.gif'} alt='gif' fill className='object-contain m-auto max-h-[60%]' />
          </div>
        </div>

      </div>
    </div>
  )
}

'use client';
import React from 'react'

function Station({ station, onClick }) {
  return (
    <div key={station.stationuuid} onClick={onClick} className='flex flex-row min-h-[2rem] bg-slate-300 cursor-pointer '>
      <div className='relative w-[2rem] h-full'>
        <img
          src={station.favicon ? station.favicon : '/radio.png'}
          alt={station.name}
          className='object-contain object-left aspect-square'
        />
      </div>
      <div className='flex-1 p-1'>
        <h1>{station.name}</h1>
        <p>{station.country + (station.state ? ', ' + station.state : '')}</p>
        <p>{station.language}</p>
        <p>{station.tags}</p>
        <p>{station.votes}</p>
      </div>
    </div>
  )
}

export default Station
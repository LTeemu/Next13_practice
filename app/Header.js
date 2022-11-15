"use client"
import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import Menu from './Menu';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <Menu open={menuOpen} />
      <header className='fixed z-20 flex items-center justify-end top-4 right-4'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='flex items-center justify-center rounded-full bg-amber-800 w-14 h-14'>
          <FiMenu size={32} color='white' />
        </button>
      </header>
    </>
  )
}

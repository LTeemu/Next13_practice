"use client"
import React from 'react'
import '../styles/globals.css'
import Menu from './Menu';

export default function layout({ children }) {
  return (
    <html>
      <head></head>
      <body className='bg-blue-100'>
        <Menu />
        {children}
      </body>
    </html>
  )
}

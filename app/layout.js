"use client"
import React from 'react'
import '../styles/globals.scss'
import Menu from './Menu';

export default function layout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body className='bg-blue-100'>
        <Menu />
        {children}
      </body>
    </html>
  )
}

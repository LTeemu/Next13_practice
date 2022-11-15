'use client';
import React, { useEffect, useRef, useState } from 'react'
import { gsap, Linear } from "gsap";
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menu = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true, defaults: { ease: Linear, duration: 0.4 } })
    tl.current.to(menu.current, { top: '-1rem', right: '-1rem', width: '100vw', height: '100vh', borderRadius: 0 })
    tl.current.set(".link", { opacity: 1 }, '>')
    tl.current.fromTo(".linkCover", { height: '100%' }, { height: 0, pointerEvents: 'auto', stagger: 0.2, duration: 0.3, ease: Linear }, '<+0.2')
  }, [])

  useEffect(() => {
    menuOpen ? tl.current.timeScale(1).play() : tl.current.timeScale(2).reverse()
  }, [menuOpen])

  return (
    <div className='fixed z-20 flex items-center justify-center rounded-full right-4 top-4 h-[60px] w-[60px]'>
      <button onClick={() => setMenuOpen(!menuOpen)} className='absolute z-20 flex items-center justify-center w-full h-full rounded-full bg-stone-900'>
        <FiMenu size={32} color='white' />
      </button>
      <div ref={menu} className='absolute top-0 right-0 z-10 w-full h-full bg-stone-800 outline outline-gray-400' style={{ borderRadius: 99 }}>
        <nav className='absolute flex flex-col px-4 mt-[120px] w-full items-center text-3xl'>
          <div className='relative opacity-0 link'>
            <div className='absolute top-0 z-20 w-full my-1 pointer-events-none bg-stone-800 linkCover'></div>
            <Link href="/" className='z-10 text-white before:w-0 hover:before:w-full before:-z-10 before:h-1 hover:before:left-0 before:left-full before:absolute before:-bottom-1 before:bg-violet-400 before:transition-all before:duration-700 hover:before:bg-green-400'>
              Link
            </Link>
          </div>

          <div className='relative mt-4 opacity-0 link'>
            <div className='absolute top-0 z-20 w-full my-1 pointer-events-none bg-stone-800 linkCover'></div>
            <Link href="/" className='z-10 text-white before:w-0 hover:before:w-full before:-z-10 before:h-1 hover:before:left-0 before:left-full before:absolute before:-bottom-1 before:bg-violet-400 before:transition-all before:duration-700 hover:before:bg-green-400'>
              Lorem Lipsum
            </Link>
          </div>

          <div className='relative mt-4 opacity-0 link'>
            <div className='absolute top-0 z-20 w-full my-1 pointer-events-none bg-stone-800 linkCover'></div>
            <Link href="/" className='z-10 text-white before:w-0 hover:before:w-full before:-z-10 before:h-1 hover:before:left-0 before:left-full before:absolute before:-bottom-1 before:bg-violet-400 before:transition-all before:duration-700 hover:before:bg-green-400'>
              Lorem Lipsum Link
            </Link>
          </div>

        </nav>
      </div>
    </div>
  )
}
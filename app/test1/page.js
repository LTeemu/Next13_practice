'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin)

export default function page() {
  const test = useRef()
  const items = useRef()
  const pauseTimer = useRef()
  let windowSize;

  function resizeFunc() {
    if (test.current && window.innerWidth !== windowSize.w) {
      windowSize = { w: window.innerWidth, h: window.innerHeight }
      let progress = 0;
      progress = test.current.progress()
      test.current.kill()

      test.current.to(items.current, {
        motionPath: {
          path: "#path1",
          align: "#path1",
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: 0,
          end: 1
        },
      })
        .to(items.current, {
          motionPath: {
            path: "#path2",
            align: "#path2",
            alignOrigin: [0.5, 0.5],
            start: 0,
            end: 1
          },
        }, '<+=5')
      test.current.pause()
      test.current.progress(progress)

      clearTimeout(pauseTimer.current)
      pauseTimer.current = setTimeout(() => {
        test.current.play()
      }, 1500);
    }
  }

  useEffect(() => {
    windowSize = { w: window.innerWidth, h: window.innerHeight }
    window.addEventListener('resize', resizeFunc)
    test.current = gsap.timeline({ repeat: -1, defaults: { ease: 'power4', stagger: 1, duration: 5 } })
    items.current = gsap.utils.toArray(".animBall")

    test.current.to(items.current, {
      motionPath: {
        path: "#path1",
        align: "#path1",
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
        start: 0,
        end: 1
      },
    })
      .to(items.current, {
        motionPath: {
          path: "#path2",
          align: "#path2",
          alignOrigin: [0.5, 0.5],
          start: 0,
          end: 1
        },
      }, '<+=5')

    return () => {
      test.current.revert()
      window.removeEventListener('resize', resizeFunc)
    }
  }, [])

  return (
    <div className='relative w-full h-full max-w-4xl mx-auto overflow-x-hidden bg-slate-400'>

      {[...Array(10)].map((e, i) => {
        return <p className="absolute text-5xl text-red-700 animBall left-full" key={i}>o</p>
      })}

      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='fill-none stroke-slate-800 stroke-[0.5px]'>
        <path
          id="path1"
          d="M -1 0 C 1 118 89 86 68 48 S -3 36 108 39"
        />
      </svg>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className='fill-none stroke-slate-800 stroke-[0.5px]'>
        <path
          id="path2"
          d="M -1 0 C 0 34 145 47 66 18 S -3 36 108 39"
        />
      </svg>

    </div>
  )
}
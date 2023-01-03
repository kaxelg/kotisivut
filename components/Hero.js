import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "design.",
            "games.",
            "people.",
            "family.",
            "architecture.",
            "dogs.",
            "beautiful things."
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className="h-80 grid grid-cols-1 gap-4 content-center pl-10 text-3xl snap-center">
        <h1>Kalle Gustafsson</h1>
        <h1>I enjoy <span className='text-red-800'>{text}</span>
        <Cursor cursorColor="#000000" />
        </h1> 
    </div>
  )
}

export default Hero
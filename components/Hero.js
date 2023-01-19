import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Kalle Gustafsson.",
            "future UX designer.",
            "design enthousiast.",
            "technology geek.",
            "problem solver.",
            "dog lover."
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className="h-96 grid grid-cols-1 gap-4 content-center pt pl-10 text-3xl snap-center">
        <h1>Hi, I am <span className='text-red-800'>{text}</span>
        <Cursor cursorColor="#000000" />
        </h1>
        <h1>Welcome to my portfolio!</h1> 
    </div>
  )
}

export default Hero
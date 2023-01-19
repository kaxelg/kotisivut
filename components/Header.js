import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

function Header() {
  return (
    <header className="top-0 p-5 flex items-start justify-between z-20">
        <div className="flex flex-row items-center pt-2">
            <Link className='pr-10' href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
        </div>
        <div className="flex flex-row items-center cursor-pointer">
            {/* Social Icon */}
            <a>
              <SocialIcon 
                className="cursor-pointer"
                network='email'
                fgColor='gray'
                bgColor='transparent'
              />
            </a>
            
            <a href='mailto:kalle.gustafsson@tuni.fi' className="uppercase hidden md:inline-flex text-sm ">Contact me</a>
        </div>
    </header>
  )
}

export default Header
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

function Header() {
  return (
    <header className="top-0 p-5 flex items-start justify-between z-20">
        <div className="flex flex-row items-center pt-2">
            <a className='pr-10'><Link href="#projects">Projects</Link></a>
            <a><Link href="#skills">Skills</Link></a>
        </div>
        <div className="flex flex-row items-center cursor-pointer">
            {/* Social Icon */}
            <SocialIcon 
                className="cursor-pointer"
                network='email'
                fgColor='gray'
                bgColor='transparent'
            />
            <p className="uppercase hidden md:inline-flex text-sm ">Get In Touch</p>
        </div>
    </header>
  )
}

export default Header
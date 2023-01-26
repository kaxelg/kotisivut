import React from 'react'
import Link from 'next/link';

function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between z-20 bg-slate-50 ">
        <div className="flex flex-row items-center pt-2">
            <Link className="uppercase text-sm pr-10" href="#skills">Skills</Link>
            <Link className='uppercase text-sm pr-10' href="#projects">Projects</Link>
            <Link className='uppercase text-sm pr-10' href="#projects">Case Study</Link>
        </div>
        <div className="flex flex-row items-center cursor-pointer">
            <Link href='mailto:kalle.gustafsson@tuni.fi' className="uppercase text-sm pr-10">Contact me</Link>
        </div>
    </header>
  )
}

export default Header
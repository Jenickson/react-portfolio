import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
        <header className='flex justify-between px-5 py-2 bg-secondary'>
            <a className='font-bold text-white p-2 font-poppins border-2 rounded-3xl text-xl hover:text-[#00b8ff] hover:border-[#00b8ff]' href="/"> RJ</a>
            <nav className='hidden md:block'>
                <ul className='flex mt-3 space-x-5 text-white font-poppins'>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu && <nav className='block md:hidden '>
                <ul onClick={()=> setToggleMenu(!toggleMenu)} className='flex flex-col text-white mobile-nav font-poppins '>
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>}
            <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        </header>
    </>
  )
}

export default Header
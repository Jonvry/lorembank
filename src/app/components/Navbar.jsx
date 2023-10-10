"use client"
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleClose = () => {
    setIsOpen(false);
  };

  return (
      <nav  className={`nav max-w-screen-xl m-auto  ${isOpen ? 'opened' : ''}`}>
        <h6 className='z-10 text-black text-2xl font-semibold'><span className='text-green-400 font-bold'>Lorem</span>Bank</h6>
              <div className={`nav-menu ${isOpen ? 'opened' : ''}`}>
                  <div className='flex flex-col gap-6 lg:flex-row  lg:m-auto'>
                      <Link className='text-gray-400 text-xl font-medium lg:text-gray-600 lg:text-base' 
                          onClick={toggleClose} 
                          href="#services">
                          Services
                      </Link>
                      <Link className='text-gray-400 text-xl font-medium lg:text-gray-600 lg:text-base' 
                          onClick={toggleClose} 
                          href="#features">
                          Features
                      </Link>
                      <Link className='text-gray-400 text-xl font-medium lg:text-gray-600 lg:text-base' 
                          onClick={toggleClose} 
                          href="#subcribe">
                          Subcribe
                      </Link>
                  </div>
                  <div className='flex items-center gap-4'>
                      <Link className='bg-white px-5 py-2 rounded-lg text-base font-medium text-slate-950 border border-slate-950' href="/login">Log in</Link>
                      <Link className=' px-5 py-2 rounded-lg text-base font-medium text-white  border border-white lg:bg-neutral-950' href="register">Register</Link>
                  </div>
              </div>
              <button type='button' onClick={toggleMenu} className={`menu lg:hidden ${isOpen ? 'opened' : ''}`}>
                  <svg width="40" height="40" viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                  </svg>
              </button>
      </nav>
  )
}
export default Navbar

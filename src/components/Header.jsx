'use client'

import Link from "next/link"
import homeBg from '../../public/mide1.jpeg'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


const Header = () => {

  const [isOpened, setIsOpened] = useState(false)
  
  return (
    <div className="flex items-center justify-between px-5 md:justify-around py-6">
        <div>
            <p className="text-xl md:text-2xl font-bold logo">AYOMIDE</p>
        </div>
        <nav className="">
          <ul className="text-sm  font-medium hidden md:flex gap-8 ">
            <li className="hover:font-semibold transition hover:scale-110"><Link href="/collection" >Collection</Link></li>
            <li className="hover:font-semibold transition duration-700 ease-in-out hover:scale-110"><Link href="/about" >About Me</Link></li>
            <li className="hover:font-semibold transition duration-700 ease-in-out hover:scale-110"><Link href="/contact" >Contact</Link></li>
            <li className="hover:font-semibold transition duration-700 ease-in-out hover:scale-110"><Link href="/testimonials" >Testimonials</Link></li>
          </ul>
            
            
            
            

        </nav>
        <div className="hidden md:block">
            <button className="bg-black text-white py-3 px-4  border rounded-lg text-sm  transition duration-700 ease-in-out hover:scale-110">Book a call</button>
        </div>

        {isOpened ? <div className='bg-white rounded-full flex items-center justify-center h-11 w-11 md:hidden z-50'><IoMdClose className='fixed' size={25} onClick={() => setIsOpened(!isOpened)} /></div> : <div className='bg-white rounded-full flex items-center justify-center h-11 w-11 md:hidden'><RxHamburgerMenu className='' size={25} onClick={() => setIsOpened(!isOpened)} /></div>}
      
    </div>
  )
}

export default Header

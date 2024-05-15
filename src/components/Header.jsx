'use client'

import Link from "next/link"
import homeBg from '../../public/mide1.jpeg'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


const Header = () => {

  const [isOpened, setIsOpened] = useState(false)
  
  return (
    <div className="flex flex-row  md:flex-col  gap-10 items-center justify-between px-5 md:justify-around py-4 md:py-10">
        <div>
            <p className="text-sm md:text-xl font-bold logo tracking-widerr md:tracking-widestt">AYOMIDE OLAMIDE</p>
        </div>
        <div className="flex items-center ">
          <nav className="">
            <ul className="text-sm text-gray-500  font-medium hidden md:flex gap-20 ">
              <li><Link href="/collection" className="hover:text-gray-700 transition duration-200" >Collection</Link></li>
              <li ><Link href="/about" className="hover:text-gray-700 transition duration-200" >About Me</Link></li>
              <li ><Link href="/contact" className="hover:text-gray-700 transition duration-200" >Contact</Link></li>
              <li><Link href="/testimonials" className="hover:text-gray-700 transition duration-200" >Testimonials</Link></li>
              <li><Link href="/Bookcall" className="hover:text-gray-700 transition duration-200" >Book a call</Link></li>
            </ul>
              
              
              
              

          </nav>

        </div>
        

        {isOpened ? <div className='bg-white rounded-full flex items-center justify-center h-11 w-11 md:hidden z-50'><IoMdClose className='fixed' size={25} onClick={() => setIsOpened(!isOpened)} /></div> : <div className='bg-white rounded-full flex items-center justify-center h-11 w-11 md:hidden'><RxHamburgerMenu className='' size={25} onClick={() => setIsOpened(!isOpened)} /></div>}
      
    </div>
  )
}

export default Header

'use client'
import Link from 'next/link';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';


export default function Home() {


    useEffect(() => {
      AOS.init({duration:2000})
  }, [])




  return (
    <div className=' bg-homeBg h-screen brightness-100 bg-cover'>
      {/* <Image src={homeBg} alt='home background' className='brightness-50 relative'></Image> */}
      <div className=" text-white flex flex-col justify-center items-center gap-20" >
        
        <p  data-aos='zoom-in' className='flex gap-3 flex-col justify-center items-center text-center pt-32 md:pt-20 text-white'><span className='text-5xl md:text-7xl px-10'>Make A Statement</span> <span className='text-6xl md:text-8xl'>WITHOUT SAYING</span><span className='text-7xl md:text-9xl'>A WORD</span></p>
        <div data-aos='fade-right'>
          <Link href='/collection'><button className='p-4 bg-gradient-to-r from-lightBlack to to-darkBlack border border-gray-400 rounded-3xl flex items-center justify-center w-60 h-16 brightness-150 hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 ease-in'>explore more</button></Link>

        </div>

        
        
      </div>
    </div>
  );
}

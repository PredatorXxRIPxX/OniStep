"use client"
import Image from 'next/image';
import Btn from '../btn/btn';
import { useEffect, useState } from 'react';

function  Navbar(){
    const [blured, setBlured] = useState(false);
     useEffect(() => {
    const handleScroll = () => {
        console.log(window.scrollY)
      if (window.scrollY >= 360) {
        setBlured(true)
      } else {
        setBlured(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 


    return (
        <nav className={`w-screen  ${blured?' before:content-[""] before:absolute before:inset-0 before:backdrop-blur-sm before:bg-[#333]/50 before:z-[-1]':'bg-transparent'} p-4 flex items-center justify-center sticky top-0 z-20`}>
            <div className='flex items-center justify-between border-3 border-solid border-red-600 w-full pl-2 pr-2'>
                <div className='flex items-center'>
                    <Image src='/public/LOGOseullarge 1.svg' alt='logo' width={50} height={50}/>
                    <p className=' text-white font-bold text-2xl'>onistep</p>
                </div>
                <ul className='flex items-center'>
                    <li className='text-xl pl-2 pr-2'>
                        <a href='#' className='text-white font-semibold'>Features</a>
                    </li>
                    <li className='text-xl pl-2 pr-2'>
                        <a href='#' className='text-white font-semibold'>Courses</a>
                    </li>
                    <li className='text-xl pl-2 pr-2'>
                        <a href='#' className='text-white font-semibold'>Pricing</a>
                    </li>
                    <li className='text-xl pl-2 pr-2'>
                        <a href='#' className='text-white font-semibold'>Contact</a>
                    </li>
                    <li>
                        <Btn text="Get started"/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar;
"use client"
import Image from 'next/image';
import Btn from '../btn/btn';
import Onistep from '../../../../public/assets/LOGOseullarge 1.svg';
import { useEffect, useState } from 'react';
import Link from 'next/link';

function  Navbar(){
    const [blured, setBlured] = useState(false);
    const [isMobile,setMobile] = useState(false);
     useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

  useEffect(() => {
    const handleSize = () => {
      if(window.innerWidth>768){
        setMobile(false)
      }else{
        setMobile(true)
      }
    }
    window.addEventListener('resize',handleSize)
    return () => {
      window.removeEventListener('resize',handleSize)
    }

  },[])


    return (
        <nav className={`w-screen  ${blured?' before:content-[""] before:absolute before:inset-0 before:backdrop-blur-sm before:bg-[#333]/50 before:z-[-1]':'bg-transparent'} pl-6 pr-6 pt-4 pb-4 flex items-center justify-center sticky top-0 z-20 `}>
            <div className='flex items-center justify-between w-full lg:pl-2 pl-1 pr-2'>
                <div className='flex items-center ml-10'>
                  <Link href={'/'} className='flex items-center'>
                    <Image src={Onistep} alt='logo' width={50} height={50}/>
                    <p className=' text-white font-bold text-2xl mb-4 ml-2'>OniStep</p>
                  </Link>
                </div>
                {
                    !isMobile?
                    <ul className='flex items-center '>
                    <li className='text-xl pl-2 pr-2'>
                        <Link href={'/'} className='text-white font-semibold'>Home</Link>
                    </li>
                    <li className='text-xl pl-2 pr-2'>
                        <Link href={'/courses'} className='text-white font-semibold'>Courses</Link>
                    </li>
                    <li className='text-xl pl-2 pr-2'>
                        <Link href={'/price'} className='text-white font-semibold'>Pricing</Link>
                    </li>
                    <li className='text-xl pl-2 pr-2'>
                      <Link href={'/contact'} className='text-white font-semibold'>
                        Contact
                      </Link>
                    </li>
                    <li>
                        <Btn text="Get started"/>
                    </li>
                </ul>

                : 
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              </div>
              
                }
            </div>
        </nav>
    )
}


export default Navbar;
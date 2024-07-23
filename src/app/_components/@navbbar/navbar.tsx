"use client";
import Image from 'next/image';
import Btn from '../btn/btn';
import Onistep from '../../../../public/assets/LOGOseullarge 1.svg';
import { useState,useEffect } from 'react';
import Link from 'next/link';

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [blured, setBlured] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setBlured(window.scrollY > 0);
        };


        window.addEventListener('scroll', handleScroll);
        

        

        return () => {
            window.removeEventListener('scroll', handleScroll);
            
        };
    }, []);
    return (
        <nav className={`w-full px-6 py-4 flex items-center justify-center sticky top-0 z-20 ${blured ? 'backdrop-blur-sm bg-[#333]/50' : 'bg-transparent'}`}>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image src={Onistep} alt="logo" width={50} height={50} />
                        <p className="text-white font-bold text-2xl ml-2">OniStep</p>
                    </Link>
                </div>
                <ul className="hidden lg:flex items-center">
                    <li className="text-xl px-2">
                        <Link href="/" className="text-white font-semibold">Home</Link>
                    </li>
                    <li className="text-xl px-2">
                        <Link href="/courses" className="text-white font-semibold">Courses</Link>
                    </li>
                    <li className="text-xl px-2">
                        <Link href="/price" className="text-white font-semibold">Pricing</Link>
                    </li>
                    <li className="text-xl px-2">
                        <Link href="/contact" className="text-white font-semibold">Contact</Link>
                    </li>
                    <li>
                        <Btn text="Get started" />
                    </li>
                </ul>
                <div className="lg:hidden flex items-center">
                    <button onClick={() => setMenuOpen(true)} className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="absolute top-16 right-0 w-full bg-white text-black p-4 rounded-lg shadow-lg z-10">
                        <div className="flex justify-end">
                            <button onClick={() => setMenuOpen(false)} className="text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-700">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col items-start mt-4">
                            <li className="py-2 w-full">
                                <Link href="/" className="text-xl font-semibold">Home</Link>
                            </li>
                            <li className="py-2 w-full">
                                <Link href="/courses" className="text-xl font-semibold">Courses</Link>
                            </li>
                            <li className="py-2 w-full">
                                <Link href="/price" className="text-xl font-semibold">Pricing</Link>
                            </li>
                            <li className="py-2 w-full">
                                <Link href="/contact" className="text-xl font-semibold">Contact</Link>
                            </li>
                            <li className="py-2 w-full flex items-center justify-center">
                                <Btn text="Get started" />
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;

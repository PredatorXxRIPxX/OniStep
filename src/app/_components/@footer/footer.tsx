import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import Link from "next/link";

const Footer = ()=>{
    return (
        <div className=" bg-gradient-to-r from-[#6A30B2] to-[#170D44] w-full flex-col items-center ">
            <center>
                <div className="h-3/4 w-1/2 flex items-center justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-1 text-white text-left gap-2 p-2">
                        <div className="flex-col p-4 w-full">
                            <h1 className="font-bold text-2xl w-fit" >Connections</h1>
                            <ul className="flex items-center justify-around mt-5">
                                <li><GitHubIcon /></li>
                                <li><FacebookIcon /></li>
                                <li><LinkedInIcon /></li>
                                <li><XIcon /></li>
                            </ul>
                        </div>
                        <div className="flex-col p-4">
                            <h1 className="font-bold text-2xl" >Courses</h1>
                            <ul>
                                <li><Link href={"/courses/12"}>Photoshop</Link></li>
                                <li><Link href={"/courses/2"}>Blender</Link></li>
                                <li><Link href={"/courses/1"}>Unity</Link></li>
                                <li><Link href={"/courses/6"}>Davinci Resolve</Link></li>
                            </ul>
                        </div>
                        <div className="flex-col p-4">
                            <h1 className="font-bold text-2xl">Resources</h1>
                            <ul>
                            <li>
                                <Link href={'/'} className='text-white '>Home</Link>
                            </li>
                            <li>
                                <Link href={'/courses'} className='text-white '>Courses</Link>
                            </li>
                            <li>
                                <Link href={'/price'} className='text-white '>Pricing</Link>
                            </li>
                            <li>
                            <Link href={'/contact'} className='text-white '>
                                Contact
                            </Link>
                            </li>
                            </ul>
                        </div>
                        <div className="flex-col p-4">
                            <h1 className="font-bold text-2xl">Policies</h1>
                            <ul>
                                <li><Link href={"/security"}>Security</Link></li>
                                <li><Link href={'/legaleNotice'}> Legale Notice</Link></li>
                                <li><Link href={'/privacy'}>Privacy</Link></li>
                                <li><Link href={'/termsofsales'}>Terms of Sales</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </center>
            <center>
                <div className="h-2 w-3/4 bg-white rounded-2xl"></div>
            </center>
            <div className="w-full p-10 lg:flex lg:items-center lg:justify-between grid grid-cols-1 gap-4">
                <div className="flex lg:ml-10 m-auto">
                    <Image src={'/assets/LOGOseullarge 1.svg'} alt='logo' width={50} height={50}/>
                    <p className="ml-2 mt-2 text-white font-semibold">OniStep</p>
                </div>
                <p className="text-white lg:mr-10 text-center">© 2021 Onistep. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;
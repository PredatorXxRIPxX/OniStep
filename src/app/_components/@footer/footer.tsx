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
                    <div className="grid grid-cols-4 grid-rows-1 text-white text-left gap-2 p-2">
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
                                <li>Photoshop</li>
                                <li>Blender</li>
                                <li>Unity</li>
                                <li>Davinci Resolve</li>
                            </ul>
                        </div>
                        <div className="flex-col p-4">
                            <h1 className="font-bold text-2xl">Resources</h1>
                            <ul>
                                <li>Features</li>
                                <li>Courses</li>
                                <li>Pricing</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="flex-col p-4">
                            <h1 className="font-bold text-2xl">Policies</h1>
                            <ul>
                                <li><Link href={"/security"}>security</Link></li>
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
            <div className="w-full p-10 flex items-center justify-between">
                <div className="flex ml-10">
                    <Image src={'/assets/LOGOseullarge 1.svg'} alt='logo' width={50} height={50}/>
                    <p className="ml-2 mt-2 text-white font-semibold">OniStep</p>
                </div>
                <p className="text-white mr-10">© 2021 Onistep. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;
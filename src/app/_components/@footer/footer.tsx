import Image from "next/image";
const Footer = ()=>{
    return (
        <div className=" bg-gradient-to-r from-[#6A30B2] to-[#170D44] w-full flex-col items-center ">
            <center>
                <div className="h-3/4 w-1/2 flex items-center justify-center">
                    <div className="grid grid-cols-4 grid-rows-1 text-white text-left gap-2 p-2">
                        <div className="flex-col p-4">
                            <h1 className="font-bold text-2xl" >Courses</h1>
                            <ul>
                                <li>About</li>
                                <li>Features</li>
                                <li>News</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="flex-col p-4">
                            <h1 className="font-bold text-2xl">Compagnier</h1>
                            <ul>
                                <li>About</li>
                                <li>Features</li>
                                <li>News</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="flex-col p-4">
                            <h1 className="font-bold text-2xl">Resources</h1>
                            <ul>
                                <li>About</li>
                                <li>Features</li>
                                <li>News</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className="flex-col p-4">
                            <h1 className="font-bold text-2xl">Policies</h1>
                            <ul>
                                <li>About</li>
                                <li>Features</li>
                                <li>News</li>
                                <li>FAQ</li>
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
"use client"
import CardContainer from "../_components/@cardContainer/cardcontainer"
import Btn from "../_components/btn/btn"
import { cardData } from "../_data/data"
import {useRouter} from 'next/navigation'

export default function Courses(){
    const route = useRouter()
    return (
        <div>
            <h1 className="font-FjallaOne text-7xl text-center p-4 text-white mt-20 ">Our Major Courses</h1>
            <p className="text-center text-white font-varela text-3xl pt-5">Follow one of our Curated courses to become a software expert</p>
            <div className=" lg:grid lg:grid-cols-4 lg:gap-4 lg:p-7 md:grid md:grid-cols-3 sm:grid sm:grid-cols-1 sm:gap-8">
                {
                    cardData.map(({id,title,imgUrl,iconUrl,level},index:any)=>{
                        return <CardContainer key={index} props={{id,title,imgUrl,iconUrl,level}}/>
                    })
                }
            </div>
            <div className="text-center text-white">
                <p className="font-medium text-2xl font-varela">What are you waiting for?</p>
                <div className="h-10"></div>
                <p className="font-normal text-5xl font-FjallaOne mb-8">Try it yourself!</p>
                <div onClick={()=>route.push('onistepinstaller.exe')} className="mt-15 bg-gradient-to-r from-[#6A30B2] to-[#170D44] relative p-6 rounded-t-full">
                <Btn text="Download now" />
                </div>
            </div>
        </div>
    )
}
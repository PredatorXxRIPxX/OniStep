import CardContainer from "../_components/@cardContainer/cardcontainer"
import { cardData } from "../_data/data"
export default function Courses(){
    return (
        <div>
            <h1 className="font-FjallaOne text-7xl text-center p-4 text-white mt-20 ">Our Major Course</h1>
            <div className=" lg:grid lg:grid-cols-4 lg:gap-4 lg:p-7 md:grid md:grid-cols-3 sm:grid sm:grid-cols-1 sm:gap-8">
                {
                    cardData.map(({id,title,imgUrl,iconUrl,level},index:any)=>{
                        return <CardContainer key={index} props={{id,title,imgUrl,iconUrl,level}}/>
                    })
                }
            </div>
        </div>
    )
}
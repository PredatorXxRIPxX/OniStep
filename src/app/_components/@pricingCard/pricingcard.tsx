import Btn from "../btn/btn";


interface CardType{
    title:string;
    subtitle:string;
    price:string;
    features:string[];
    buttonText:string;
}

export default function PricingCard({title,subtitle,price,features,buttonText}:CardType){
    return (
        <div className=' shadow-xl shadow-black  rounded-2xl p-4 bg-[#f0f3ff]'>
            <h1 className='text-5xl font-light font-FjallaOne text-black p-4'>{title}</h1>
            <p className='text-lg font-varela font-medium text-gray-600 ml-4'>{subtitle}</p>
            <p className='text-4xl text-gray-600 p-4 font-normal'>{price}</p>
            <button className="font-semibold font-varela text-xl text-white p-4 rounded-xl shadow-sm shadow-black bg-gradient-to-r from-[#6A30B2] to-[#170D44] ml-2 transition-all duration-200 hover:translate-x-4">
                {buttonText}
            </button>
            <h1 className='text-lg font-semibold font-varela mt-4 ml-4 text-gray-700'>Includes:</h1>
                <ul className='text-lg font-medium font-varela text-gray-600 ml-10 mt-2 list-disc'>
                    <li>onistep your guidance</li>
                    <li>onistep your guidance</li>
                    <li>onistep your guidance</li>
                </ul>
            <h1 className='text-lg font-semibold font-varela mt-4 ml-4 text-gray-700'>Features:</h1>
            <ul className='text-lg font-medium font-varela text-gray-600 ml-4 mt-2'>
                {
                    features.map((feature,index)=><li key={index} className="pt-1 pb-1 flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-[#6A30B2] font-semibold">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                            {feature}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
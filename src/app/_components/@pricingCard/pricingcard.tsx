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
        <div className='bg-white shadow-xl shadow-black  rounded-2xl p-4'>
            <h1 className='text-4xl font-bold font-FjallaOne bg-clip-text text-transparent bg-gradient-to-r from-[#EB88F6] to-[#EB48A2] p-4'>{title}</h1>
            <p className='text-lg font-varela font-medium text-gray-600 ml-4'>{subtitle}</p>
            <p className='bg-clip-text text-transparent bg-gradient-to-r from-[#6A30B2] to-[#170D44] font-semibold text-4xl p-4'>{price}</p>
            <button className="font-semibold font-varela text-xl text-white p-4 rounded-2xl shadow-sm shadow-black bg-gradient-to-r from-[#6A30B2] to-[#170D44] ml-2 transition-all duration-200 hover:translate-x-4">
                {buttonText}
            </button>
            <h1 className='text-lg font-semibold font-varela mt-4 ml-4 text-gray-700'>Features:</h1>
            <ul className='text-lg font-medium font-varela text-gray-600 ml-4 mt-2'>
                {
                    features.map((feature,index)=><li key={index} className="pt-1 pb-1 flex items-center">
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
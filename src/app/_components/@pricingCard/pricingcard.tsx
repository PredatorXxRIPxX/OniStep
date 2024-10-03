"use client"
import { ReactNode } from "react";
import Btn from "../btn/btn";
import { useRouter } from "next/navigation";

interface CardType {
  title: string;
  subtitle: string;
  price: string;
  features: ReactNode[];
  includes: ReactNode[];
  buttonText: string;
}

export default function PricingCard({
  title,
  subtitle,
  price,
  includes,
  features,
  buttonText,
}: CardType) {

  const route = useRouter();

  function handleBtn () {
    if(price == 'Free'){
      alert('coming soon')
    }else if(price == '$12.99'){
      route.replace('https://buy.stripe.com/7sI2aa1bR5eVecw6oo')
    }else{
      route.push('/contact')
    }
  };

  return (
    <div className="shadow-xl shadow-black rounded-2xl p-4 bg-[#f0f3ff]">
      <h1 className="text-5xl font-light font-FjallaOne text-black p-4 text-center lg:text-left">
        {title}
      </h1>
      <div className="text-center lg:text-left">
        <p className="text-lg font-varela font-medium text-gray-600 lg:ml-4 text-center lg:text-left">
          {subtitle}
        </p>
      </div>
      <p className="text-4xl text-gray-600 p-4 font-normal text-center lg:text-left">
        {price}
      </p>
      <div className="flex justify-center lg:justify-start">
        <button onClick={handleBtn} className="font-semibold font-varela text-xl text-white p-4 rounded-xl shadow-sm shadow-black bg-gradient-to-r from-[#6A30B2] to-[#170D44] transition-all duration-200 hover:translate-x-4">
          {buttonText}
        </button>
      </div>
      <h1 className="text-lg font-semibold font-varela mt-4 ml-4 text-gray-700 text-center lg:text-left">
        Includes:
      </h1>
      <ul className="text-lg font-medium font-varela text-gray-600 mt-2 list-none text-center lg:text-left lg:list-disc ml-4 lg:ml-10">
        {includes.map((item, index) => (
          <li key={index} className="pt-1 pb-1">
            {item}
          </li>
        ))}
      </ul>
      <h1 className="text-lg font-semibold font-varela mt-4 ml-4 text-gray-700 text-center lg:text-left">
        Features:
      </h1>
      <ul className="text-lg font-medium font-varela text-gray-600 mt-2 list-none text-center lg:text-left lg:list-disc ml-4 lg:ml-10">
        {features.map((item, index) => (
          <li key={index} className="pt-1 pb-1 flex items-center">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

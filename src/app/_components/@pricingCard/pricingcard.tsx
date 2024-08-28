import Btn from "../btn/btn";

interface CardType {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  buttonText: string;
}

export default function PricingCard({
  title,
  subtitle,
  price,
  features,
  buttonText,
}: CardType) {
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
        <button className="font-semibold font-varela text-xl text-white p-4 rounded-xl shadow-sm shadow-black bg-gradient-to-r from-[#6A30B2] to-[#170D44] transition-all duration-200 hover:translate-x-4">
          {buttonText}
        </button>
      </div>
      <h1 className="text-lg font-semibold font-varela mt-4 ml-4 text-gray-700 text-center lg:text-left">
        Includes:
      </h1>
      <ul className="text-lg font-medium font-varela text-gray-600 mt-2 ml-4 list-none lg:list-inside">
        {features.map((feature, index) => (
          <li
            key={index}
            className="pt-1 pb-1 flex items-center justify-center lg:justify-start text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 text-[#6A30B2] font-semibold mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            {feature}
          </li>
        ))}
        
      </ul>
      <h1 className="text-lg font-semibold font-varela mt-4 ml-4 text-gray-700 text-center lg:text-left">
        Features:
      </h1>
      <ul className="text-lg font-medium font-varela text-gray-600 mt-2 list-none text-center lg:text-left lg:list-disc ml-4 lg:ml-10">
        <li>Guided navigation through software</li>
        <li>Access to dozens of course</li>
        <li>Advanced course creation tools</li>
        <li>Course management for groups</li>
      </ul>
    </div>
  );
}

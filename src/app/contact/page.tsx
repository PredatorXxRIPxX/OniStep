"use client";
import React, { ReactNode, useState } from "react";

type BubblesInfo = {
  icon: ReactNode;
  description: string;
};

const bubblesContainers: BubblesInfo[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
    description: "Our Communication is end-to-end encrypted and secure",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
    description: "Get a very fast response in 48h from sending your feedback",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    ),
    description:
      "More than a hundred of persons are satisfied with our services. Join them now",
  },
];

type BubblesProps = {
  icon: ReactNode;
  description: string;
};

function Bubbles({ icon, description }: BubblesProps) {
  return (
    <div className="flex items-center justify-start p-4 ml-12">
      <div className="bg-white rounded-full p-4 text-violet-950">{icon}</div>
      <div className="ml-4 w-1/2 font-varela">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [object, setObject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between p-4 mt-6 grid grid-cols-1 gap-2">
        <div className="text-white">
          <h1 className="font-FjallaOne font-medium text-7xl ml-8 text-center lg:text-left">
            Let&apos;s have a talk
          </h1>
          <p className="font-varela font-normal text-2xl mt-6 mb-6 lg:w-3/4 ml-8 text-center lg:text-left">
            Contact us with any questions or to report any issues. We're here to help you and appreciate the feedback! 
          </p>
          <div className="flex-col justify-start">
            {bubblesContainers.map((item, index) => (
              <Bubbles key={index} icon={item.icon} description={item.description} />
            ))}
          </div>
        </div>
        <div className="h-full w-full">
          <div className="text-gray-400 bg-white rounded-lg p-4 w-full h-full">
            <div>
              <label className="font-varela">Name*</label>
              <input
                type="text"
                className="w-full p-2 mt-2 border-2 border-gray-400 text-black rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="font-varela">Email*</label>
              <input
                type="email"
                className="w-full p-2 mt-2 border-2 border-gray-400 text-black rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="font-varela">Object*</label>
              <input
                type="text"
                className="w-full p-2 mt-2 border-2 border-gray-400 text-black rounded-lg"
                value={object}
                onChange={(e) => setObject(e.target.value)}
              />
            </div>
            <div>
              <label className="font-varela">Message*</label>
              <textarea
                className="w-full p-2 mt-2 border-2 h-3/4 border-gray-400 text-black rounded-lg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="mt-4 flex items-center justify-center">
              <button className="bg-gradient-to-r from-[#6A30B2] to-[#170D44] text-white pl-10 pr-10 pt-4 pb-4 rounded-2xl ml-4 mr-4 font-semibold duration-300 transition-all hover:scale-125">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

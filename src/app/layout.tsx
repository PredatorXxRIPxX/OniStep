import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"
import Navbar from "./_components/@navbbar/navbar";
import Footer from "./_components/@footer/footer";
import { ChakraProvider } from '@chakra-ui/react'

const fjallaOne = localFont({
  src:[
    {
      path: "../../public/fonts/Fjalla_One/FjallaOne-Regular.ttf",
    }
  ],
  variable: '--fjalla-one'
});

const varela = localFont({
  src:[
    {
      path: "../../public/fonts/Varela/Varela-Regular.ttf",
    }
  ],
  variable: '--varela'
})


export const metadata: Metadata = {
  title: "Onistep",
  description: "supercharge your productivity with onistep",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fjallaOne.variable} ${varela.variable}  bg-gradient-to-b from-[#1E1159] to-[#6C67F2] overflow-x-hidden m-auto`}>
      <ChakraProvider>
        <Navbar />
        {children}
        <Footer />
      </ChakraProvider>
      </body>
    </html>
  );
}

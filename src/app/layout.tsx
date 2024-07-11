import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/@navbbar/navbar";

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
      <body className="bg-gradient-to-b from-[#1E1159] to-[#6C67F2] overflow-x-hidden m-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

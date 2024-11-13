import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
     <nav className="bg-cyan-950 text-cyan-50 h-auto sm:h-13 md:h-16 lg:h-16 py-2 px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* left */}
        <div>
          <div className="mb-4 sm:mb-0 flex gap-3 sm:gap-2 items-center">
            <Image
              src="/images/asma.png"
              width={50}
              height={50}
              alt="logo"
              className="w-10 h-12"
            />
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-serif font-semibold">
              <Link href="/" className="text-gray-900">
                <i>Asma</i>
              </Link>
            </h1>
          </div>
        </div>

         {/* middle */}
        
        <div className="flex justify-between w-full sm:w-auto mb-4 sm:mb-0">
        <ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5 list-none">
          <li><Link href="/" className=" hover:text-black font-semibold text-cyan-50  hover:underline">Home</Link></li>
          <li><Link href="/about" className=" hover:text-black font-semibold text-cyan-50  hover:underline">About</Link></li>
          <li><Link href="/portfolio" className=" hover:text-black font-semibold text-cyan-50  hover:underline">Portfolio</Link></li>
          <li><Link href="/blog" className=" hover:text-black font-semibold text-cyan-50  hover:underline">Blog</Link></li>
          <li><Link href="/services" className=" hover:text-black font-semibold text-cyan-50  hover:underline">services</Link></li>
          <li><Link href="/contact" className=" hover:text-black font-semibold text-cyan-50  hover:underline"> Contact</Link></li>
        </ul>
        </div>

       {/* right dev */}
      <div className="w-full sm:w-auto ">
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3">
          <li><button className="font-semibold inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 hover:text-cyan-800 rounded text-cyan-800 mt-4 md:mt-0"><Link href="#!">Download CV</Link></button></li>
            </ul>
        </div>
      </nav>
    </>
  );
}

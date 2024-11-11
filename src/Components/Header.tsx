import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='bg-cyan-800 z-50 sticky top-0'>
      <header className="text-emerald-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row md:text-sm sm:flex-col items-center">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <Image src="/images/asma.png" height={50} width={50} alt="logo" className='w-10 h-10'/>
     
      <span className="ml-3 text-xl font-bold">ASMA</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-evenly p-4 mx-2">
      <Link href="/" className="mr-5 hover:text-black font-semibold text-cyan-50">Home</Link>
      <Link href="/about" className="mr-5 hover:text-black font-semibold text-cyan-50">About</Link>
      <Link href="/portfolio" className="mr-5 hover:text-black font-semibold text-cyan-50">portfolio</Link>
      <Link href="/blog" className="mr-5 hover:text-black font-semibold text-cyan-50">Blog</Link>
      <Link href="/services" className="mr-5 hover:text-black font-semibold text-cyan-50">Services</Link>
      <Link href="/contact" className="mr-5 hover:text-black font-semibold text-cyan-50">Contact</Link>
    </nav>
     <Link href="">
    <button className="font-semibold inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-800 hover:text-gray-100 rounded text-cyan-800 mt-4 md:mt-0">
      Download CV
    </button> </Link>
  </div>
</header>

    </div>
  )
}

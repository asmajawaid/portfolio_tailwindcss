import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='bg-cyan-800 z-50 sticky top-0'>
      <header className="text-emerald-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row md:text-sm sm:flex-col items-center">
    <div>
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <Image src="/images/asma.png" height={50} width={50} alt="logo" className='w-10 h-10'/>
     
      <span className="ml-3 text-xl font-bold">ASMA</span>
    </Link>
    </div>

    <div>
    <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-evenly p-4 mx-2 list-none">
      <Link href="/" className="p-5 mr-5 hover:text-black font-semibold text-cyan-50"><li>Home</li></Link>
      <Link href="/about" className="p-4 mr-5 hover:text-black font-semibold text-cyan-50"><li>About</li></Link>
      <Link href="/portfolio" className="p-5 mr-5 hover:text-black font-semibold text-cyan-50"><li>portfolio</li></Link>
      <Link href="/blog" className="p-5 mr-5 hover:text-black font-semibold text-cyan-50"><li>Blog</li></Link>
      <Link href="/services" className="p-5 mr-5 hover:text-black font-semibold text-cyan-50"><li>Services</li></Link>
      <Link href="/contact" className="p-5 mr-5 hover:text-black font-semibold text-cyan-50"><li>Contact</li></Link>
    </ul>
    </div>
     
     <div>
     <Link href="">
    <button className="font-semibold inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-800 hover:text-gray-100 rounded text-cyan-800 mt-4 md:mt-0">
      Download CV
    </button> 
    </Link>
    </div>

  </div>
</header>

    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Portfolio() {
  return (
    <div>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-cyan-900">
        MY PROJECTS
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably have not
        heard of them man bun deep jianbing selfies heirloom.
      </p>
    </div>
    <div className="flex flex-wrap -m-5 mt-[5rem] ">
      {/* display portfolio 1*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer hover:shadow-2xl focus:shadow-2xl hover:scale-125">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/1.png" 
            width={500}
            height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
            Resume Builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Static Resume 
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone1-2-static-resume-five.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>
       {/* display portfolio 2*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer hover:shadow-2xl focus:shadow-2xl hover:scale-125">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/2.png" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
            Resume Builder 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Dynamic Resume  
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone3-dynamic-resume-wine.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>

      {/* display portfolio 3*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer hover:shadow-2xl focus:shadow-2xl hover:scale-125">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/3.png" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
            Resume Builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Editable Resume  
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone4-editable-resume-rho.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>

      {/* display portfolio 4*/}
      <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer hover:shadow-2xl focus:shadow-2xl hover:scale-125">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/4.png" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
            Resume Builde
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Shareable Link & Unique Path r
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone5-unique-path-shareable-link-chi.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>

      {/* display portfolio 5*/}
      <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer  hover:shadow-2xl focus:shadow-2xl hover:scale-125">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/44.png" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
            Resume Builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Printable Resume
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone3-dynamic-resume-wine.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>
      {/* display portfolio 6*/}
      <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer  hover:shadow-2xl focus:shadow-2xl hover:scale-125 ">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/6.png" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
            Resume Builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Periodic Table
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone3-dynamic-resume-wine.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>

    {/* display portfolio 7*/}
    <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer  hover:shadow-2xl focus:shadow-2xl hover:scale-125">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/7.png" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
            Desserts
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Food Center Website
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone3-dynamic-resume-wine.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>
   
     {/* display portfolio 8*/}
     <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer  hover:shadow-2xl focus:shadow-2xl hover:scale-125">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/8.png" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
              Typescript Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Adventure Game
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone1-2-static-resume-five.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>
       {/* display portfolio 9*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer hover:shadow-2xl focus:shadow-2xl hover:scale-125">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/bmi.png" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
            Typescript Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            BMI Calculater
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone3-dynamic-resume-wine.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>

      {/* display portfolio 10*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer  hover:shadow-2xl focus:shadow-2xl hover:scale-125">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/tic.png" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
            Typescript Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Tic Tac Too Game
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone4-editable-resume-rho.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>

        {/* display portfolio 11*/}
        <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer  hover:shadow-2xl focus:shadow-2xl hover:scale-125">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/atm.jpeg" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
            Typescript Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ATM Machine
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone5-unique-path-shareable-link-chi.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>

      {/* display portfolio 12*/}
      <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer  hover:shadow-2xl focus:shadow-2xl hover:scale-125">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/cal.png" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
            Typescript project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Simple Calculator
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone3-dynamic-resume-wine.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>
      {/* display portfolio 13*/}
      <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer  hover:shadow-2xl focus:shadow-2xl hover:scale-125">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/clock.png" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
              Typescript Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Digital Clock
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone3-dynamic-resume-wine.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>

    {/* display portfolio 14*/}
    <div className=" lg:w-1/4 sm:w-1/2 p-4 cursor-pointer  hover:shadow-2xl hover:scale-125 focus:shadow-2xl z-10">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/projects/figma.png" width={500} height={500}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-cyan-800 mb-1">
            Next.JS project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            Figma Templet
            </h1>
            <p className="leading-relaxed line-clamp-2">
              This is a Resume Project those who create your own Resume for Education & Jobs.
            </p>
            <Link target='_blank' href="https://milestone3-dynamic-resume-wine.vercel.app/"><p className="leading-relaxed text-cyan-800 hover:underline ">
             View Project...
            </p></Link>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

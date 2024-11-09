"use client";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-500">
              Hi! My Name Is Asma Jawaid
              <br className="hidden lg:inline-block" />
              I Am
              <Typewriter
                options={{
                  strings: ['WebDeveloper', 'WebDesigner', 'UI/UX Designer','Progressive Web Apps (PWA)'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-cyan-950"></div>
            <p className="mb-8 leading-relaxed">
              I specialize in creating responsive, user-friendly websites that
              look great on any device. With a passion for clean design and
              seamless user experiences, I bring your ideas to life with
              intuitive interfaces and mobile-optimized layouts. Whether it is
              building from scratch or refining an existing site, I am here to
              help you create a digital experience that is both functional and
              visually appealing. Let is bring your vision to the web!
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <button className="inline-flex text-cyan-50 bg-cyan-800 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 hover:text-white rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center mx-auto w-[25rem] rounded-md"
              alt="Asma"
              width={500}
              height={500}
              src="/images/asmagirl.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

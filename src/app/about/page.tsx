import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="girl"
              src="/images/muslimgirl.png"
              width={500}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cyan-900">
              Before You Work With Me Know is
              <br className="hidden lg:inline-block" />
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              I specialize in designing responsive, user-centered websites that
              deliver seamless experiences across all devices. Combining clean,
              modern design with intuitive interfaces, I focus on creating
              mobile-optimized layouts that are both functional and visually
              engaging. Whether you are starting from scratch or refining an
              existing site, I am here to help turn your vision into a polished,
              user-friendly digital experience. Outside of web design, I enjoy
              cooking, reading Urdu novels, and nurturing my love for plants.
              Let is work together to bring your ideas to life online!
            </p>
            <div className="flex justify-center">
              
                <button className="inline-flex text-cyan-50 bg-cyan-800 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 hover:text-white rounded text-lg">
                  View CV
                </button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

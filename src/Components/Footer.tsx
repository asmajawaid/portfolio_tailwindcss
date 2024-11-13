import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-cyan-800">
      <footer className="text-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center flex-row">
          <div className="flex items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <Image
              src="/images/asma.png"
              width={50}
              height={50}
              alt="logo"
              className="w-25 h-20"
            />
            <span className="ml-3 text-xl">ASMA</span>
          </Link>
          <p className="text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 ASMA —
            <Link
              href="/"
              className="text-gray-900 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @AsmaJawaid
            </Link>
          </p></div>
          <div className="flex gap-1">
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
            <Link
              target="_blank"
              href={"https://www.facebook.com/innocent.princes.581/"}
              className="text-white p-2"
            >
              <FaFacebook className="text-2xl" />
            </Link>

            <Link
              target="_blank"
              href={"https://www.instagram.com/jawed_hadi/"}
              className="text-white p-2"
            >
              <FaInstagram className="text-2xl " />
            </Link>

            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/asma-jawaid-92b94628b/"}
              className="text-white p-2"
            >
              <FaLinkedin className="text-2xl" />
            </Link>

            <Link
              target="_blank"
              href={"https://github.com/asmajawaid"}
              className="text-white p-2"
            >
              <FaGithub className="text-2xl" />
            </Link>
          </span>
           </div>

        </div>
      </footer>
    </div>
  );
}

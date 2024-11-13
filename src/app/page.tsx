import Hero from "@/components/Hero";
import Contact from "./contact/page";
import Portfolio from "./portfolio/page";
import About from "./about/page";
import Blog from "./blog/page";
import Skills from "./skills/page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
     

      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <Skills />
      <Contact />
    </>
  );
}

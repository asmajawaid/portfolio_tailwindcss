import Hero from "@/Components/Hero";
import Contact from "./contact/page";
import Portfolio from "./portfolio/page";
import About from "./about/page";
import Blog from "./blog/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <>
    <Hero/> 
    <About/>
    <Portfolio/>
    <Blog/>
    <Skills/>
    <Contact/>
   
    </>
  );
}

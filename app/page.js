// import Image from "next/image";
import Body from "./_component/Body";
import Header from "./_component/Header";
import Skills from "./_component/Skills";
import Education from "./_component/Education";
import About from "./_component/About";
import Contact from "./_component/Contact";
import Project from "./_component/Project";
import Starfield from "./_component/Starfield";
// import { Projects } from "./_component/ProjectCard";

export default function Home() {
  return (
    
    <div>
      <Starfield/>
      <Header />
      <Body /> 
      {/* <About/> */}
      <Skills />
      <Project/>
      <Education />
      <Contact/>
      {/* <Project/> */}
      
    </div>
  );
}
  
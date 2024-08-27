import React from 'react';
import 'tailwindcss/tailwind.css'; // Tailwind CSS
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Icons
import { FaSquareXTwitter } from "react-icons/fa6";
import About from './About';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-fixed bg-center">
      <div className="container mx-auto h-full px-4">
        <div className="mt-20 flex flex-col lg:flex-row items-center justify-center h-full gap-8 lg:gap-80 ">
          <div className="mt-28 text-center" data-aos="fade-up" data-aos-delay="0">
            <h4 className="relative font-serif text-[#b1bde7]  text-4xl">
              Md Sajjad
            </h4>
            <h1 className="font-serif text-5xl lg:text-8xl leading-tight text-slate-200">
              FullStack<br />Developer
            </h1>
            <div id="herobtn" className="mt-4">
              <div className="inline-block mx-2 bg-blue-900 text-white p-4 rounded-lg">
                <a className="resume font-sans" id="resume" href="/cv_sajjad.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </div>
              <div className="inline-block mx-2 bg-blue-900 text-white p-4 rounded-lg">
                <a className="resume" id="github" href="https://github.com/imsajju" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
            <About/>
          </div>
          <div id="profilediv" className="mt-8  lg:mt-[-15rem] flex flex-col items-center lg:items-start">
            <img
              src="../../pic1.png"
              width="300"
              className="img-responsive rounded-full"
              id="profilepic"
              alt=""
              data-aos="fade-right"
              data-aos-delay="0"
            />
            <div className="w-60 flex justify-center mt-8 space-x-6 mx-11">
              <a href="https://www.linkedin.com/in/imsajju/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-4xl text-slate-200 hover:text-primary"/></a>
              <a href="https://x.com/Eyesajju" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter  className="text-4xl text-slate-200 hover:text-primary"/></a>
              <a href="https://github.com/imsajju" target="_blank" rel="noopener noreferrer"><FaGithub className="text-4xl text-slate-200 hover:text-primary"/></a>
              {/* <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-4xl text-slate-200 hover:text-primary"/></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Typed from "typed.js";
import Image from "next/image";
import profileImage from "/public/MuhammedKB.png";

import logopic from "/public/M1.png";

import instapic from "/public/instagram.png";
import fbpic from "/public/facebook.png";
import linkedpic from "/public/linkedin.png";
import github from "/public/github.png";

// import resume from "/public/Resume-Muhammed.pdf";

import Navbar from "./navbar";
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

  

function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  

  // useEffect(() => {
  //   const names = [ " Web Developer"," Web Designer","Student",];
  //   const options = {
  //     strings: names,
  //     typeSpeed: 100,
  //     backSpeed: 100,
  //     loop: true,
  //     showCursor: true,
  //     cursorChar: "|",
  //     autoInsertCss: true,
  //   };

  //   const typed = new Typed(".typed-text", options);

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <div className=" hero_section   text-maincolor-100 lg:h-screen sm:h-screen  ">
        <div  className="hero_content"  >
      <Navbar />
      <div className="lg:text-6xl  sm:text-2xl w-80 h-40 ml-auto mr-auto mt-24 ">
        <h1>Hello I&apos;m </h1>
        <h1 className="whitespace-nowrap" >Muhammed K B</h1>
       
        {/* <div className="flex flex-row  font-extrabold  text-lg  whitespace-nowrap   ">
        <p>I am a  &nbsp; </p>  
          <h1>Web Developer</h1>
        </div> */}
        
        
     <p className="text-lg  w-96 font-semibold bg-transparent sm:w-80  ">
     Greetings! As a web developer, I &apos;m passionate about turning creative
          ideas into dynamic web pages. 
           Right now, I &apos;m up for interesting collaborations and new opportunities. Together, let&apos;s
          connect and produce something truly amazing!
        </p> 
       <div   >

       <a href="#ContactUs">
          
          <Button className="bg-maincolor-100 text-white h-auto lg:text-xl lg:py-2 lg:px-4 rounded  sm:text-sm ">Contact me    </Button>
             </a>
             <a  href="/Resume-Muhammed.pdf"   download="Muhammed-Resume" >
            
            <Button  icon={<DownloadOutlined/>}  className="bg-maincolor-100 ml-3 text-white h-auto lg:text-xl lg:py-2 lg:px-4 rounded  sm:text-sm "> Resume    </Button>
               </a>  
        </div>         
      </div>
     

        </div>
      
          </div>
  );
}

export default Hero;

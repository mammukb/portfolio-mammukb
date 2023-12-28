"use client";

import React, { useState, useEffect, useCallback } from "react";
import Typed from "typed.js";
import Image from "next/image";
import profileImage from "/public/MuhammedKB.png";

function Hero() {
  

  useEffect(() => {
    const names = [ " Web Developer"," Web Designer"];
    const options = {
      strings: names,
      typeSpeed: 500,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    };

    const typed = new Typed(".typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="border-2  m-20 justify-center gap-52 mt-16 sm:m-8  flex   lg:flex-row   items-center   rounded-xl text-maincolor-100     sm:flex-col sm:gap-10             ">
      <div className="lg:text-6xl  sm:text-lg ">
        <h1>Hello I&apos;m </h1>
        <h1 className="whitespace-nowrap" >Muhammed K B</h1>
       
        <div className="flex flex-row  border-b-2 text-lg  whitespace-nowrap   ">
        <p>I am a Passionate &nbsp; </p>  
          <h1 className="typed-text"></h1>
        </div>
        <br />
      {/* <p className="text-lg">
          Greetings! As a web developer, I'm passionate about turning creative
          ideas into dynamic web pages. I specialize in writing clear, effective
          code to create user-friendly interfaces. I have a persistent curiosity
          about new technologies, and I'm excited to work on creative projects.
          Right now, I'm up for interesting collaborations and new
          opportunities. Together, let's connect and produce something truly
          amazing!
        </p> */ }
      </div>
      <div className="">
          <Image
            src={profileImage}
            width={400}
            height={400}
            className="rounded-full"
            alt="My pic"
          />
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import Skills from "./skills";

function Aboutme() {
  return (
    <>
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-maincolor-50"></div>
        <span class="flex-shrink mx-4 text-maincolor-50 text-3xl">
          About Me
        </span>
        <div class="flex-grow border-t border-maincolor-50"></div>
      </div>

      <div className="bg-maincolor-150  mx-44 p-8  text-lg rounded-xl text-white px-28  sm:text-sm sm:mx-10 sm:p-8   ">
        <p>
          Greetings! As a web developer, I &apos;m passionate about turning creative
          ideas into dynamic web pages. I specialize in writing clear, effective
          code to create user-friendly interfaces. I have a strong background in
          computer science and a strong interest in web development, and I &apos;m
          excited to work on creative projects. Right now, I &apos;m up for
          interesting collaborations and new opportunities. Together, let&apos;s
          connect and produce something truly amazing!
        </p>
      </div>
      <Skills/>
    </>
  );
}

export default Aboutme;

"use client";

import React, { useState } from "react";
import logopic from "/public/M1.png";
import Image from "next/image";
import instapic from "/public/instagram.png";
import fbpic from "/public/facebook.png";
import linkedpic from "/public/linkedin.png";
import github from "/public/github.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="  border-white ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          
          <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white       ">
            Portfolio
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-600"
          onClick={toggleMobileMenu}
          aria-controls="navbar-multi-level"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto `}
          id="navbar-multi-level"
        >
          <ul className=" lg:items-center  flex flex-col gap-4 font-medium p-4 md:p-0 mt-5 border border-white rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0    ">
            {/* ... (other menu items) */}
            <li>
              <a
                href="#Home"
                class=" block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Aboutme"
                class="  block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Project"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#ContactUs"
                /* class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                 */
              >
                <button className="border-2  p-2 rounded-lg text-blue-700 w-auto  bg-white  ">
                  Say Hello !
                </button>
              </a>
            </li>
            {/* ... (other menu items) */}
          </ul>
          {/* <p  className="text-white m-3  lg:hidden " >Connect on :</p>

          <div className="flex flex-row gap-4 items-center m-3 mt-3 text-white text-center text-xs  lg:hidden ">
            <a href="https://instagram.com/__mammu_kb__?igshid=ZDdkNTZiNTM=">
              <Image
                src={instapic}
                width={30}
                height={30}
                className=""
                alt="My pic"
              />
              
            </a>
            <a href="https://www.facebook.com/muhammed.kb.39?mibextid=ZbWKwL">
              <Image
                src={fbpic}
                width={30}
                height={30}
                className=""
                alt="My pic"
              />
          
            </a>
            <a href="http://www.linkedin.com/in/muhammedkb">
              <Image
                src={linkedpic}
                width={30}
                height={30}
                className=""
                alt="My pic"
              />
            
            </a>
            <a href="https://github.com/mammukb">
              <Image
                src={github}
                width={30}
                height={30}
                className=""
                alt="My pic"
              />
            
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

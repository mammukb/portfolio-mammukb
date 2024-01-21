"use client";

import React from "react";
import Saetmepic from "/public/seatme.png";
import wimspic from "/public/wims.png";
import taskypic from "/public/tasky.png";
import apipic from "/public/API.png";
import bookmyshowpic from "/public/bookmyshow.png";
import zomatopic from "/public/zomato.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const projectList = [
    {
      name: "Seatme",
      image: Saetmepic,
      description:
        "Web application that streamlines the seat allocation process for colleges, thus providing examinees with quick access to their assigned seats.",
      language: "Nextjs , Node js , MySql,tailwind,sequilize ",
    },
    {
      name: "BookmySHow clone",
      image: bookmyshowpic,
      description:
        "My React.js and Tailwind CSS-powered BookMyShow clone offers a sleek and responsive interface for easy event discovery and booking. ",
      language: "React js, tailwind css ",
    },
    {
      name: "Wood Industry Management System",
      image: wimspic,
      description:
        "Automate and optimize various business procedures, leading to increased productivity and efficient resource utilization in the wood industry. ",
      language: "Html , css , PHP ",
    },
    /* {
      name: "API project",
      image: apipic,
      description: "exam seating arrangement ",
      language: "Nodejs , MongoDB ",
    },
    {
      name: "Tasky",
      image: taskypic,
      description: "exam seating arrangement ",
      language: "Html,css,javascript ",
    },
    {
      name: "Zomato sample-Landing page",
      image: zomatopic,
      description: "exam seating arrangement ",
      language: "Html,css,javascript ",
    },*/
  ];

  return (
    <div className="bg-maincolor-150 md:mx-28 md:mt-5 sm:m-6 p-2 overflow-y-auto  rounded-2xl ">
      <h1 className="text-center text-5xl font-semibold text-maincolor-100">
        Projects
      </h1>
      <hr className="text-maincolor-50 m-6 " />

      <div className="lg:flex  gap-5 md:hidden sm:hidden  lg:flex-row lg:justify-center  ">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="w-64 mx-10 border border-gray-200 rounded-lg shadow bg-maincolor-50"
          >
            <div className="rounded-t-lg  ">
              <Image
                src={project.image}
                alt={`Project ${index + 1}`}
                layout="responsive"
                width={200} // Set the width as needed
                height={200} // Set the height as needed
              />
            </div>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {project.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                About : <br /> {project.description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Techs: <br /> {project.language}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden lg:hidden sm:block  flex sm:flex-row  sm:gap-10  ">
        {projectList.map((project, index) => (
          <div  key={index} className="bg-maincolor-50 m-5 text-white rounded-lg flex flex-col p-3"  >
            <h1 className="text-center text-xl font-bold mt-2"   > {project.name}   </h1>
               <hr className="text-maincolor-50 m-2 " />
            Techs :<br /> {project.language}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

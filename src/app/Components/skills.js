import React from "react";
import Image from "next/image";

function Skills() {
  // Number of images
  const numberOfImages = 14;

  // Generate an array of image paths
  const imageArray = Array.from({ length: numberOfImages }, (_, index) => {
    const imageNumber = index + 1;
    return `/images/image${imageNumber}.png`; // Use relative path
  });

  return (
    <>
      <div className="flex lg:flex-row sm:flex-col">
        <div className="text-maincolor-50 sm:m-11 lg:m-20">
          <h1 className="lg:text-8xl font-extrabold sm:text-6xl whitespace-nowrap ">
            Things <br /> I Know ??
          </h1>
          <p className="text-sm  whitespace-nowrap  ">I&apos;m familiar with using these technologies</p>
        </div>
        <div  className="flex flex-row gap-8 flex-wrap items-center sm:m-11  "  >
          {imageArray.map((imageUrl, index) => (
            <Image
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              width={100}
              height={100}
               className="circularImage    "
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;



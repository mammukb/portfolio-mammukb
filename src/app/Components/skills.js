"use client"

import React from "react";
import Image from "next/image";

function skills() {
 /* // Number of images
  const numberOfImages = 14;
  const testImagePath = `${process.env.PUBLIC_URL}/images/image1.png`;
  console.log("Test Image Path:", testImagePath);

  // Generate an array of image paths
  const imageArray = Array.from({ length: numberOfImages }, (_,index) => {
    const imageNumber = index + 1;
    return `../../../public/images/image${imageNumber}.png`;
  });*/

  //

  return (
    <>
      <div className="flex lg:flex-row sm:flex-col">
        <div className="text-maincolor-50 sm:m-11 lg:m-20 ">
          <h1 className="lg:text-8xl  font-extrabold  sm:text-6xl   ">
            Things <br /> I Know ??
          </h1>
          <p className="text-sm"> Familiar with using these technologies</p>
        </div>
        <div>
          {/*imageArray.map((imageUrl, index) => (
            <Image key={index} src={imageUrl} alt={`Image ${index + 1}`}   width={100} height={100}   />
          ))*/}
        </div>
      </div>
    </>
  );
}

export default skills;

"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";

function Skills() {
  const numberOfImages = 14;
  const intervalTime = 5000; // Change image every 5 seconds

  // Generate an array of image paths
  const imageArray = Array.from({ length: numberOfImages }, (_, index) => {
    const imageNumber = index + 1;
    return `/images/image${imageNumber}.png`; // Use relative path
  });

  // State to store the current 4 images to display
  const [currentImages, setCurrentImages] = useState([]);
  const [currentOpacity, setCurrentOpacity] = useState(1);

  // Function to shuffle the image array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Function to update the current images with fading effect
  const updateCurrentImages = () => {
    setCurrentOpacity(0); // Set opacity to 0 for fading effect
    setTimeout(() => {
      const shuffledArray = shuffleArray(imageArray);
      const selectedImages = shuffledArray.slice(0, 4);
      setCurrentImages(selectedImages);
      setCurrentOpacity(1); // Set opacity back to 1 after updating images
    }, 500); // Wait for 500ms before updating images to allow fading effect
  };

  // useEffect to update current images on component mount and set interval for continuous changes
  useEffect(() => {
    updateCurrentImages();
    const intervalId = setInterval(updateCurrentImages, intervalTime);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div className="flex lg:flex-row sm:flex-col">
        <div className="text-maincolor-50 sm:m-11 lg:m-20">
          <h1 className="lg:text-8xl font-extrabold sm:text-6xl whitespace-nowrap">
            Things <br /> I Know ??
          </h1>
          <p className="text-sm  whitespace-nowrap  ">I&apos;m familiar with using these technologies</p>
        </div>
        <div className="flex flex-row gap-8 flex-wrap items-center sm:m-8">
          {currentImages.map((imageUrl, index) => (
            <div
              key={index}
              className="imageWrapper"
              style={{ opacity: currentOpacity, transition: "opacity 0.5s ease-in-out" }}
            >
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width={100}
                height={100}
                className="circularImage"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;





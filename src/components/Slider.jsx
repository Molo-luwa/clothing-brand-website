"use client";
import { useState, useEffect } from "react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "/images/slideshow/2.JPEG",
    "/images/slideshow/3.JPEG",
    "/images/slideshow/4.JPEG",
    "/images/slideshow/5.JPEG",
    "/images/slideshow/6.JPEG",
    "/images/slideshow/7.JPEG",
    "/images/slideshow/8.JPEG",
    "/images/slideshow/9.JPEG",
    "/images/slideshow/11.JPEG",
    "/images/slideshow/12.JPEG",
    "/images/slideshow/13.JPEG",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden bg-black">
      <img
        src={slides[currentIndex]}
        alt="slideshow"
        className="w-full h-full object-cover transition-opacity duration-700"
      />
    </div>
  );
};

export default Slider;

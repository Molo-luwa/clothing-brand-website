import { useState, useEffect } from 'react';
const Slider = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const slides = [
    <>
      <img src="/1.HEIC" alt="image" />
      <img src="/2.JPEG" alt="image" />
      <img src="/3.JPEG" alt="image" />
      <img src="/4.JPEG" alt="image" />
      <img src="/5.JPEG" alt="image" />
      <img src="/6.JPEG" alt="image" />
      <img src="/7.JPEG" alt="image" />
      <img src="/8.JPEG" alt="image" />
      <img src="/9.JPEG" alt="image" />
      <img src="/10.HIEC" alt="image" />
      <img src="/11.JPEG" alt="image" />
      <img src="/12.JPEG" alt="image" />
      <img src="/13.JPEG" alt="image" />
    </>
  ];
  return (
    <>
      <div className="min-h-screen flex flex-col bg-black text-white">
        
        <div ></div>
      </div>
    </>
  )
}

export default Slider

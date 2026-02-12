import React from 'react';
import { Instagram, Youtube, Music2, Target } from 'lucide-react';

const Footerr = () => {
  return (
    <footer className="bg-black text-white py-10 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        
        {}
        <div className="mb-7">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Contact Us
          </h2>
          <a 
            href="mailto:bolapsd@gmail.com" 
            className="text-lg font-light hover:opacity-70 transition-opacity"
          >
            antho.syllogi@gmail.com
          </a>
        </div>

        {}
        <div className="flex justify-center items-center gap-8 mb-2">
          <a href="#" className="hover:scale-110 transition-transform">
            <Instagram size={24} strokeWidth={1.5} />
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <Youtube size={24} strokeWidth={1.5} />
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <Music2 size={24} strokeWidth={1.5} /> 
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <Target size={24} strokeWidth={1.5} /> 
          </a>
        </div>

        {}
        <div className="w-full flex justify-start ">
          <select className="bg-transparent text-xs font-medium outline-none cursor-pointer">
            <option>NGN ₦</option>
            <option>USD $</option>
          </select>
        </div>
        
      </div>
    </footer>
  );
};

export default Footerr;
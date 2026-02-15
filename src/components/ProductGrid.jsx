import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 'antho-prevails-white', name: "ANTHO PREVAILS TEE", color: "WHITE", price: "15,000", img: "/images/gridimg/white_prevails.jpg", isComingSoon: false },
  { id: 'antho-prevails-black', name: "ANTHO PREVAILS TEE", color: "BLACK", price: "15,000", img: "/images/gridimg/white_glp.jpg", isComingSoon: false },
  { id: 'antho-global-white', name: "ANTHO GLOBAL TEE", color: "WHITE", price: "30,000", img: "/images/gridimg/white_prevails.jpg", isComingSoon: false },
  { id: 'antho-global-black', name: "ANTHO GLOBAL TEE", color: "BLACK", price: "30,000", img: "/images/gridimg/white_glp.jpg", isComingSoon: false },
  { id: 'antho-babies-white', name: "ANTHO BABIES WHITE", color: "", price: "25,000", img: "/images/gridimg/white_glp.jpg", isComingSoon: false },
  { id: 'antho-babies-black', name: "ANTHO BABIES BLACK", color: "", price: "25,000", img: "/images/gridimg/white_prevails.jpg", isComingSoon: false },
  { id: 'antho-npng-grey', name: "ANTHO “NPNG” SWEATS", color: "GREY", price: "25,000", img: "/logo.png", isComingSoon: true },
  { id: 'antho-npng-black', name: "ANTHO “NPNG” SWEATS", color: "BLACK", price: "25,000", img: "/logo.png", isComingSoon: true },
  { id: 'antho-99-polo', name: "ANTHO 99’ POLO", color: "WHITE", price: "45,000", img: "/logo.png", isComingSoon: true },
  { id: 'antho-family-pack', name: "ANTHO FAMILY PACK", color: "PACK", price: "125,000", img: "/logo.png", isComingSoon: true },
];

const ProductGrid = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
        {products.map((product) => (
          <Link 
            to={product.isComingSoon ? "#" : `/product/${product.id}`} 
            key={product.id} 
            className={`group flex flex-col ${product.isComingSoon ? 'cursor-default' : 'cursor-pointer'}`}
            onClick={(e) => product.isComingSoon && e.preventDefault()}
          >
                      {/* Updated Image Container */}
          <div className="relative w-full aspect-[3/4] bg-black overflow-hidden mb-4 rounded-sm flex items-center justify-center p-2">
            <img 
              src={product.img} 
              alt={product.name} 
              className={`w-full h-full object-contain transition-all duration-700 ease-out
                ${!product.isComingSoon && 'group-hover:scale-110 group-hover:rotate-[-3deg] group-hover:brightness-110'}`}
            />

            {/* Coming Soon Overlay */}
            {product.isComingSoon && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                <span className="text-white text-[10px] font-black italic uppercase tracking-[0.3em] border border-white/20 px-4 py-2 bg-black/40 backdrop-blur-sm">
                  Coming Soon
                </span>
              </div>
            )}
          </div>
            
            {/* Text Details */}
            <div className={`flex flex-col space-y-1 ${product.isComingSoon ? 'opacity-50' : 'opacity-100'}`}>
              <h3 className="text-white text-[12px] font-black italic uppercase tracking-tighter leading-tight">
                {product.name}
              </h3>
              
              {product.color && (
                <p className="text-[10px] text-zinc-500 uppercase font-medium">{product.color}</p>
              )}
              
              {!product.isComingSoon && (
                <p className="text-white text-[11px] font-bold mt-1">
                  ₦{product.price} <span className="text-[9px] text-zinc-400 ml-1">NGN</span>
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
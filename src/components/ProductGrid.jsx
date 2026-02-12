import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 'antho-prevails-white', name: "ANTHO PREVAILS TEE", color: "WHITE", price: "15,000", img: "https://placehold.co/400x600/white/black?text=Prevails+White" },
  { id: 'antho-prevails-black', name: "ANTHO PREVAILS TEE", color: "BLACK", price: "15,000", img: "https://placehold.co/400x600/white/black?text=Prevails+Black" },
  { id: 'antho-global-white', name: "ANTHO GLOBAL TEE", color: "WHITE", price: "30,000", img: "https://placehold.co/400x600/white/black?text=Global+White" },
  { id: 'antho-global-black', name: "ANTHO GLOBAL TEE", color: "BLACK", price: "30,000", img: "https://placehold.co/400x600/white/black?text=Global+Black" },
  { id: 'antho-babies-white', name: "ANTHO BABIES WHITE", color: "", price: "25,000", img: "https://placehold.co/400x600/white/black?text=Babies+White" },
  { id: 'antho-babies-black', name: "ANTHO BABIES BLACK", color: "", price: "25,000", img: "https://placehold.co/400x600/white/black?text=Babies+Black" },
  { id: 'antho-npng-grey', name: "ANTHO “NPNG” SWEATS", color: "GREY", price: "25,000", img: "https://placehold.co/400x600/white/black?text=NPNG+Grey" },
  { id: 'antho-npng-black', name: "ANTHO “NPNG” SWEATS", color: "BLACK", price: "25,000", img: "https://placehold.co/400x600/white/black?text=NPNG+Black" },
  { id: 'antho-99-polo', name: "ANTHO 99’ POLO", color: "WHITE", price: "45,000", img: "https://placehold.co/400x600/white/black?text=99+Polo" },
  { id: 'antho-family-pack', name: "ANTHO FAMILY PACK", color: "PACK", price: "125,000", img: "https://placehold.co/400x600/white/black?text=Family+Pack" },
];

const ProductGrid = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
        {products.map((product) => (
          <Link 
            to={`/product/${product.id}`} 
            key={product.id} 
            className="group flex flex-col"
          >
            {/* Image Container - Using zinc-900 for a subtle 'card' look on black */}
            <div className="w-full aspect-[3/4] bg-zinc-900 overflow-hidden mb-4 rounded-sm">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            
            {/* Text Details - Matching Navbar Italic/Bold style */}
            <div className="flex flex-col space-y-1">
              <h3 className="text-white text-[12px] font-black italic uppercase tracking-tighter leading-tight">
                {product.name}
              </h3>
              
              {product.color && (
                <p className="text-[10px] text-zinc-500 uppercase font-medium">{product.color}</p>
              )}
              
              <p className="text-white text-[11px] font-bold mt-1">
                ₦{product.price} <span className="text-[9px] text-zinc-400 ml-1">NGN</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
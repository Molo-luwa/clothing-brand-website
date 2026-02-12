import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  if (!product) return <div className="pt-32 text-center bg-black text-white min-h-screen uppercase italic font-black">Product not found</div>;

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Image Section - Using Zinc-900 to make product pop without a harsh white box */}
        <div className="bg-zinc-900 flex justify-center items-center overflow-hidden rounded-sm aspect-square md:aspect-auto">
          <img 
            src={product.img} 
            alt={product.name} 
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-700" 
          />
        </div>

        {/* Right: Info Section */}
        <div className="flex flex-col gap-6">
          <header>
            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none mb-2">
              {product.name} <br /> 
              <span className="text-zinc-500">{product.color}</span>
            </h1>
            <p className="text-2xl font-bold tracking-tight">₦{product.price}.00 <span className="text-sm text-zinc-400">NGN</span></p>
            <p className="text-[10px] text-zinc-500 tracking-widest uppercase mt-4">
              Tax included. <span className="underline cursor-pointer hover:text-white transition-colors">Shipping</span> calculated at checkout.
            </p>
          </header>

          {/* Size Selector */}
          <div className="mt-4">
            <p className="text-[11px] font-black italic uppercase tracking-widest mb-3 text-zinc-400">Size</p>
            <div className="flex flex-wrap gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button 
                  key={size} 
                  onClick={() => setSelectedSize(size)}
                  className={`border px-6 py-2 text-xs font-bold transition-all duration-300 ${
                    selectedSize === size 
                    ? 'border-white bg-white text-black' 
                    : 'border-zinc-800 text-white hover:border-zinc-500'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4">
            <p className="text-[11px] font-black italic uppercase tracking-widest mb-3 text-zinc-400">Quantity</p>
            <div className="flex items-center border border-zinc-800 w-32 justify-between px-4 py-3">
              <button className="hover:text-zinc-400" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span className="font-bold text-sm">{quantity}</span>
              <button className="hover:text-zinc-400" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full bg-white text-black py-4 uppercase tracking-widest font-black italic text-sm hover:bg-zinc-200 transition-all">
              Add to cart
            </button>
            
            <button className="w-full bg-[#5A31F4] text-white py-4 font-black italic uppercase text-sm rounded-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Buy with <span className="not-italic font-bold tracking-tighter text-lg">shop</span>
            </button>
          </div>
          
          <p className="text-center text-[10px] text-zinc-500 underline tracking-widest uppercase cursor-pointer hover:text-white transition-colors">
            More payment options
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
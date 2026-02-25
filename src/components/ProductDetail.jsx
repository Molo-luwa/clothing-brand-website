import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return <div className="pt-32 text-center bg-black text-white min-h-screen uppercase italic font-black">Product not found</div>;

  const images = product.images || [product.img];
  const currentImage = images[currentImageIndex];

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    navigate('/cart');
  };

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Image Section with Carousel */}
        <div className="flex flex-col">
          <div className="relative w-full aspect-square md:aspect-auto overflow-hidden rounded-sm group">
            <img 
              src={currentImage} 
              alt={product.name} 
              className="w-full h-full object-contain transition-transform duration-700 hover:scale-105" 
            />

            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-12 h-12 flex items-center justify-center rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 text-3xl"
                  aria-label="Previous image"
                >
                  ❮
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-12 h-12 flex items-center justify-center rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 text-3xl"
                  aria-label="Next image"
                >
                  ❯
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-white w-4' 
                      : 'bg-zinc-600 hover:bg-zinc-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right: Info Section (unchanged) */}
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

          <div className="mt-4">
            <p className="text-[11px] font-black italic uppercase tracking-widest mb-3 text-zinc-400">Quantity</p>
            <div className="flex items-center border border-zinc-800 w-32 justify-between px-4 py-3">
              <button className="hover:text-zinc-400" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span className="font-bold text-sm">{quantity}</span>
              <button className="hover:text-zinc-400" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-white text-black py-4 uppercase tracking-widest font-black italic text-sm hover:bg-zinc-200 transition-all"
            >
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
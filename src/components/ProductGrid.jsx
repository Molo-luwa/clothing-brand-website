import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data/products';

const ProductGrid = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search')?.toLowerCase() || "";

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.color.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="bg-black min-h-screen pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
        {filteredProducts.map((product) => (
          <Link 
            to={product.isComingSoon ? "#" : `/product/${product.id}`} 
            key={product.id} 
            className={`group flex flex-col ${product.isComingSoon ? 'cursor-default' : 'cursor-pointer'}`}
            onClick={(e) => product.isComingSoon && e.preventDefault()}
          >
            {/* Image Container */}
            <div className="relative w-full aspect-3/4 bg-black overflow-hidden mb-4 rounded-sm flex items-center justify-center p-2">
              <img 
                src={product.img} 
                alt={product.name} 
                className={`w-full h-full object-contain transition-all duration-700 ease-out
                  ${!product.isComingSoon && 'group-hover:scale-110 group-hover:rotate-3deg group-hover:brightness-110'}`}
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

      {/* NO RESULTS VIEW */}
      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-zinc-500 text-sm font-black italic uppercase tracking-widest">
            No items found for "{searchTerm}"
          </p>
          <Link to="/shop" className="text-white text-xs underline mt-4 uppercase">View all products</Link>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;

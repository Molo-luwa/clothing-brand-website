import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/,/g, ''));
      return total + price * item.quantity;
    }, 0);
  };

  const total = calculateTotal();

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase leading-none mb-2">
            Shopping Cart
          </h1>
          <p className="text-zinc-500 text-sm">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart
          </p>
        </header>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-zinc-500 text-lg font-black italic uppercase tracking-widest mb-6">
              Your cart is empty
            </p>
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 font-black italic uppercase text-sm hover:bg-zinc-200 transition-all"
            >
              Continue Shopping <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div 
                    key={`${item.id}-${item.selectedSize}`}
                    className="flex gap-6 border-b border-zinc-800 pb-6"
                  >
                    {/* Image */}
                    <div className="w-24 h-24 bg-zinc-900 rounded-sm flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-grow">
                      <h3 className="text-white font-black italic uppercase text-sm mb-1">
                        {item.name}
                      </h3>
                      {item.color && (
                        <p className="text-zinc-500 text-xs uppercase mb-2">{item.color}</p>
                      )}
                      <p className="text-zinc-400 text-xs mb-3">
                        Size: <span className="text-white font-bold">{item.selectedSize}</span>
                      </p>
                      <p className="text-white font-bold">
                        ₦{item.price} <span className="text-xs text-zinc-400">NGN</span>
                      </p>
                    </div>

                    {/* Quantity & Remove */}
                    <div className="flex flex-col items-end gap-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-zinc-800 px-3 py-2">
                        <button 
                          className="hover:text-zinc-400 text-sm"
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="font-bold text-sm mx-3 w-4 text-center">{item.quantity}</span>
                        <button 
                          className="hover:text-zinc-400 text-sm"
                          onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button 
                        onClick={() => removeFromCart(item.id, item.selectedSize)}
                        className="text-zinc-500 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900 rounded-sm p-6 sticky top-32">
                <h2 className="text-lg font-black italic uppercase mb-6 tracking-tight">Order Summary</h2>

                <div className="space-y-3 mb-6 border-b border-zinc-800 pb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Subtotal</span>
                    <span className="text-white font-bold">₦{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Shipping</span>
                    <span className="text-white font-bold">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Tax</span>
                    <span className="text-white font-bold">Calculated at checkout</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6 text-lg font-black">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>

                <button className="w-full bg-white text-black py-4 font-black italic uppercase text-sm hover:bg-zinc-200 transition-all mb-3">
                  Checkout
                </button>

                <Link 
                  to="/shop"
                  className="block text-center text-white text-xs underline hover:text-zinc-300 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { usePaystackPayment } from 'react-paystack';

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart(); // Added clearCart to clean up after payment
  
  // 1. Expanded Form State to capture everything
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    phone: ''
  });

  const [shippingFee, setShippingFee] = useState(0);

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseInt(item.price.replace(/,/g, ''));
    return acc + price * item.quantity;
  }, 0);

  const total = subtotal + shippingFee;

  const nigerianStates = [
    "Covenant University", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData(prev => ({ ...prev, state: selectedState }));

    if (selectedState === "Covenant University") {
      setShippingFee(3000);
    } else if (selectedState === "Lagos") {
      setShippingFee(6500);
    } else if (selectedState === "") {
      setShippingFee(0);
    } else {
      setShippingFee(9000); 
    }
  };

  // 2. Enhanced Paystack Config
  const config = {
    reference: (new Date()).getTime().toString(),
    email: formData.email,
    amount: total * 100, // Kobo
    publicKey: import.meta.env.VITE_PAYSTACK_SECRET_KEY,
    metadata: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      // This helps you see the order details inside your Paystack Dashboard
      custom_fields: [
        {
          display_name: "Items Purchased",
          variable_name: "items_purchased",
          value: cartItems.map(item => `${item.name} (${item.selectedSize}) x${item.quantity}`).join(", ")
        },
        {
          display_name: "Delivery Address",
          variable_name: "delivery_address",
          value: `${formData.address}, ${formData.city}, ${formData.state}`
        }
      ]
    }
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    console.log("Payment Reference:", reference);
    clearCart(); // Clear the items so they don't buy them twice
    navigate('/success', { state: { ref: reference.reference, total: total } });
  };

  const onClose = () => {
    alert("Transaction cancelled. Your items are still in the cart.");
  };

//   useEffect(() => {
//     if (cartItems.length === 0) {
//       navigate('/cart');                 
//     }
//   }, [cartItems, navigate]);

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6 font-bold uppercase italic">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT: DELIVERY FORM */}
        <div className="lg:col-span-7 space-y-10">
          <h1 className="text-4xl font-black tracking-tighter uppercase leading-none">Checkout</h1>
          
          <div className="space-y-8 italic">
            <section>
              <h2 className="text-[10px] tracking-[0.3em] text-zinc-500 mb-4 uppercase">Contact Information</h2>
              <input 
                name="email"
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border border-zinc-800 p-4 text-xs focus:border-white outline-none transition-all"
                onChange={handleInputChange}
                required
              />
            </section>

            <section className="space-y-4">
              <h2 className="text-[10px] tracking-[0.3em] text-zinc-500 mb-4 uppercase">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <input name="firstName" type="text" placeholder="First Name" className="bg-transparent border border-zinc-800 p-4 text-xs focus:border-white outline-none transition-all" onChange={handleInputChange} />
                <input name="lastName" type="text" placeholder="Last Name" className="bg-transparent border border-zinc-800 p-4 text-xs focus:border-white outline-none transition-all" onChange={handleInputChange} />
              </div>
              <input name="address" type="text" placeholder="Street Address" className="w-full bg-transparent border border-zinc-800 p-4 text-xs focus:border-white outline-none transition-all" onChange={handleInputChange} />
              
              <div className="grid grid-cols-2 gap-4">
                <input name="city" type="text" placeholder="City" className="bg-transparent border border-zinc-800 p-4 text-xs focus:border-white outline-none transition-all" onChange={handleInputChange} />
                <select 
                  className="bg-black border border-zinc-800 p-4 text-xs focus:border-white outline-none transition-all appearance-none cursor-pointer italic font-bold"
                  onChange={handleStateChange}
                  value={formData.state}
                >
                  <option value="">Select State</option>
                  {nigerianStates.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              
              <input name="phone" type="tel" placeholder="Phone (e.g. +234...)" className="w-full bg-transparent border border-zinc-800 p-4 text-xs focus:border-white outline-none transition-all" onChange={handleInputChange} />
            </section>
          </div>
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="lg:col-span-5">
          <div className="bg-zinc-900/50 p-8 rounded-sm sticky top-32 border border-zinc-800">
            <h2 className="text-xl font-black mb-8 tracking-tighter uppercase italic">Your Order</h2>
            
            <div className="space-y-6 mb-8 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 border-b border-zinc-800 pb-4">
                  <div className="w-16 h-20 bg-zinc-900 rounded-sm shrink-0">
                    <img src={item.img} alt="" loading="eager" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[10px] font-black leading-tight uppercase">{item.name}</h3>
                    <p className="text-[9px] text-zinc-500 uppercase italic">Size: {item.selectedSize} × {item.quantity}</p>
                    <p className="text-xs mt-1 font-bold italic">₦{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-xs mb-8 italic">
              <div className="flex justify-between text-zinc-500">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>Shipping</span>
                <span>{shippingFee > 0 ? `₦${shippingFee.toLocaleString()}` : "Select State"}</span>
              </div>
              <div className="flex justify-between text-lg font-black border-t border-zinc-800 pt-4 uppercase tracking-tighter">
                <span>Total</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            </div>

            <button 
              onClick={() => {
                if(!formData.email || !formData.state || !formData.firstName || !formData.phone) {
                  alert("Fill in all details to proceed to payment.");
                  return;
                }
                initializePayment(onSuccess, onClose);
              }}
              className="w-full bg-white text-black py-4 hover:bg-zinc-200 transition-all font-black tracking-widest text-sm uppercase italic"
            >
              Confirm & Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
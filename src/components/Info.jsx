import React from 'react';

const Info = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 border-b border-zinc-800 pb-8">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none mb-4">
            Shipping <br /> 
            <span className="text-zinc-500">& Delivery</span>
          </h1>
        </header>

        {/* Content Section */}
        <div className="space-y-12">
          <section>
            <p className="text-[11px] font-black italic uppercase tracking-[0.3em] mb-4 text-zinc-500">
              Processing Time
            </p>
            <p className="text-lg md:text-xl font-bold tracking-tight leading-relaxed max-w-xl">
              All orders are processed within <span className="text-zinc-400">5-7 business days</span> before they are sent out for delivery.
            </p>
          </section>

          <section>
            <p className="text-[11px] font-black italic uppercase tracking-[0.3em] mb-4 text-zinc-500">
              Tracking
            </p>
            <p className="text-lg md:text-xl font-bold tracking-tight leading-relaxed">
              Once your order has shipped, you will receive an email confirmation with your tracking information.
            </p>
          </section>
        </div>

        {/* Support Link */}
        <div className="mt-20">
          <a 
            href="mailto:antho.syllogi@gmail.com" 
            className="text-[10px] font-black italic uppercase tracking-widest border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-500"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
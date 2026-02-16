import React from 'react';

const BrandIcons = {
  Snapchat: ({ size = 24 }) => (
    <svg role="img" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C7.03 0 3 4.03 3 9c0 1.29.27 2.52.76 3.63L2.25 15h3.19l.56 1.13C7.14 18.39 9.42 19.5 12 19.5s4.86-1.11 6-3.37l.56-1.13h3.19l-1.51-2.37C20.73 11.52 21 10.29 21 9c0-4.97-4.03-9-9-9zm0 2c3.87 0 7 3.13 7 7 0 1.13-.27 2.21-.74 3.17l-.37.75 1.12 1.76h-1.42l-.84 1.68C15.82 17.84 14 18.5 12 18.5s-3.82-.66-4.75-2.14l-.84-1.68H5.01l1.12-1.76-.37-.75C5.27 11.21 5 10.13 5 9c0-3.87 3.13-7 7-7z" />
    </svg>
  ),
  X: ({ size = 24 }) => (
    <svg role="img" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  ),
  Instagram: ({ size = 24 }) => (
    <svg role="img" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.981-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  TikTok: ({ size = 24 }) => (
    <svg role="img" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-4.17.07-8.33.07-12.5z" />
    </svg>
  )
};

const Footerr = () => {
  return (
    <footer className="bg-black text-white py-12 flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        
        <div className="mb-8">
          <h2 className="text-[11px] font-black italic tracking-[0.3em] uppercase mb-4 text-zinc-500">
            Contact Us
          </h2>
          <a 
            href="mailto:antho.syllogi@gmail.com" 
            className="text-lg font-bold italic tracking-tighter hover:opacity-70 transition-opacity"
          >
            antho.syllogi@gmail.com
          </a>
        </div>

        <div className="flex justify-center items-center gap-10 mb-12">
          <a href="https://snapchat.com/t/yXLe7p2I" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
            <BrandIcons.Snapchat size={22} />
          </a>

          <a href="https://x.com/syllogiantho?s=21" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
            <BrandIcons.X size={20} />
          </a>

          <a href="https://www.instagram.com/antho.syllogi" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
            <BrandIcons.Instagram size={22} />
          </a>

          <a href="https://www.tiktok.com/@antho.syllogi" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">
            <BrandIcons.TikTok size={22} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footerr;
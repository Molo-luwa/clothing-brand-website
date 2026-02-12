import { useState } from 'react'
import { motion, MotionConfig, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag } from 'lucide-react'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const closeMenu = () => setActive(false);

  return (
    <>
      <nav className='bg-black fixed top-0 left-0 w-full z-100 h-16 flex items-center px-6 md:px-12'>
        <div className='w-full flex justify-between items-center max-w-1440px mx-auto'>
          
          {/* LEFT: THE "2.5 LINE" HAMBURGER */}
          <div className="flex-1 flex justify-start">
            <MotionConfig transition={{ duration: 0.5, ease: 'easeInOut' }}>
              <motion.button
                initial={false}
                animate={active ? 'open' : 'closed'}
                onClick={() => setActive((pv) => !pv)}
                className='relative h-10 w-10 flex flex-col items-center justify-center'
              >
                {/* Top Line */}
                <motion.span 
                  className='h-0.5 w-8 bg-white absolute' 
                  style={{ top: '35%', left: '50%', x: '-50%', y: '-50%' }}
                  variants={{
                    open: { rotate: '45deg', top: '50%', width: '32px' },
                    closed: { rotate: '0deg', top: '35%', width: '32px' }
                  }}
                />
                {/* Middle Line */}
                <motion.span 
                  className='h-0.5 w-8 bg-white absolute'
                  style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                  variants={{
                    open: { rotate: '-45deg', width: '32px' },
                    closed: { rotate: '0deg', width: '32px' }
                  }}
                />
                {/* Bottom "Half" Line */}
                <motion.span 
                  className='h-0.5 w-4 bg-white absolute'
                  style={{ bottom: '35%', left: 'calc(50% + 8px)', x: '-50%', y: '50%' }}
                  variants={{
                    open: { opacity: 0, bottom: '50%', left: '50%' },
                    closed: { opacity: 1, bottom: '35%', left: 'calc(50% + 8px)' }
                  }}
                />
              </motion.button>
            </MotionConfig>
          </div>

          {/* CENTER: LOGO - Points to Home (Slider) */}
          <div className="flex-1 flex justify-center">
            <Link to="/" onClick={closeMenu}>
              <h1 className="text-white text-3xl font-bold tracking-tighter uppercase italic">
                <img src="/logo.png" alt="" className='w-20 h-20' />
              </h1>
            </Link>
          </div>

          {/* RIGHT: ICONS */}
          <div className="flex-1 flex justify-end items-center gap-6 text-white">
            <Search size={22} strokeWidth={1.5} className="cursor-pointer hover:opacity-70 transition-opacity" />
            <Link to="/cart" onClick={closeMenu}>
              <ShoppingBag size={22} strokeWidth={1.5} className="hover:opacity-70 transition-opacity" />
            </Link>
          </div>
        </div>
      </nav>

      {/* FLOATING DROPDOWN MENU */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-6 z-110 bg-white rounded-lg shadow-2xl overflow-hidden w-64"
          >
            <div className="flex flex-col">
              {/* NEW - Summons Grid */}
              <Link
                to="/shop"
                onClick={closeMenu}
                className="px-6 py-4 text-black text-lg font-black italic uppercase tracking-tighter border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                New
              </Link>
              
              {/* SHOP ALL - Summons Grid */}
              <Link
                to="/shop"
                onClick={closeMenu}
                className="px-6 py-4 text-black text-lg font-black italic uppercase tracking-tighter border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                Shop All
              </Link>

              {/* INFO */}
              <Link
                to="/info"
                onClick={closeMenu}
                className="px-6 py-4 text-black text-lg font-black italic uppercase tracking-tighter border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                Info
              </Link>

              {/* MY CART */}
              <Link
                to="/cart"
                onClick={closeMenu}
                className="px-6 py-4 text-black text-lg font-black italic uppercase tracking-tighter hover:bg-gray-50 transition-colors"
              >
                My Cart
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar;
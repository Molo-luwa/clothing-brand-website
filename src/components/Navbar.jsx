import { useState } from 'react'
import {motion, MotionConfig} from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState(false);
  return (
    <nav className='bg-black shadow-lg  justify-around py-3 px-32 fixed top-0 left-0 w-full'>
      <MotionConfig
        transition ={{ 
              duration: 0.5, 
              ease: 'easeInOut'
            }}
      >
        <motion.button
          initial={false}
          animate ={active ? 'open' : 'closed'}
          onClick={() => setActive((pv) => !pv)}
          className='bg-black/0'
          >
          
            <motion.span 
            className='absolute h-1 w-10 bg-white' 
            style={{
                left: '50%',
                top: '35%',
                x:'-50%',
                y:'-50%', 
            }}
            variants ={{
                open: { 
                  rotate: ['0deg', '0deg',  '45deg'],
                  top: ['35%', '50%', '50%'], 
                },
                closed: { 
                  rotate: ['45deg', '0deg',  '0deg'],
                  top: ['50%', '50%', '35%'], 
                },
            }}
            />

            <motion.span 
            style={{
                left: '50%',
                top: '50%',
                x: '-50%',
                y:'-50%', 
            }} 
            className='absolute h-1 w-10 bg-white' 
            variants ={{
                open: { 
                  rotate: ['0deg', '0deg',  '-45deg'],
                },
                closed: { 
                  rotate: ['-45deg', '0deg',  '0deg'],
                },
            }}
            />

            <motion.span 
            style={{
                left: 'calc(50% + 10px)',
                bottom: '35%',
                x:'-50%',
                y:' 50%', 
            }}
            className='absolute h-1 w-5 bg-white' 
            variants ={{
                open: { 
                  rotate: ['0deg', '0deg',  '45deg'],
                  bottom: ['35%', '50%', '50%'], 
                  left: '50%',
                },
                closed: { 
                  rotate: ['45deg', '0deg',  '0deg'],
                  bottom: ['50%', '50%', '35%'], 
                  left: 'calc(50% + 10px)',
                },
            }}
            />

        </motion.button>
      </MotionConfig>  

      {/* <div className='flex items-center gap-5 text-black'>
        <Link to='/' className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
          Home
        </Link>

        <Link to='/' className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
          Home2
        </Link>

        <Link to='/' className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
          Home3
        </Link>

        <Link to='/' className='py-1 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300'>
          Home4
        </Link>

      </div> */}

    </nav>
    
  )
}

export default Navbar
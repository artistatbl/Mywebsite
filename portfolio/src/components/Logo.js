import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"


const MotionLink = motion(Link);

function Logo() {
     return (
          <div className='flex-items-center text-red-500 justify-center mt-2'>
               <MotionLink href="/" className='w-16 h-16 bg-dark text-light flex items-center justify-center 
			rounded-full text-2xl '
			whileHover={{background:["rgba(255, 0, 0, 1)","rgba(0, 0, 255, 1)","rgba(255, 255, 0, 1)","rgba(128, 0, 128, 1)"],
			transition:{duration:1.2, repeat:Infinity}}}>

                    JD


               </MotionLink>
          </div>
     )
}

export default Logo;

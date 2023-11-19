import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import Image from 'next/image';
import profilePic from "../../images/profile/log.png";

const MotionLink = motion(Link);

function Logo() {
    return (
        <div className='flex items-center justify-center mt-2 relative'>
            <MotionLink href="/">
                
            {/* <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.4rem] bg-dark rounded-br-2xl' /> */}

                    <Image src={profilePic} className='w-20 h-20 bg-gray-500 flex items-center justify-center rounded-full' />
                    
                 
            </MotionLink>
        </div>
    )
}

export default Logo;

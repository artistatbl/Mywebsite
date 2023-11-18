import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import Image from 'next/image';
import profilePic from "../../images/profile/log.png";

const MotionLink = motion(Link);

function Logo() {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/">
                
                    <Image src={profilePic} className='w-24 h-24  flex items-center justify-center rounded-full' />
                    
                
            </MotionLink>
        </div>
    )
}

export default Logo;

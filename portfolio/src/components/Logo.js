import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import Image from 'next/image';
import profilePic from "../../images/profile/log.png";

const MotionLink = motion(Link);

function Logo({ darkMode }) {
  const borderColorClass = darkMode ? 'border-light' : 'border-dark';

  return (
    <div className='flex items-center justify-center mt-2 relative'>
      <MotionLink href="/" className=''>
        <Image
          src={profilePic}
          className={`w-24 h-24 flex text-light items-center justify-center dark:border-light rounded-full border border-solid ${borderColorClass}`}
        />
      </MotionLink>
    </div>
  );
}

export default Logo;

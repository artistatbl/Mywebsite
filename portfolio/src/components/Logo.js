import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image';
import profilePic from "../../images/profile/log.png";

const MotionLink = motion(Link);

function Logo({ darkMode }) {
  const borderColorClass = darkMode ? 'border-light' : 'border-dark';

  return (
    <div className='flex items-center justify-center mt-2 '>
      <MotionLink href="/" className=''>
        <Image
          src={profilePic}
          className={`w-20 h-20 flex text-light  bg-blue-500 items-center justify-center dark:border-amber-500 rounded-full border border-amber-600 ${borderColorClass}`}
        />
      </MotionLink>
    </div>
  );
}

export default Logo;
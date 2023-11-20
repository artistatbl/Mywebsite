import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';



const glitchAnimation = {
	glitch: {
	  opacity: [1, 0.8, 1, 0.8, 1],
	  x: [0, -10, 10, -5, 5, 0],
	  y: [0, 10, -10, 5, -5, 0],
	  transition: {
	    deplay: 0.5,
	    duration: 0.3,
	    //times: [0, 0.2, 0.4, 0.6, 0.8, 1],
	    staggerChildren: 0.08,
	  },
	},
   };
   

const singleWord = {
	initial: {
	  opacity: 0,
	  y: 50,
	},
	animate: {
	  opacity: 1,
	  y: 0,
	  transition: {
	    duration: 1,
	  },
	},
   };

const Animated = ({ text, className = '' }) => {
  const controls = useAnimation();

  useEffect(() => {
    const glitchTimeout = setTimeout(() => {
      controls.start('glitch');
    }, 500);

    return () => clearTimeout(glitchTimeout);
  }, [controls]);

  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
     
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`}
        variants={glitchAnimation}
        initial='glitch'
        animate={controls}
      >
        {text.split(' ').map((word, index) => (
          <motion.span key={word + '-' + index} className='inline-block'
		variants={singleWord}
		>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default Animated;

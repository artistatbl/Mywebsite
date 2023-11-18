import {motion,useScroll} from "framer-motion"
import React, { useEffect, useRef } from 'react';
import Lilcon from "./Lilcon"



const Details = ({ Position, company, companyLink, time, address, work }) => {
	const ref = useRef(null);
	return (
	  <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
		  <Lilcon  reference={ref}/>
	    <motion.div
	    initial={{y:50}}
	    whileInView={{y:0}}
	    transition={{duration:0.5, type:"spring"}}
	    >
		 <h3 className='capitalize font-bold text-2xl'>
		   {Position}&nbsp;
		   <a
			href={companyLink}
			target="_blank"
			className='text-blue-500 capitalize'
		   >
			@{company}
		   </a>
		 </h3>
		 <span className='capitalize font-medium text-dark/70'>
		   {time} | {address}
		 </span>
		 <p className='font-medium w-full '>
		   {work}
		 </p>
	    </motion.div>
	  </li>
	);
   };
   


const Experience = () =>{
	const ref = useRef(null)
	const {scrollYProgress} = useScroll(

		{
			target: ref,
			offset: ["start end", "center start"]
		}
	)
	return (
		<div className='my-64'> 
		<h2 className='font-bold text-8xl mb-32 text-center w-full'> Experience
			
			
			</h2>
			<div ref={ref} className='w-[75%] mx-auto relative'>

				<motion.div
				style={{scaleY: scrollYProgress}}
				 className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top ' />
				<ul className='w-full flex flex-col items-start justify-between ml-4'>
					<Details

Position="Shift Manager" company="BurgerKing"
companyLink=""
time=" 2019 - present"  address="Warrignton Brigde str"
work="is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book"
					
					
					
					/>

<Details

Position="Shift Manager" company="BurgerKing"
companyLink=""
time=" 2019 - present"  address="Warrignton Brigde str"
work="is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book"
					
					
					
					
					
					
					
					/>



				</ul>
			</div>
			
			 </div>
	)
}

export default Experience;
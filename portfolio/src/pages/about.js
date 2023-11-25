import Animated from '@/components/Animated'
import Layout from '@/components/Layout'
import Image from 'next/image';

import profilePic from "../../images/profile/remover.png";
import Head from 'next/head'

import React, { useEffect, useRef } from 'react';

import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skill from '@/components/Skill';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Transistion from '@/components/Transistion';
import ParticlesContainier from '@/components/hooks/ParticlesContainer';


const AnimatedNumbers = ({value}) => {
	const ref = useRef (null);


	const motionValue = useMotionValue(0);
	const springValue =  useSpring(motionValue, { stiffness:500, duration: 5000})
	const isInView = useInView(ref, {once: true});

	useEffect(() =>{
		if(isInView){
			motionValue.set(value);
		}
	}, [isInView, value, motionValue])

	useEffect(() => {
	  springValue.on("change", (latest) => {
		  if(ref.current && latest.toFixed(0) <= value ){
			  ref.current.textContent = latest.toFixed(0);
		  }

	  })
		
	}, [springValue, value])

	return <span ref={ref}></span>
}


const about = () => {
	return (

		<>
		<Head>
			<title>CodeBucks | About paage</title>
			<meta name='description' content='any description' />

		</Head>
		<Transistion />
		<main className='flex w-full flex-col items-center justify-content  dark:text-light'>
		
			<Layout className='pt-16'>
		
			<Animated  text="Passion Fuels Purpose!"  className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
			<div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
			  <div className='col-span-3 flex flex-col items-start justify-start dark:text-light xl:col-span-4  md:order-2 md:col-span-8'>
				  <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'> Biography</h2>
			  

			  <p className='font-medium'>
				  is simply dummy text of the printing and typesetting industry.
			  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
			  printer took a galley of type and scrambled it 
			  </p>

			   <p  className="my-4 font-medium">
				   is simply dummy text of the printing and typesetting industry.
			  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
			  printer took a galley of type and scrambled it
			  </p>

			   <p className="font-medium">
				   is simply dummy text of the printing and typesetting industry.
			  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
			  printer took a galley of type and scrambled
			   </p>


	
               </div>

			<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
			dark:bg-dark bg-light p-8 dark:border-light xl:col-span-4 md:order-1 md:col-span-8'
			>

				<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.1rem] bg-dark dark:bg-light   ' />
				<Image src={profilePic} alt="jeandaly" className='w-full h-auto rounded-2xl border border-dark bg-black '
				        priority
					   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				
				/>

				</div>

				<div className='col-span-2 flex flex-col items-end  justify-around xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

					<div className=' flex flex-col items-end justify-center xl:items-center'> 
						<span className='inline-block text-7xl font-bold md:text-6xl sm:texl-5xl sx:text-4xl' >
							<AnimatedNumbers value={50} />+
						</span>

						<h2 className='text-xl font-medium coapitalize text-dark/80 dark:text-light/80  xl:text-center md:text-center md:text-lg sm:text-base sx:text-sm'>

							Project Completed

						</h2>
					</div>

					<div  className='flex flex-col items-end justify-center xl:items-center'>
						<span className='inline-block text-7xl font-bold md:text-6xl sm:texl-5xl sx:text-4xl'>
							<AnimatedNumbers value={1} />+
						</span>
						
						<h2 className='text-xl font-medium coapitalize text-dark/80 dark:text-light/80  xl:text-right md:text-center md:text-lg sm:text-base sx:text-sm'>
 

						working Experience

						</h2>
					</div>

					
				</div>

  
			</div>


			<Skill />

			<Experience />

			<Education />

			

			</Layout>

		</main>

		</>
	)
}

export default about
import Animated from '@/components/Animated'
import Layout from '@/components/Layout'
import Image from 'next/image';

import profilePic from "../../images/profile/blob.png";
import Head from 'next/head'

import React, { useEffect, useRef } from 'react';

import { useInView, useMotionValue, useSpring } from 'framer-motion';


const AnimatedNumbers = ({value}) => {
	const ref = useRef (null);


	const motionValue = useMotionValue(0);
	const springValue =  useSpring(motionValue, { stiffness: 5000})
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
		<main className='flex w-full flex-col items-center justify-content'>
			<Layout className='pt-16'>
			<Animated  text="Passion Fuels Purpose!"  className='mb-16'/>
			<div className='grid w-full grid-cols-8 gap-16'>
			  <div className='col-span-3 flex flex-col items-start justify-start'>
				  <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'> Biography</h2>
			  

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

			<div className='col-span-3 relative max-h rounded-2xl border-2 border-solid border-dark
			bg-blue-900 p-8'
			>

				<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.1rem] bg-dark' />
				<Image src={profilePic} alt="jeandaly" className='w-full h-auto rounded-2xl' />

				</div>

				<div className='col-span-2 flex flex-col items-end  justify-around'>

					<div className=' flex flex-col items-end justify-center'> 
						<span className='inline-bloc text-7xl font-bold'>
							<AnimatedNumbers value={50} />+
						</span>

						<h2 className='text-xl font-medium coapitalize text-dark/80'>

							Project Completed

						</h2>
					</div>

					<div  className='flex flex-col items-end justify-center'>
						<span className='inline-bloc text-7xl font-bold'>
							<AnimatedNumbers value={1} />+
						</span>
						
						<h2 className='text-xl font-medium coapitalize text-dark/80'>

						working Experience

						</h2>
					</div>
					

					
				</div>




				
		
  
			</div>

			</Layout>

		</main>

		</>
	)
}

export default about
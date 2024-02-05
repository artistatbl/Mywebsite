import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image';
import Animated from '@/components/Animated';
import { GithubIcon } from '@/components/icon';
import Project1 from "../../images/ProjectPic/train.png";
import Project2 from "../../images/ProjectPic/article.png";
import { motion } from 'framer-motion';
import Transistion from '@/components/Transistion';
import ParticlesContainier from '@/components/hooks/ParticlesContainer';


const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
	return (
		<article className='w-full flex items-center justify-between relative dark:text-light
		   rounded-br-2xl  rounded-3xl  border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
		   lg:flex-col lg:p-8  xs:p-4
		   
		   '>

			<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.4rem] bg-dark dark:bg-light
			   rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
		    ' />

			<Link
				href={link}
				target="_blank"
				className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '
			>

				<FramerImage
					src={img}
					alt={title}
					className="  w-full h-auto"
					whileHover={{scale:1.05}}
					transition={{duration:0.2}}
				/>
			</Link>

			<div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:p-0 lg:pt-6'>
				<span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
				<Link href={link} target="_blank" className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2x'>{title}</h2>
				</Link>
				<p className=' my-2  font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
				<div className='mt-2 flex items-center w-full justify-between'>
					<Link
						href={link}
						target="_blank"
						className='rounded-lg  bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold
					   sm:px-4 sm:text-base'
					>
						Visit Project
					</Link>

					<Link href={github} target="_blank" className='w-10'> <GithubIcon /> </Link>
				</div>
			</div>
		</article>
	);
};

const Project = ({ title, type, img, link, github }) => {
	return (
		<article className='w-full flex flex-col items-center  relative justify-content rounded-2xl  dark:text-light
		border rounded-br-2xl border-solid border-dark bg-light p-6  dark:bg-dark dark:border-light
		xs:p-4 
		
		'>
			<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%]  xs:h-[102%] xs:rounded-[1.5rem]' />

			<Link href={link} 
			      target="_blank"
				className='w-full cursor-pointer overflow-hidden rounded-lg '
			>
				<FramerImage src={img} alt={title} className="w-full h-auto"
					whileHover={{scale:1.05}}
					transition={{duration:0.2}}
					
					/>
			</Link>
			<div className='w-full flex flex-col items-start justify-between mt-4'>
				<span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base '>{type}</span>
				<Link href={link} target="_blank" className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
				</Link>

				<div className=' w-full mt-2 flex items-center justify-between'>
					<Link href={link} target="_blank"
						className='rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold md:text-base'

					> Visit Project </Link>
					<Link href={github} target="_blank" className='w-8 md:w-6'> <GithubIcon /> </Link>



				</div>
			</div>
		</article>

	)
}

const projects = () => {
	return (
		<>
			<Head>

				<title>Jean daly | Projects</title>
				<meta name='description' content='any description' />
			</Head>
			<Transistion />

			<main className='w-full mb-16 flex flex-col items-center justify-center'>
				<Layout className='pt-16'>



					<Animated text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:mb-8  sm:!text-6xl xs:!text-4xl' />

					<div className='grid grid-cols-12  gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-0'>

						<div className="col-span-12">
							<FeaturedProject


								title="TrainDude"
								summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
								link="/"
								type="Feature Projects"
								github="/"
								img={Project1}




							/>
						</div>
						<div className='col-span-6 sm:col-span-12'>
							<Project

								title="TaskManager"
								link="/"
								type="Projects"
								github="/"
								img={Project2}





							/>

						</div>
						<div className='col-span-6 sm:col-span-12'>
							<Project

								title="Fashion Studion Website"
								link="/"
								type="Feature"
								github="/"
								img={Project2}





							/>

						</div>
						<div className='col-span-12'>
							<FeaturedProject


								title="TrainDude"
								summary="is simply dummy text of the printing and typesetting industry.
					 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
					 It has survived not only five centuries, but also the leap into electronic typesetting."
								link="/"
								type="Feature Projects"
								github="/"
								img={Project2}




							/>
						</div>
						<div className='col-span-6 sm:col-span-12'>
							<Project

								title="TrainDude"
								link="/"
								type="Feature"
								github="/"
								img={Project2}





							/>

						</div>
						<div className='col-span-6 sm:col-span-12'>
							<Project

								title="TrainDude"
								link="/"
								type="Projects"
								github="/"
								img={Project2}





							/>

						</div>

					</div>

				</Layout>
			</main>



		</>
	)
}


export default projects
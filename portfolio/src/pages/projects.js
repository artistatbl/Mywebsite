import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image  from 'next/image';
import  Animated from '@/components/Animated';
import { GithubIcon } from '@/components/icon';
import Project1  from "../../images/ProjectPic/train.png";
import Project2 from "../../images/ProjectPic/article.png";
import { motion } from 'framer-motion';


const FramerImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link, github}) => {
	return (
		<article className='w-full flex items-center justify-between relative
		rounded-3xl  rounded-br-2xl border border-solid border-dark bg-light shadown-2xl p-8 dark:bg-dark dark:border-light'>

              <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.4rem] bg-dark rounded-br-2xl dark:bg-light' />

		    <Link
  href={link} 
  target="_blank"
  className='w-1/2 cursor-pointer overflow-hidden rounded-lg'
>
  <motion.div
    whileHover={{ y: 10 }}
    whileTap= {{scale: 1}}
    transition={{ duration: 0.5 }}
  >
    <FramerImage 
      src={img} 
      alt={title} 
      className="  w-full h-auto overflow-x-auto" 
	 priority
	 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
    />
  </motion.div>
  </Link>



			<div className='w-1/2 flex flex-col items-start justify-between pl-6'>
				<span className='text-primary font-medium text-xl'>{type}</span>
				<Link href={link} target="_blank" className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
				</Link>
				<p className=' my-2 font-medium text-dark'>{summary}</p>
				<div className=' w-full justify-between mt-8 flex items-center'>
					<Link href={link} target="_blank"
					className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
					
					> Visit Project </Link>
  
                      <Link href={github} target="_blank" className='w-10'> <GithubIcon/> </Link>



				</div>
			</div>
		</article>
	)
}

const Project = ({title, type, img, link, github}) => {
	return (
		<article className='w-full flex flex-col items-cneter  relative justify-content rounded-2xl 
		border rounded-br-2xl border-solid border-dark bg-light p-6  dark:bg-dark dark:border-light
		
		'>
							<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.1rem] bg-dark rounded-br-2xl dark:bg-light' />

				<Link href={link} target="_blank"
			className='w-full cursor-pointer overflow-hidden rounded-lg '
			>
				<Image src={img} alt={title} className="w-full h-auto" 
				        priority
					   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
			</Link>
			<div className='w-full flex flex-col items-start justify-between mt-4'>
				<span className='text-primary font-medium text-xl dark:text-light'>{type}</span>
				<Link href={link} target="_blank" className='hover:underline underline-offset-2'>
					<h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
				</Link>
				
				<div className=' w-full mt-2 flex items-center mt-2 justify-between'>
					<Link href={link} target="_blank"
					className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
					
					> Visit Project </Link>
					<Link href={github} target="_blank" className='w-8'> <GithubIcon/> </Link>



				</div>
			</div>
		</article>

	)
}

const projects = () => {
	return(
		<>
		<Head>

			<title>Jean daly | Projects Page</title>
			<meta name='description' content='any description' />
		</Head>
		<main className='w-full mb-16 flex flex-col items-center justify-center'> 
			<Layout className='pt-16'>

			<Animated  text="Passion Fuels Purpose!"  className='mb-16'/>

			<div className='grid grid-cols-12 gap-24 gap-y-36'>
				<div className='col-span-12'>
					<FeaturedProject 
					 

					 title="TrainDude"
					 summary="is simply dummy text of the printing and typesetting industry.
					 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
					 It has survived not only five centuries, but also the leap into electronic typesetting."
					 link="/"
					 type="Feature Projects"
					 github="/"
					 img={Project1}
					
					
					
					
					/>
				</div>
				<div className='col-span-6'>
					<Project 
					
					title="TrainDude"
					link="/"
					type="Feature Projects"
					github="/"
					img={Project1}
				    
					
					
					
					
					/>

				</div>
				<div className='col-span-6'>
				<Project 
					
					title="TrainDude"
					link="/"
					type="Feature Projects"
					github="/"
					img={Project1}
				    
					
					
					
					
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
				<div className='col-span-6'>
				<Project 
					
					title="TrainDude"
					link="/"
					type="Feature Projects"
					github="/"
					img={Project2}
				    
					
					
					
					
					/>

				</div>
				<div className='col-span-6'>
				<Project 
					
					title="TrainDude"
					link="/"
					type="Feature Projects"
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
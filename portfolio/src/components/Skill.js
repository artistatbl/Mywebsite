import React from 'react'
import {motion} from 'framer-motion'



const Skills = ({name, y, x }) => {

	return(

			<motion.div className='flex items-center justify-center rounded-full font-bold bg-dark text-light
			 py-3 px-6 shadow-dark cursor-pointer absolute'
			 whileHover={{scale:1.05}}
			 initial={{x:0,y:0}}
			 animate={{x:x, y:y}}
			 transition= {{duration: 3.8}}
			 viewport = {{once: true}}
			 
			 >
				{name}
			</motion.div>

		
	)

}

const Skill = () => {
	return (

		<>

		<h2 className='font-bold text-8xl mt-64 w-full text-center'> Skills</h2>
		<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

			<motion.div className='flex items-center justify-center rounded-full font-bold bg-dark text-light
			 p-8 shadow-dark cursor-pointer'
			 whileHover={{scale:1.05}}>
				web
			</motion.div>

			<Skills name="CSS" x="-5vw" y="-10vw" />

			<Skills name="HTML" x="-23vw" y="2vw" />

			<Skills name="Javascript" x="20vw" y="6vw" />

			<Skills name="ReactJS" x="0vw" y="15vw" />

			<Skills name="NodeJS" x="-0vw" y="-23vw" />

			<Skills name="NextJS" x="15vw" y="-12vw" />

			<Skills name="FireBase" x="-25vw" y="-10vw" />

			<Skills name="Tailwind CSS" x="-25vw" y="18vw" />

			<Skills name="GitHub" x="30vw" y="18vw" />

			<Skills name="VueJS" x="32vw" y="-10vw" />
			

		</div>
		
		</>

	)
}

export default Skill
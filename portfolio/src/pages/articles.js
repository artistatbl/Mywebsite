import React from 'react'
import Head from "next/head"
import Layout from '@/components/Layout'
import Animated from '@/components/Animated'









const articles = () => {
	return (
		<>
		<Head>
		
			<title>Jean Daly | articles Page</title>
			<meta name="description" content="any descitpion" />
		</Head>
		<main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'> 
			<Layout className='pt-16'>
				<Animated  text="Words Can change The World" className='mb-16'/>
				<ul className='grid grid-col2 gap-16'>
					<li></li>
					<li></li>
				</ul>
			</Layout>
		</main>
		
		
		
		</>
	)
}


export default articles
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import ParticlesContainier from './hooks/ParticlesContainer';


const Layout = ({children, className=""}) => {
	return (
		
		<div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p8 ${className}`}>
			{children}
			<Analytics />
		
			
		</div>
	)
}

export default Layout;

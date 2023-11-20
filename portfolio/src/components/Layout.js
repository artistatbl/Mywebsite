import React from 'react';
import { Analytics } from '@vercel/analytics/react';


const Layout = ({children, className=""}) => {
	return (
		<div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`}>
			{children}
			<Analytics />
		</div>
	)
}

export default Layout;

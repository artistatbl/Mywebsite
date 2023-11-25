import react from "react";
import Link from "next/link"
import Layout from '@/components/Layout';



 const Footer = () => {
	return (
		<footer className="w-full border-t-2 border-solid border-dark
		font-medium text-lg dark:text-light dark:border-light sm:text-base
		">
			<Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-8">
			<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
			<div className="flex items-center">
			<Link href="/" className="underline underline-offset-2">  Made By Artist</Link>
			</div>
			<Link href="/">Say Hello</Link>
			
			</Layout>
		</footer>
	)
}

export default Footer
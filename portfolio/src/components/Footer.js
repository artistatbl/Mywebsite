import react from "react";
import Link from "next/link"
import Layout from "./Layout";


 const Footer = () => {
	return (
		<footer className="w-full border-t-2 border-solid border-dark
		font-medium text-lg
		">
			<Layout className="py-8 flex items-center justify-between">
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
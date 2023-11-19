import React from 'react';
import Logo from '@/components/Logo';
import * as Icons from './icon';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {motion} from "framer-motion";

const CustomLink = ({
     href,
     title,
     className = ""
}) => {
     const router = useRouter();

     return (
          <Link href={href}
               className={`relative group ${className}`}>
               {title}

               <span className={`
                    
                    absolute left-0 bottom-0
                    group-hover:w-full transition-[width] ease duration-300
                    ${router.asPath === href ? 'w-full' : 'w-0'}
               `}>
               </span>
          </Link>
     );
}

const NavBar = () => {
     return (
          <header className='w-full px-32 py-12 font-bold flex items-center justify-between '>
               <nav>
                    <CustomLink href="/" title="Home" className='mr-4  '/>
                    <CustomLink href="/about" title="About" className='mx-4  '/>
                    <CustomLink href="/projects" title="Projects" className='mx-4 '/>
                    <CustomLink href="/skills" title="Skills" className='ml-4 '/>
               </nav>

               <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://twitter.com" target="_blank"
                         whileHover={{ y: -4 }}
                         whileTap={{ scale: 0.9 }}
                         className="w-6 mx-3">
                         <Icons.TwitterIcon/>
                    </motion.a>

                    <motion.a href="https://linkedin.com" target="_blank"
                         whileHover={{ y: -4 }}
                         whileTap={{ scale: 0.9 }}
                         className="w-6 mx-3">
                         <Icons.LinkedInIcon/>
                    </motion.a>

                    <motion.a href="https://github.com" target="_blank"
                         whileHover={{ y: -4 }}
                         whileTap={{ scale: 0.9 }}
                         className="w-6 ml-3">
                         <Icons.GithubIcon/>
                    </motion.a>
               </nav>

               <div className='absolute left-[50%] top-2 translate-x[-50]'>
                    <Logo/>
               </div>
          </header>
     );
}

export default NavBar;

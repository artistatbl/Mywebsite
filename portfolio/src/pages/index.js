import Head from 'next/head';
import Layout from '@/components/Layout';
import * as Icons from '@/components/icon';
import Image from 'next/image';
import Link from 'next/link';

import profilePic from "../../images/profile/blob.png";
import Animated from '@/components/Animated';
import ParticlesContainier from '@/components/hooks/ParticlesContainer';
import Transistion from '@/components/Transistion';

import { motion } from 'framer-motion';



const FramerImage = motion(Image);

const putTheSlideEffectHere = (direction, duration) => {
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0 },
    show: { opacity: 1, y: 0 },
  };

  return variants;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Jean Daly | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transistion />
      
      <main className='flex items-center justify-between text-dark w-full min-h-screen dark:text-light'>
        
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
        <ParticlesContainier />
       
          <div className='flex items-center justify-between w-full lg:flex-col'>
{/*           
          <motion.div
        className='w-1/2 md:w-full'
        variants={putTheSlideEffectHere('up', 1)}
        initial='show' // You might want to start with 'hidden'
        animate='show'
        exit='show'
        transition={{ duration: 0, ease: 'easeIn' }}
      >
        <FramerImage src={profilePic} alt="jean Daly" className='w-full h-auto lg:hidden md:inline-block md:w-full' 
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </motion.div> */}



            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center' >
              <Animated text="I build things for the web." className=' !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-extra'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>

              <div className="flex items-center self-start mt-2 space-x-4 lg:self-center">
                <Link href="/" target={"_blank"}
                  className="flex items-center bg-indigo-500 text-dark p-2.5 px-6
                  rounded-lg text-lg font-semibold ring-2 ring-light ring-inset
                  hover:bg-light hover:text-dark border-2 border-solid border-indigo-500 hover:border-dark
                  shadow-md transition duration-300 ease-in-out transform hover:scale-105 dark:text-light
                  hover:dark:bg hover:dark:text-dark hover:dark:border-gray-900"
                  download={true}
                >
                  Resume <Icons.DownloadIcon className={"w-6 ml-3"} />
                </Link>
                <Link href="/" target={"_blank"}
                  className="flex items-center bg-light text-dark p-2.5 px-6
                  rounded-lg text-lg font-semibold ring-2 ring-blue-500 ring-inset
                  hover:bg-indigo-400 hover:text-light border-2 border-solid border-light hover:border-dark
                  shadow-md transition duration-300 ease-in-out transform hover:scale-105 dark:text-dark"
                >
                  Projects <Icons.ProjectIcon className={"w-6 ml-2"} />
                </Link>
              </div>
            </div>
          </div>
          {/* <Cursor /> */}
         
        </Layout>
       
      </main>
    </>
  )
}

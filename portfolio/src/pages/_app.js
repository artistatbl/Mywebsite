// pages/_app.js
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import {Montserrat} from 'next/font/google';
import Head from "next/head";

// Define the Montserrat font with the desired subsets
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont",
});

function MyApp({Component, pageProps}) {
     return (

      <>
      <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
       </Head>
       <main  className={`${montserrat.variable } font-mont bg-light dark:bg-dark w-full min-h-screen `}>
         <NavBar />


           <Component {...pageProps} />
           <Footer />
         </main></>


     );
}

export default MyApp;

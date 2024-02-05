import React from 'react';
import Link from 'next/link';
import Head from 'next/head';  // Add this import statement

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Jean Daly | 404 page</title>
        <meta name='description' content='any description' />
      </Head>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Not Found</h1>
          <p className="text-gray-600 mb-4 dark:text-light">Sorry, the page you are looking for does not exist.</p>
          <Link href="/" className='rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-10 text-lg font-semibold md:text-base'>Home</Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

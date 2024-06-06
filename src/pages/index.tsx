import Head from 'next/head';
import React from 'react';



const Home = () => {
  return (
    <>
      <Head>
        <title>Home Page - Your Website Name</title>
        <meta
          name='description'
          content='This is the home page of Your Website Name, where you can find information about our products and services.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />
        <meta name='keywords' content='your, keywords, here' />
        <meta property='og:title' content='Home Page - Your Website Name' />
        <meta
          property='og:description'
          content='This is the home page of Your Website Name, where you can find information about our products and services.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.yourwebsite.com' />
        <meta
          property='og:image'
          content='https://www.yourwebsite.com/path-to-your-image.jpg'
        />
        <link rel='canonical' href='https://www.yourwebsite.com' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};

export default Home;

import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Contact from '../components/Contact';
import DDRadio from '../components/DDRadio';
import Hero from '../components/Hero';
import Roster from '../components/Roster';
import Services from '../components/Services';
import Venues from '../components/Venues';

const Home = () => {
  return (
    <div className=''>
      <Head>
        <title>Double Down Entertainment</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero
        heading='Double Down Entertainment'
        message='Some sort of blurb right here'
      />
      <About />
      <Services />
      <Roster />
      <DDRadio />
      <Venues />
      <Contact />
    </div>
  );
};

export default Home;

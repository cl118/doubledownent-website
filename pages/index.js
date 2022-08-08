import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Contact from '../components/Contact';
import DDRadio from '../components/DDRadio';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Roster from '../components/Roster';
import Services from '../components/Services';
import Venues from '../components/Venues';

const Home = () => {
  return (
    <div className=''>
      <Head>
        <title>Double Down Entertainment</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='apple-mobile-web-app-title' content='Double Down Ent' />
        <meta name='application-name' content='Double Down Ent' />
        <meta name='msapplication-TileColor' content='#2d89ef' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Navbar />
      <Hero
        heading='Double Down Entertainment'
        message={`Philadelphia/South Jersey's Premiere Entertainment Company`}
        buttonText='Learn More'
        buttonLink='about'
      />
      <About />
      <Services />
      <Roster />
      <DDRadio />
      <Venues />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

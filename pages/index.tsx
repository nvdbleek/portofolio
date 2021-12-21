import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Main from '../components/Main';
import SkillsSection from '../components/SkillsSection';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div id='top' className={styles.container}>
      <Head>
        <title>Nick Van den Bleeken&apos;s Portofolio</title>
        <meta name='viewport' content='width=device-width'></meta>
        <meta name='description' content='Nick Van den Bleeken Solution Designer &amp; Technical Architect' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main />
      <About />
      <SkillsSection />
    </div>
  );
};

export default Home;

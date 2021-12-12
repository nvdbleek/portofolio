import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import SkillsSection from '../components/SkillsSection'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div id="top" className={styles.container}>
      <Head>
        <title>Nick Van den Bleeken&apos;s Portofolio</title>
        <meta name="viewport" content="width=device-width"></meta>
        <meta name="description" content="Nick Van den Bleeken Solution Designer &amp; Technical Architect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.videoBg}>
          <video className={styles.video} src="/images/mountains.mp4" autoPlay={true} loop={true}></video>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>Nick Van den Bleeken</h1>
          <p className={styles.description}>Solution Designer &amp; Technical Architect</p>
        </div>
      </main>
      <About />
      <SkillsSection />
    </div>
  )
}

export default Home

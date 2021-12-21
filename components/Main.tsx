import styles from '../styles/Home.module.css';

const Main = () => (
  <main className={styles.main}>
    <div className={styles.videoBg}>
      <video className={styles.video} src='/images/mountains.mp4' autoPlay loop muted></video>
    </div>
    <div className={styles.info}>
      <h1 className={styles.title}>Nick Van den Bleeken</h1>
      <p className={styles.description}>Solution Designer &amp; Technical Architect</p>
    </div>
  </main>
);

export default Main;

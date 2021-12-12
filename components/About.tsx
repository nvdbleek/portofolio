import styles from "../styles/Home.module.css";
import Image from "next/image";

const about = () => {
  return (
    <div id="about" className={styles.container}>
      <h2 style={{ textAlign: "center" }}>About Me</h2>
      <div className={styles.about}>
        <div style={{alignSelf: 'self-start'}} className={`${styles.box} ${styles.dSmNone}`}>
          <Image className={styles.headShot} src="/images/headshot.jpeg" alt="Nick Van den Bleeken" width={400} height={400} />
        </div>
        <div className={styles.box}>
        <p>I&apos;m an innovative Solution Designer &amp; Technical Architect at Unifiedpost 
            gathering requirements, creating functional and solution specifications, 
            assessing the current software systems in place in order to identify areas in need of improvement, 
            and assisting a development team.
        </p>
        <p>
            My responsibilities include:
            <ul>
                <li>Safeguarding and communicating the overall technical vision for the services managed by the team</li>
                <li>Assessing the relevant frameworks, platforms, or tech-stack for a solution.</li>
                <li>Specify how the application will work, what the modules will be used, and how they interact with each other.</li>
                <li>Define how things will scale for the future and how they will be maintained.</li>
                <li>Resolving technical problems as they arise.</li>
                <li>Providing guidance to the development team.</li>
                <li>Continually researching current and emerging technologies and proposing changes where needed.</li>
                <li>Informing various stakeholders (PO, BA, Delivery Manager) about any problems with the current technical solutions being implemented.</li>
                <li>Assessing the business impact that certain technical choices have.</li>
            </ul>
        </p>
        </div>
      </div>
    </div>
  );
};

export default about;

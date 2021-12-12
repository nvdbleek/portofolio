import Image from "next/image";
import styles from "../styles/Home.module.css";

const skills = [
'TypeScript',
'JavaScript',
'Nodejs',
'React',
'ReactRouter',
'Jest',
'Testing-Library',
'Yarn',
'HTML5',
'CSS3',
'AmazonDynamoDB',
'PostgreSQL',
'MySQL',
'Docker',
'AmazonAWS',
'Git',
'GitHub',
'BitBucket'
];

const SkillEntry = ({skill}: {skill: string}) => (
    <div className={styles.skillsImage}>
        <Image src={`/images/${skill.toLowerCase()}.png`} alt={skill} width={180} height={150} />
    </div>
);

const SkillsSection = () => {
  return (
    <div id="skills" className={styles.skillsSection}>
      <h1 style={{ textAlign: "center" }}>My Technical Skills</h1>
      <div className={styles.skillsContainer}>
        {skills.map(skill => (
            <SkillEntry key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

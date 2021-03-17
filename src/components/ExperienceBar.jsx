import { useAll }         from "../hooks/useAll";
import styles             from "../styles/components/ExperienceBar.module.css";

export default function Level() {
  const { level, currentExperience, experienceToNextLevel } = useAll();
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}/>

        { currentExperience > 0 && (
          <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
            {Math.round(currentExperience)} xp<br></br> Level({level})
          </span>
        )}
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}

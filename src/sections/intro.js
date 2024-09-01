import styles from './intro.module.css';

export default function Intro() {
  const shortBio = (
    <div>
      <p className="text-mono-small">
        I’m a <span className="text-yellow">design-centered</span>
        <span className="text-pink"> software engineer </span>
        with a background in
        <span className="text-light-blue"> design, research, and consulting </span>
        and I build systemic solutions for people.
      </p>
    </div>
  );

  return (
    <div className="section flex scroll-anchor" id="intro">
      <div className={styles.helloContainer}>
        <div className={`text-mono-small`}>{`Hi, my name is`}</div>
        <div className={`${styles.hojoon}`}>{`Hojoon Kim`}</div>
        <div className={`${styles.intro} text-mono-small`}>{`I design and build apps and stuff`}</div>
        <div className={`${styles.shortBio} text-mono-small`}>{shortBio}</div>
      </div>
    </div>
  );
}

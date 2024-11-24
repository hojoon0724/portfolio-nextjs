import styles from './index.module.css';

export default function CardWithBorder({}) {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.cardContent}>stuff goes here</div>
      </div>
    </section>
  );
}

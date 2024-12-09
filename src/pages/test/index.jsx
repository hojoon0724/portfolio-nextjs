import styles from './index.module.css';
import { Grid } from '@/sections/gridTest';

export default function CardWithBorder({}) {
  return (
    <div className="top-container">
      <Grid />
    </div>
    // <section className={styles.sectionContainer}>
    //   <div className={styles.cardContainer}>
    //     <div className={styles.cardContent}>stuff goes here</div>
    //   </div>
    // </section>
  );
}

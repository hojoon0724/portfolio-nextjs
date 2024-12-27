import ArrowLinkButton from '@/components/arrowLinkButton';
import styles from './index.module.css';
import { Grid } from '@/sections/gridTest';

export default function CardWithBorder({}) {
  const testTargetLink = { targetLink: 'google.com', openOnNewWindow: false, description: 'text', text: 'Google' };

  return (
    <div className="top-container flex justify-center">
      <ArrowLinkButton targetLink={testTargetLink} />
    </div>
    // <section className={styles.sectionContainer}>
    //   <div className={styles.cardContainer}>
    //     <div className={styles.cardContent}>stuff goes here</div>
    //   </div>
    // </section>
  );
}

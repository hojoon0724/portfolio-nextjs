import ArrowLinkButton from '@/components/arrowLinkButton';
import styles from './index.module.css';
import { Grid } from '@/sections/gridTest';
import Image from 'next/image';

export default function CardWithBorder({}) {
  const testTargetLink = { targetLink: 'google.com', openOnNewWindow: false, description: 'text', text: 'Google' };

  return (
    <div className="top-container flex justify-center items-center column">
      <ArrowLinkButton targetLink={testTargetLink} />

      <svg className="icon" fill="red">
        <use href="/assets/spriteSample.svg#arrow-bold"></use>
      </svg>

      <svg className="icon" fill="#ff00ff">
        <use href="/assets/spriteSample.svg#pe-logo-twotone"></use>
      </svg>

      <svg className="icon" fill="none" stroke="#00ffff" strokeWidth="1px">
        <use href="/assets/spriteSample.svg#pe-logo-twotone-nofill"></use>
      </svg>
    </div>
    // <section className={styles.sectionContainer}>
    //   <div className={styles.cardContainer}>
    //     <div className={styles.cardContent}>stuff goes here</div>
    //   </div>
    // </section>
  );
}

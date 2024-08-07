import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function DesignPage() {
  return (
    <>
      <Head>
        <title>Hojoon Kim // Design-Centered Dev</title>
        <meta
          name="description"
          content="I’m a design-centered software engineer with a background in design, research, and consulting and I build systemic solutions for people."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="top-container column center">
        <div className="section">&nbsp;</div>
      </div>
    </>
  );
}

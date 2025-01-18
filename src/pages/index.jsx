import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/home.module.css';

import LandingGrid from '@/components/grids/LandingGrid';
import IntroGrid from '@/components/grids/IntroGrid';
import TechGrid from '@/components/grids/TechGrid';
import DesignGrid from '@/components/grids/DesignGrid';
import ContactSection from '@/components/grids/ContactGrid';

// Grids

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hojoon Kim // Design-Centered Dev</title>
        <meta
          name="description"
          content="I’m a design-centered software engineer with a background in design, research, and consulting and I build systemic solutions for people."
        />
      </Head>
      <div className="top-container flex flex-col">
        <LandingGrid>
          <IntroGrid />
          <TechGrid />
          <DesignGrid />
          <ContactSection />
        </LandingGrid>
      </div>
    </>
  );
}

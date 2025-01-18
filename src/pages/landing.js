import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

import Intro from '@/z-notInUse/zBackup/sections/intro';
import About from '@/z-notInUse/zBackup/sections/about';
import Design from '@/z-notInUse/zBackup/sections/design';
import Tech from '@/z-notInUse/zBackup/sections/tech';
import Contact from '@/z-notInUse/zBackup/sections/contact';

import { iconsData } from '@/data/iconsData';

import ScrollText from '@/z-notInUse/zBackup/sections/scrollText';
import { LandingGrid } from '@/z-notInUse/zBackup/sections/landingGrid';

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
        <LandingGrid />
        {/* <Design />
        <Intro />
        <Tech />
        <About />
        <Contact /> */}
      </div>
    </>
  );
}

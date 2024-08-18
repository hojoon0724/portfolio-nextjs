import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import About from '@/sections/about';
import Design from '@/sections/design';
import Contact from '@/sections/contact';
import Tech from '@/sections/tech';
import Intro from '@/sections/intro';
import { iconsData } from '@/data/iconsData';
import StackIcon from '@/components/stackIcon';
import SoftwareIcon from '@/components/softwareIcon';
import AllIcons from '@/sections/allIcons';
import ScrollText from '@/sections/scrollText';

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="top-container column center">
        {/* <AllIcons /> */}
        <ScrollText
          text={`I’m a design-centered software engineer with a background in design, research, and consulting and I build systemic solutions for people.`}
        />
        <Intro />
        <Tech />
        <Design />
        <About />
        <Contact />
      </div>
    </>
  );
}

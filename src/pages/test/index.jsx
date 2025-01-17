import ArrowLinkButton from '@/components/arrowLinkButton';
import styles from './index.module.css';
import { Grid } from '@/sections/landingGrid';
import { techProjectsData } from '@/data/techProjectsData';
import Image from 'next/image';
import ProjectCard from '@/components/projectCard';

export default function CardWithBorder({}) {
  return (
    <div className="section full-width flex flex-col">
      {/* <ArrowLinkButton targetLink={techProjectsData[0].repoLinks} /> */}
      <ProjectCard />
    </div>
  );
}

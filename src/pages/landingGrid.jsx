import { useState } from 'react';
import Image from 'next/image';

// Styled Components
import styled from 'styled-components';
import styles from '@/components/grids/IntroGrid.module.css';
import { motion } from 'framer-motion';

// Data
import { designProjectsData } from '@/data/designProjectsData';
import { techProjectsData } from '@/data/techProjectsData';

// UI Components
import ResponsiveGridLayout from 'react-grid-layout';
import DesignProjectCardSmall from '@/z-notInUse/zBackup/designProjectCardSmall';

// Styled component for GridLayout
// const StyledGridLayout = styled.div`
const Root = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 3rem auto;
`;

const StyledGridLayout = styled(ResponsiveGridLayout)`
  margin: 2rem auto;
  width: 100%;
  max-width: 1200px;
  border: 0px solid red;
  display: grid;
`;

const GridItemWrapper = styled.div`
  border-radius: 24px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px 0px hsla(0, 0%, 0%, 0.15);
  color: rgb(255, 255, 255);
  background-color: hsla(0, 0%, 60%, 0.25);
  isolation: isolate;
  position: relative;
  backdrop-filter: blur(3rem) saturate(165%);
`;

const initialLayout = [
  { i: 'intro', x: 0, y: 0, w: 3, h: 1.5 },

  { i: 'hourglass', x: 0, y: 1, w: 2, h: 1 },
  { i: 'pacific-serenades', x: 2, y: 1, w: 1, h: 1 },
  { i: 'blackjack', x: 1, y: 2, w: 2, h: 1 },
  { i: 'bkmrkd', x: 0, y: 2, w: 1, h: 1 },

  { i: 'rcnm', x: 0, y: 3, w: 2, h: 1 },
  { i: 'partner-energy', x: 2, y: 3, w: 1, h: 1 },
  { i: 'ensrq', x: 0, y: 4, w: 1, h: 1 },
  { i: 'lamongrel', x: 1, y: 4, w: 2, h: 1 },
];

const techLayout = [
  { i: 'hourglass', x: 0, y: 0, w: 2, h: 1 },
  { i: 'pacific-serenades', x: 2, y: 0, w: 1, h: 1 },
  { i: 'blackjack', x: 1, y: 1, w: 2, h: 1 },
  { i: 'bkmrkd', x: 0, y: 1, w: 1, h: 1 },

  { i: 'intro', x: 0, y: 2, w: 3, h: 1.5 },

  { i: 'rcnm', x: 0, y: 3, w: 2, h: 1 },
  { i: 'partner-energy', x: 2, y: 3, w: 1, h: 1 },
  { i: 'ensrq', x: 0, y: 4, w: 1, h: 1 },
  { i: 'lamongrel', x: 1, y: 4, w: 2, h: 1 },
];

const narrowLayout = [
  { i: 'intro', x: 0, y: 0, w: 0, h: 1.5 },

  { i: 'hourglass', x: 0, y: 1, w: 2, h: 1 },
  { i: 'pacific-serenades', x: 2, y: 1, w: 1, h: 1 },
  { i: 'blackjack', x: 1, y: 2, w: 2, h: 1 },
  { i: 'bkmrkd', x: 0, y: 2, w: 1, h: 1 },

  { i: 'rcnm', x: 0, y: 3, w: 2, h: 1 },
  { i: 'partner-energy', x: 2, y: 3, w: 1, h: 1 },
  { i: 'ensrq', x: 0, y: 4, w: 1, h: 1 },
  { i: 'lamongrel', x: 1, y: 4, w: 2, h: 1 },
];

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

export default function LandingGrid() {
  const [layout, setLayout] = useState(initialLayout);

  const data = designProjectsData;

  return (
    <div className="section full-width flex flex-col">
      {/* <div className="reorder-buttons-container flex mt-[56px]">
        <button onClick={() => setLayout(initialLayout)}>Initial</button>
        <button onClick={() => setLayout(techLayout)}>Tech</button>
        <button onClick={() => setLayout(narrowLayout)}>Narrow</button>
      </div> */}
      <Root>
        <StyledGridLayout
          layout={layout}
          cols={3}
          rowHeight={300}
          width={1200}
          margin={[18, 18]}
          isDraggable={false}
          isResizable={false}
          autoSize={true}
          listenToWindowResize={true}
        >
          <GridItemWrapper key="intro">
            <div className="design-project-container">
              <div className={styles.helloContainer}>
                <div className={`text-mono-small`}>{`Hi, my name is`}</div>
                <div className={`${styles.hojoon}`}>{`Hojoon Kim`}</div>
                <div className={`${styles.intro} text-mono-small`}>{`I design and build apps and stuff`}</div>
                <div className={`${styles.shortBio} text-mono-small`}>{shortBio}</div>
              </div>
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="hourglass">
            <div className="design-project-container flex justify-center items-center">
              <div className="project-title-card flex justify-center items-center ">
                <Image src="/assets/logos/hourglass-logo-white.svg" alt="alt" width={500} height={200} />
              </div>
              <div className="project-card-hover">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ut praesentium unde officia
                  numquam. Nulla voluptas inventore unde tempore. Harum itaque nam fugiat porro, exercitationem eligendi
                  dicta at? Vel, assumenda.
                </p>
              </div>
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="pacific-serenades">
            <div className="design-project-container flex justify-center items-center">
              <div className="project-title-card flex justify-center items-center ">
                <h2>PacSer Website</h2>
              </div>
              <div className="project-card-hover">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ut praesentium unde officia
                  numquam. Nulla voluptas inventore unde tempore. Harum itaque nam fugiat porro, exercitationem eligendi
                  dicta at? Vel, assumenda.
                </p>
              </div>
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="blackjack">
            <div className="design-project-container flex justify-center align-top">
              <div className="project-title-card flex justify-center items-center ">
                <Image src="/assets/logos/blackjackCounterLogo-white.svg" alt="alt" width={400} height={100} />
              </div>
              <div className="project-card-hover">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ut praesentium unde officia
                  numquam. Nulla voluptas inventore unde tempore. Harum itaque nam fugiat porro, exercitationem eligendi
                  dicta at? Vel, assumenda.
                </p>
              </div>
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="bkmrkd">
            <div className="design-project-container flex justify-center items-center">
              <div className="project-title-card flex justify-center items-center ">
                <Image src="/assets/logos/bkmrkdLogo.svg" alt="alt" width={400} height={100} />
              </div>
              <div className="project-card-hover w-full p-4 h-full">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ut praesentium unde officia
                  numquam. Nulla voluptas inventore unde tempore. Harum itaque nam fugiat porro, exercitationem eligendi
                  dicta at? Vel, assumenda.
                </p>
              </div>
            </div>
          </GridItemWrapper>
          <GridItemWrapper>
            <h2>Design Projects</h2>
          </GridItemWrapper>
          <GridItemWrapper key="rcnm">
            <DesignProjectCardSmall project={data[0]} />
          </GridItemWrapper>
          <GridItemWrapper key="partner-energy">
            <DesignProjectCardSmall project={data[1]} />
          </GridItemWrapper>
          <GridItemWrapper key="ensrq">
            <DesignProjectCardSmall project={data[2]} />
          </GridItemWrapper>
          <GridItemWrapper key="lamongrel">
            <DesignProjectCardSmall project={data[3]} />
          </GridItemWrapper>
        </StyledGridLayout>
      </Root>
    </div>
  );
}

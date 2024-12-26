import GridLayout from 'react-grid-layout';
import styled from 'styled-components';
import DesignProjectCardSmall from '@/components/designProjectCardSmall';
import { motion } from 'framer-motion';
import { designProjectsData } from '@/data/designProjectsData';
import styles from '@/sections/gridTest.module.css';
import { useState } from 'react';

// Styled component for GridLayout
// const StyledGridLayout = styled.div`
const StyledGridLayout = styled(GridLayout)`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  border: 0px solid red;
  display: grid;
`;

const GridItemWrapper = styled.div`
  background: #222222;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Root = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 0 auto;
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

export function Grid() {
  const [layout, setLayout] = useState(initialLayout);

  const data = designProjectsData;

  return (
    <div className="section full-width projects-section design scroll-anchor bg-blue900" id="design">
      <div className="reorder-buttons-container flex justify-center w-full">
        <button onClick={() => setLayout(initialLayout)}>Initial</button>
        <button onClick={() => setLayout(techLayout)}>Tech</button>
      </div>
      <Root>
        <StyledGridLayout layout={layout} cols={3} rowHeight={300} width={1200} isDraggable={false} isResizable={false}>
          <GridItemWrapper key="hourglass">
            <div className="design-project-container">
              <h2>Hourglass</h2>
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="pacific-serenades">
            <div className="design-project-container">
              <h2>PacSer Website</h2>
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="blackjack">
            <div className="design-project-container">
              <h2>Blackjack Card Counter</h2>
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="bkmrkd">
            <div className="design-project-container">
              <h2>bkmrkd</h2>
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
        </StyledGridLayout>
      </Root>
    </div>
  );
}

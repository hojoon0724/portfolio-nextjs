import { useState } from 'react';
import Image from 'next/image';

// Styled Components
import styled from 'styled-components';
import styles from '@/sections/gridTest.module.css';
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
  margin: 0 auto;
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

export default function DynamicGrid({}) {
  const [layout, setLayout] = useState(initialLayout);

  const tilesAmount = 24;
  return (
    <div className="test-dynamic-grid-container mb-8 mt-8">
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
          {Array.from({ length: tilesAmount }).map((_, i) => (
            <GridItemWrapper key={i}></GridItemWrapper>
          ))}
        </StyledGridLayout>
      </Root>
    </div>
  );
}

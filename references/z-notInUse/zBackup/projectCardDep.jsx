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

export default function ProjectCard({ project }) {
  return (
    <>
      <Root>
        <StyledGridLayout
          // layout={layout}
          cols={3}
          rowHeight={300}
          width={1200}
          margin={[18, 18]}
          isDraggable={false}
          isResizable={false}
          autoSize={true}
          listenToWindowResize={true}
        >
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
        </StyledGridLayout>
      </Root>
    </>
  );
}

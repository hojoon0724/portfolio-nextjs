import GridLayout from 'react-grid-layout';
import styled from 'styled-components';
import DesignProjectCardSmall from '@/components/designProjectCardSmall';
import { motion } from 'framer-motion';
import { designProjectsData } from '@/data/designProjectsData';

const layoutLg = [
  { i: 'rcnm', x: 0, y: 0, w: 10, h: 1 },
  { i: 'partner-energy', x: 10, y: 0, w: 10, h: 1 },
  { i: 'ensrq', x: 20, y: 0, w: 10, h: 1 },
  { i: 'lamongrel', x: 0, y: 1, w: 10, h: 1 },
  { i: 'shit-on-the-floor', x: 10, y: 1, w: 20, h: 1 },
];

// Styled component for GridLayout
const StyledGridLayout = styled(GridLayout)`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`;

const GridItemWrapper = styled.div`
  background: #888888;
  border-radius: 24px;
`;

const GridItemContent = styled.div`
  padding: 24px;
`;

const Root = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  height: 100%;
`;

export function Grid() {
  const data = designProjectsData;

  return (
    <div className="section full-width projects-section design scroll-anchor" id="design">
      <Root>
        <StyledGridLayout
          layout={layoutLg}
          cols={30}
          rowHeight={300}
          width={1200}
          // isDraggable={false}
          isResizable={false}
        >
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
          <GridItemWrapper key="shit-on-the-floor">
            <DesignProjectCardSmall project={data[3]} />
          </GridItemWrapper>
        </StyledGridLayout>
      </Root>
    </div>
  );
}

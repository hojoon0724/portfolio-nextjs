import GridLayout from 'react-grid-layout';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const layoutLg = [
  { i: 'stupid-flanders', x: 0, y: 0, w: 10, h: 1 },
  { i: 'get-schwifty', x: 10, y: 0, w: 10, h: 1 },
  { i: 'brat', x: 20, y: 0, w: 10, h: 1 },
  { i: 'fried-mints', x: 0, y: 1, w: 10, h: 1 },
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
          <GridItemWrapper key="stupid-flanders">
            <GridItemContent>stupid flanders</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="get-schwifty">
            <GridItemContent>get schwifty</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="brat">
            <GridItemContent>brat</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="fried-mints">
            <GridItemContent>friend-mints</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="shit-on-the-floor">
            <GridItemContent>time to get schwifty in here</GridItemContent>
          </GridItemWrapper>
        </StyledGridLayout>
      </Root>
    </div>
  );
}

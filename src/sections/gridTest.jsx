import GridLayout from 'react-grid-layout';
import styled from 'styled-components';

const layoutLg = [
  { i: 'blue-eyes-dragon', x: 0, y: 0, w: 1, h: 1 },
  { i: 'dark-magician', x: 1, y: 0, w: 1, h: 1 },
  { i: 'kuriboh', x: 2, y: 0, w: 1, h: 1 },
  { i: 'spell-caster', x: 0, y: 1, w: 1, h: 1 },
  { i: 'summoned-skull', x: 1, y: 1, w: 2, h: 1 },
];

// const layoutMd = [
//   { i: 'blue-eyes-dragon', x: 0, y: 0, w: 1, h: 1 },
//   { i: 'dark-magician', x: 0, y: 1, w: 1, h: 1 },
//   { i: 'kuriboh', x: 1, y: 1, w: 1, h: 1 },
//   { i: 'spell-caster', x: 0, y: 2, w: 1, h: 1 },
//   { i: 'summoned-skull', x: 0, y: 3, w: 2, h: 1 },
// ];

// const layoutSm = [
//   { i: 'blue-eyes-dragon', x: 0, y: 0, w: 1, h: 1 },
//   { i: 'dark-magician', x: 0, y: 1, w: 1, h: 1 },
//   { i: 'kuriboh', x: 0, y: 2, w: 1, h: 1 },
//   { i: 'spell-caster', x: 0, y: 3, w: 1, h: 1 },
//   { i: 'summoned-skull', x: 0, y: 4, w: 1, h: 1 },
// ];

// Styled component for GridLayout
const StyledGridLayout = styled(GridLayout)`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
`;

const GridItemWrapper = styled.div`
  background: #888888;
  border-radius: 16px;
`;

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
`;

export const Grid = () => {
  return (
    <div className="section full-width projects-section design scroll-anchor" id="design">
      <Root>
        <StyledGridLayout
          layout={layoutLg} // Default layout
          cols={3} // Responsive columns
          rowHeight={500}
          width={1200}
          isResizable={false} // Disable resizing
        >
          <GridItemWrapper key="blue-eyes-dragon">
            <GridItemContent>Blue Eyes Dragon</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="dark-magician">
            <GridItemContent>Dark Magician</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="kuriboh">
            <GridItemContent>Kuriboh</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="spell-caster">
            <GridItemContent>Spell Caster</GridItemContent>
          </GridItemWrapper>
          <GridItemWrapper key="summoned-skull">
            <GridItemContent>Summoned Skull</GridItemContent>
          </GridItemWrapper>
        </StyledGridLayout>
      </Root>
    </div>
  );
};

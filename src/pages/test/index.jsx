import ProjectCardContainer from '@/components/containers/ProjectCardContainer';
import { Responsive, WidthProvider } from 'react-grid-layout';
import style from './index.module.css';

const layouts = {
  lg: [
    { i: 'a', x: 0, y: 0, w: 4, h: 1 },
    { i: 'b', x: 4, y: 1, w: 4, h: 1 },
    { i: 'c', x: 8, y: 2, w: 4, h: 1 },
    { i: 'd', x: 0, y: 0, w: 4, h: 1 },
    { i: 'e', x: 4, y: 1, w: 4, h: 1 },
    { i: 'f', x: 8, y: 2, w: 4, h: 1 },
  ],
  md: [
    { i: 'a', x: 0, y: 0, w: 3, h: 1 },
    { i: 'b', x: 3, y: 1, w: 3, h: 1 },
    { i: 'c', x: 0, y: 1, w: 3, h: 1 },
    { i: 'd', x: 3, y: 1, w: 3, h: 1 },
    { i: 'e', x: 0, y: 2, w: 3, h: 1 },
    { i: 'f', x: 3, y: 2, w: 3, h: 1 },
  ],
  xxs: [
    { i: 'a', x: 0, y: 0, w: 4, h: 1 },
    { i: 'b', x: 4, y: 1, w: 4, h: 1 },
    { i: 'c', x: 8, y: 2, w: 4, h: 1 },
    { i: 'd', x: 0, y: 0, w: 4, h: 1 },
    { i: 'e', x: 4, y: 1, w: 4, h: 1 },
    { i: 'f', x: 8, y: 2, w: 4, h: 1 },
  ],
};

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function TestPage({}) {
  return (
    <div className="top-container flex flex-col justify-center items-center">
      <div className="viewport-width">width: </div>
      <ResponsiveGridLayout
        className={style.responsiveGridLayout}
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, xxs: 0 }}
        cols={{ lg: 12, md: 6, xxs: 1 }}
        rowHeight={300}
        width={1200}
        margin={[18, 18]}
        isDraggable={false}
        isResizable={false}
        autoSize={true}
        listenToWindowResize={true}
      >
        <div className={style.cardContainer} key="a">
          <div className={style.cardContentContainer}>
            <div className={style.cardContentFront}>A front</div>
            <div className={style.cardContentRear}>A hover</div>
          </div>
        </div>
        <div className={style.cardContainer} key="b">
          <div className={style.cardContentContainer}>
            <div className={style.cardContentFront}>B front</div>
            <div className={style.cardContentRear}>B hover</div>
          </div>
        </div>
        <div className={style.cardContainer} key="c">
          <div className={style.cardContentContainer}>
            <div className={style.cardContentFront}>C front</div>
            <div className={style.cardContentRear}>C hover</div>
          </div>
        </div>
        <div className={style.cardContainer} key="d">
          <div className={style.cardContentContainer}>
            <div className={style.cardContentFront}>D front</div>
            <div className={style.cardContentRear}>D hover</div>
          </div>
        </div>
        <div className={style.cardContainer} key="e">
          <div className={style.cardContentContainer}>
            <div className={style.cardContentFront}>E front</div>
            <div className={style.cardContentRear}>E hover</div>
          </div>
        </div>
        <div className={style.cardContainer} key="f">
          <div className={style.cardContentContainer}>
            <div className={style.cardContentFront}>F front</div>
            <div className={style.cardContentRear}>F hover</div>
          </div>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

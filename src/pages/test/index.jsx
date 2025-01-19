import ProjectCardContainer from '@/components/containers/ProjectCardContainer';
import { Responsive, WidthProvider } from 'react-grid-layout';
import style from './index.module.css';

const layouts = {
  lg: [
    { i: 'a', x: 0, y: 0, w: 4, h: 4 },
    { i: 'b', x: 4, y: 0, w: 4, h: 4 },
    { i: 'c', x: 8, y: 0, w: 4, h: 4 },
    { i: 'd', x: 12, y: 1, w: 4, h: 4 },
    { i: 'e', x: 0, y: 1, w: 4, h: 4 },
    { i: 'f', x: 4, y: 1, w: 4, h: 4 },
  ],
  md: [
    { i: 'a', x: 0, y: 0, w: 4, h: 4},
    { i: 'b', x: 4, y: 1, w: 4, h: 4},
    { i: 'c', x: 8, y: 2, w: 4, h: 4},
    { i: 'd', x: 0, y: 0, w: 4, h: 4},
    { i: 'e', x: 4, y: 1, w: 4, h: 4},
    { i: 'f', x: 8, y: 2, w: 4, h: 4},
  ],
  sm: [
    { i: 'a', x: 0, y: 0, w: 4, h: 3},
    { i: 'b', x: 4, y: 1, w: 4, h: 3},
    { i: 'c', x: 8, y: 2, w: 4, h: 3},
    { i: 'd', x: 0, y: 0, w: 4, h: 3},
    { i: 'e', x: 4, y: 1, w: 4, h: 3},
    { i: 'f', x: 8, y: 2, w: 4, h: 3},
  ],
  xs: [
    { i: 'a', x: 0, y: 0, w: 3, h: 3 },
    { i: 'b', x: 3, y: 1, w: 3, h: 3 },
    { i: 'c', x: 0, y: 1, w: 3, h: 3 },
    { i: 'd', x: 3, y: 1, w: 3, h: 3 },
    { i: 'e', x: 0, y: 2, w: 3, h: 3 },
    { i: 'f', x: 3, y: 2, w: 3, h: 3 },
  ],
  xxs: [
    { i: 'a', x: 0, y: 0, w: 4, h: 3},
    { i: 'b', x: 4, y: 1, w: 4, h: 3},
    { i: 'c', x: 8, y: 2, w: 4, h: 3},
    { i: 'd', x: 0, y: 0, w: 4, h: 3},
    { i: 'e', x: 4, y: 1, w: 4, h: 3},
    { i: 'f', x: 8, y: 2, w: 4, h: 3},
  ],
};

const ResponsiveGridLayout = WidthProvider(Responsive, { measureBeforeMount: true });

export default function TestPage({}) {
  return (
    <div className="top-container flex flex-col justify-center items-center">
      <ResponsiveGridLayout
        className={style.responsiveGridLayout}
        layouts={layouts}
        breakpoints={{ lg:2400, md: 2000, sm: 1800, xs: 996, xxs: 0 }}
        cols={{ lg:16, md:12, sm: 12, xs: 6, xxs: 1 }}
        rowHeight={100}
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

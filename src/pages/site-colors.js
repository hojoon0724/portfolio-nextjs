import SiteColorsCSS from './siteColors.module.css';

export default function SiteColors() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="hsl-colors flex flex-col-reverse">
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-main-color-50']} w-80 h-10 my-2`}></div>
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-main-color-100']} w-80 h-10 my-2`}></div>
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-main-color-200']} w-80 h-10 my-2`}></div>
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-main-color-300']} w-80 h-10 my-2`}></div>
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-main-color-400']} w-80 h-10 my-2`}></div>
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-main-color-500']} w-80 h-10 my-2`}></div>
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-main-color-600']} w-80 h-10 my-2`}></div>
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-main-color-700']} w-80 h-10 my-2`}></div>
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-main-color-800']} w-80 h-10 my-2`}></div>
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-main-color-900']} w-80 h-10 my-2`}></div>
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-main-color-950']} w-80 h-10 my-2`}></div>
        </div>
        <div className="text-3xl">Primary P3</div>
      </div>
      <div className="oklch-colors flex flex-col-reverse">
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-secondary-color-50']} w-80 h-10 my-2`}></div>050
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-secondary-color-100']} w-80 h-10 my-2`}></div>100
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-secondary-color-200']} w-80 h-10 my-2`}></div>200
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-secondary-color-300']} w-80 h-10 my-2`}></div>300
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-secondary-color-400']} w-80 h-10 my-2`}></div>400
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-secondary-color-500']} w-80 h-10 my-2`}></div>500
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-secondary-color-600']} w-80 h-10 my-2`}></div>600
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-secondary-color-700']} w-80 h-10 my-2`}></div>700
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-secondary-color-800']} w-80 h-10 my-2`}></div>800
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-secondary-color-900']} w-80 h-10 my-2`}></div>900
        </div>
        <div className="colors flex justify-center items-center">
          <div className={`${SiteColorsCSS['p3-secondary-color-950']} w-80 h-10 my-2`}></div>950
        </div>
        <div className="text-3xl">Secondary P3</div>
      </div>
    </div>
  );
}

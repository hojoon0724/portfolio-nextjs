/*  */import { allColors } from '../../test/vsCodeColorsExport';
import { orderArray } from '../../test/vsCodeColorsExport';
import { convertToHSL } from '../../test/vsCodeColorsExport';

export default function ColorTest() {
  const colorsRaw = allColors;
  const colors = orderArray(colorsRaw);
  const colorsHSL = colors.map(convertToHSL);
  let colorsHSLOrdered = colorsHSL.sort((a, b) => a[1] - b[1]);
  colorsHSLOrdered = colorsHSL.sort((a, b) => a[0] - b[0]);

  // console.log(colorsHSLOrdered);
  return (
    <div
      className="color-block-container flex"
      style={{ display: 'flex', flexWrap: 'wrap', fontFamily: 'Roboto Mono' }}
    >
      {colorsHSLOrdered.map(hsl => (
        <div className="box" key={hsl} style={{ backgroundColor: `hsl(${hsl[0]} ${hsl[1] * 100}% ${hsl[2] * 100}%)` }}>
          {`(${hsl[0]} ${Math.round(hsl[1] * 100)}% ${Math.round(hsl[2] * 100)}%)`}
        </div>
      ))}
    </div>
  );
}

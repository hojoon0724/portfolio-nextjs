import Color from 'colorjs.io';

// let color = new Color('slategray');

// console.log(color);

function getMaxChroma(lightness, hue) {
  let chroma = 0;
  const step = 0.0001; // Adjust for desired precision
  let color;

  while (true) {
    try {
      color = new Color(`oklch(${lightness} ${chroma} ${hue})`);
      if (!color.inGamut('p3')) break; // Check against a specific gamut, e.g., sRGB
    } catch (error) {
      break; // Stop if creating the color fails
    }
    chroma += step;
  }
  return chroma - step; // Return the last valid chroma
}

const steps = [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95];
const hue = 154;

steps.map(step => {
  console.log(step, getMaxChroma(step, hue).toFixed(4));
});

const maxChroma = getMaxChroma(0.5, 154);
console.log(`Max Chroma: ${maxChroma}`);

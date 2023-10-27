const chroma = require('chroma-js');

const generateShades = (color, isDark = false) => {
  const shades = {};
  shades[500] = color; // The passed color is the midpoint

  for (let i = 1; i <= 4; i++) {
    const lighterShade = i * 100;
    const darkerShade = 600 + (i * 100);
    const factor = isDark ? (4 - i) : i; // Invert the shades for dark mode

    // For light mode: 100-400 are darker, 600-900 are lighter
    // For dark mode: 100-400 are lighter, 600-900 are darker
    shades[lighterShade] = chroma(color).darken(isDark ? factor * 0.5 : -factor * 0.5).hex();
    shades[darkerShade] = chroma(color).darken(isDark ? -factor * 0.5 : factor * 0.5).hex();
  }

  return shades;
};

const generateTheme = (primaryColor, secondaryColor, mode) => {
  const primaryShades = generateShades(primaryColor || '#3f50b5', mode === 'dark');
  const secondaryShades = generateShades(secondaryColor || '#f44336', mode === 'dark');

  return {
    palette: {
      mode: mode || 'light',
      primary: {
        ...primaryShades,
        main: primaryShades[500]
      },
      secondary: {
        ...secondaryShades,
        main: secondaryShades[500]
      },
      contrastText: mode === 'light' ? '#000000' : '#ffffff'
    }
  };
};

module.exports = { generateTheme };
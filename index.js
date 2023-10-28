const chroma = require('chroma-js');

const generateShades = (color, isDark = false) => {
  const shades = {};
  shades[500] = color;
  shades.light = chroma(color).brighten(0.5).hex();
  shades.dark = chroma(color).darken(0.5).hex();
  shades.contrastText = isDark ? '#ffffff' : '#000000';

  for (let i = 1; i <= 4; i++) {
    const lighterShade = 500 - (i * 100);
    const darkerShade = 500 + (i * 100);
    const factor = i;

    shades[lighterShade] = chroma(color).brighten(isDark ? -factor * 0.5 : factor * 0.5).hex();
    shades[darkerShade] = chroma(color).brighten(isDark ? factor * 0.5 : -factor * 0.5).hex();
  }

  return shades;
};

const generateTheme = ({primaryColor, secondaryColor, mode, warning, error, success, info, background}) => {
  const primaryShades = generateShades(primaryColor || '#3f50b5', mode === 'dark');
  const secondaryShades = generateShades(secondaryColor || '#f44336', mode === 'dark');
  const warningShades = generateShades(warning || '#ff9800', mode === 'dark');
  const errorShades = generateShades(error || '#f44336', mode === 'dark');
  const successShades = generateShades(success || '#4caf50', mode === 'dark');
  const infoShades = generateShades(info || '#2196f3', mode === 'dark');

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
      warning: {
        ...warningShades,
        main: warningShades[500]
      },
      error: {
        ...errorShades,
        main: errorShades[500]
      },
      success: {
        ...successShades,
        main: successShades[500]
      },
      info: {
        ...infoShades,
        main: infoShades[500]
      },
      background: {
        default: background || '#fafafa',
        paper: chroma(background || '#fafafa').darken(0.1).hex()
      },
      contrastText: mode === 'light' ? '#000000' : '#ffffff'
    }
  };
};

module.exports = { generateTheme };



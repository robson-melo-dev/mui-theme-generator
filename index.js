const chroma = require('chroma-js');

const generateShades = (color) => {
  const shades = {};
  for (let i = 1; i <= 9; i++) {
    const shadeNumber = i * 100;
    shades[shadeNumber] = chroma(color).darken((9 - i) * 0.1).hex();
  }
  return shades;
};

const generateTheme = (primaryColor, secondaryColor) => {
  const primaryShades = generateShades(primaryColor || '#3f50b5');
  const secondaryShades = generateShades(secondaryColor || '#f44336');

  return {
    palette: {
      light: {
        primary: primaryShades,
        secondary: secondaryShades,
        contrastText: '#ffffff'
      },
      dark: {
        primary: primaryShades,
        secondary: secondaryShades,
        contrastText: '#000000'
      }
    }
  };
};

module.exports = { generateTheme };


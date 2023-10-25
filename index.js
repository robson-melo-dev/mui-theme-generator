const chroma = require('chroma-js');

const generateShades = (color, isDark = false) => {
  const shades = {};
  for (let i = 1; i <= 9; i++) {
    const shadeNumber = i * 100;
    const factor = isDark ? (9 - i) : i; // Inverte os tons para o modo escuro
    shades[shadeNumber] = chroma(color).darken(factor * 0.5).hex();
  }
  return shades;
};

const generateTheme = (primaryColor, secondaryColor) => {
  const lightPrimaryShades = generateShades(primaryColor || '#3f50b5', false);
  const lightSecondaryShades = generateShades(secondaryColor || '#f44336', false);
  
  const darkPrimaryShades = generateShades(primaryColor || '#3f50b5', true);
  const darkSecondaryShades = generateShades(secondaryColor || '#f44336', true);

  return {
    palette: {
      light: {
        primary: lightPrimaryShades,
        secondary: lightSecondaryShades,
        contrastText: '#000000'
      },
      dark: {
        primary: darkPrimaryShades,
        secondary: darkSecondaryShades,
        contrastText: '#ffffff'
      }
    }
  };
};

module.exports = { generateTheme };
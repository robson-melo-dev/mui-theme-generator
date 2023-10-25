# Material-UI Theme Generator

Easily generate beautiful and cohesive themes for Material-UI with just a few lines of code.

## Features
- 🎨 Generate shades from 50 to 900 automatically
- 🌓 Supports both light and dark themes
- 🚀 Fast development
- 💡 Well-documented
- 🌈 Supports custom colors
- 🛠️ Default colors included
- 🌞 Generate light and dark themes with contrast text

## Installation
```bash
npm install mui-theme-generator
```

## Basic Usage
```javascript
const { generateTheme } = require('mui-theme-generator');

const theme = generateTheme();  // Uses default colors '#3f50b5' for primary and '#f44336' for secondary
```

## Usage with React (using 'import')
```javascript
import { ThemeProvider } from '@mui/material/styles';
import { generateTheme } from 'mui-theme-generator';

const theme = generateTheme('#4caf50', '#ff9800');

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your components here */}
    </ThemeProvider>
  );
}
```

## Generating Light and Dark Themes
```javascript
const { generateTheme } = require('material-ui-theme-generator');

const { light, dark } = generateTheme('#4caf50', '#ff9800');

console.log(light, dark);  // Outputs the light and dark themes
```

## Support Us :heartpulse:
Love using Material-UI Theme Generator? Help us maintain and improve it by donating via PayPal to sys.robson@gmail.com. Your support will go a long way in keeping this project alive and kicking! :rocket:
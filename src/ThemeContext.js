import React, {createContext} from 'react';

export const themes = {
    light: {
      foreground: 'white',
      background: 'blue',
    },
    dark: {
      foreground: 'white',
      background: 'black',
    },
  };
  
  export const ThemeContext = createContext(
    themes.light
  );
  
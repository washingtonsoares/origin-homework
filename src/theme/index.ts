const theme = {
  colors: {
    primary: '#1B31A8'
  }
};

const devices = {
  mobile: '480px',
  desktop: '801px'
};

export const breakpoints = {
  desktop: `(min-width: ${devices.desktop})`
};

export type ThemeScheme = typeof theme;

export default theme;

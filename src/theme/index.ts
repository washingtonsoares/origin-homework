const theme = {
  colors: {
    primary: '#1B31A8',
    white: '#FFF',
    bgPrimary: '#F4F8FA',
    blueGray900: '#1E2A32',
    blueGray400: '#708797'
  }
};

const devices = {
  mobile: '480px',
  desktop: '800px'
};

export const breakpoints = {
  desktop: `(min-width: ${devices.desktop})`
};

export type ThemeScheme = typeof theme;

export default theme;

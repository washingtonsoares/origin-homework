const theme = {
  colors: {
    primary: '#1B31A8',
    secondary: '#0079FF',
    white: '#FFF',
    bgPrimary: '#F4F8FA',
    blueGray10: '#F4F8FA',
    blueGray50: '#E9EEF2',
    blueGray100: '#CBD5DC',
    blueGray400: '#708797',
    blueGray600: '#4D6475',
    blueGray900: '#1E2A32'
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

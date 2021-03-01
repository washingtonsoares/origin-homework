const theme = {
  colors: {
    neutralWhite: '#FFF',
    brandColorPrimary: '#1B31A8',
    primaryHover: '#2C44C9',
    bgPrimary: '#F4F8FA',
    brandColorSecondary: '#0079FF',
    blueGray10: '#F4F8FA',
    blueGray50: '#E9EEF2',
    blueGray100: '#CBD5DC',
    blueGray400: '#708797',
    blueGray600: '#4D6475',
    blueGray900: '#1E2A32'
  }
} as const;

export const fontFamilies = {
  workSans: "'Work Sans', sans-serif",
  rubik: "'Rubik', sans-serif"
} as const;

const devices = {
  mobile: '480px',
  desktop: '800px'
} as const;

export const breakpoints = {
  desktop: `(min-width: ${devices.desktop})`
} as const;

export type ThemeScheme = typeof theme;

export default theme;

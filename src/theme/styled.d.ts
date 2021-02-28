import 'styled-components';
import { ThemeScheme } from '.';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeScheme {}
}

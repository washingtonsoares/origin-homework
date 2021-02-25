/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import { ThemeScheme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeScheme {}
}

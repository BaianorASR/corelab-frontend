import 'styled-components';
import { CustomTheme } from './themes/@type';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

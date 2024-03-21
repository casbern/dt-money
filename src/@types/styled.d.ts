import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styed-components' {
  export interface DefaultTheme extends ThemeType {}
}
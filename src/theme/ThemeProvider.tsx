import React from 'react';

import {
  ThemeProvider as StyledThemeProvider,
  useTheme as useThemeStyled,

} from 'styled-components'
import Theme, {theme} from './theme';

export function useTheme(): theme {
  return useThemeStyled() as unknown as any
 }

interface ThemeProviderProps {
  children: React.ReactNode,
}
export default function ThemeProvider({children }:  ThemeProviderProps) {
  return(
    <>
      <StyledThemeProvider theme={Theme}>
          {children}
      </StyledThemeProvider>
    </>   
  )
}

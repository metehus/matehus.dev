import { ThemeProvider } from '@emotion/react'
import React, { PropsWithChildren } from 'react'
import { theme } from './theme'

const MainThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
}

export default MainThemeProvider

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import MainThemeProvider from '../components/base/theme/ThemeProvider'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainThemeProvider>
        <Header />

        <Component {...pageProps} />
      </MainThemeProvider>
    </>
  )
}

export default MyApp

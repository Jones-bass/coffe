import { ThemeProvider } from 'styled-components'
import { Header } from './page/Header'
import { Home } from './page/Home'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />

      <GlobalStyle />
    </ThemeProvider>
  )
}

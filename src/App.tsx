import { ThemeProvider } from 'styled-components'
import { ConfirmedOrder } from './page/ConfirmedOrder'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ConfirmedOrder />

      <GlobalStyle />
    </ThemeProvider>
  )
}

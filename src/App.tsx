import { ThemeProvider } from 'styled-components'
import { Form } from './page/Form'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Form />

      <GlobalStyle />
    </ThemeProvider>
  )
}

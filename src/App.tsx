import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UseCartContextProvider } from './context/useCartContext'

export function App() {
  return (
    <UseCartContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <ToastContainer position="top-center" />
        <BrowserRouter>
          <Router />
        </BrowserRouter>

        <GlobalStyle />
      </ThemeProvider>
    </UseCartContextProvider>
  )
}

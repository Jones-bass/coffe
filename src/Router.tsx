import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ConfirmedOrder } from './page/ConfirmedOrder'
import { Form } from './page/Form'
import { Home } from './page/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Form />} />
        <Route path="/confirmacao" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  )
}

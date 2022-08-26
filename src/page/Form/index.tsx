import { ContainerMain } from './styles'

import { Header } from '../../components/Header'
import { CoffeConfirmation } from '../../components/CoffeConfirmation'
import { FormPayment } from '../../components/FormPayment'

export function Form() {
  return (
    <>
      <Header />
      <ContainerMain>
        <FormPayment />
        <CoffeConfirmation />
      </ContainerMain>
    </>
  )
}

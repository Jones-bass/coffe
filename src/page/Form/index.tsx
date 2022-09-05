import { ContainerMain } from './styles'

import { CoffeConfirmation } from '../../components/CoffeConfirmation'
import { FormPayment } from '../../components/FormPayment'

export function Form() {
  return (
    <ContainerMain>
      <FormPayment />
      <CoffeConfirmation />
    </ContainerMain>
  )
}

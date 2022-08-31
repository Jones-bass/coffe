import {
  ContainerMain,
  ContainerConfirmation,
  ContaneirPayment,
  CardButton,
  CardPayment,
  CardTotal,
} from './styles'
import img1 from '../../assets/cafeGelado.png'

export function CoffeConfirmation() {
  return (
    <ContainerMain>
      <p>Cafés selecionados</p>
      <ContainerConfirmation>
        <ContaneirPayment>
          <img src={img1} alt="" />

          <CardPayment>
            <span>Expresso Tradicional</span>
            <CardButton>
              <button>- 1 +</button>
              <button>Remove</button>
            </CardButton>
          </CardPayment>
          <p>R$ 9,90</p>
        </ContaneirPayment>

        <CardTotal>
          <tbody>
            <tr>
              <td width="85%">Total de itens</td>
              <td>R$ 29,70</td>
            </tr>
            <tr>
              <td width="85%">Entrega</td>
              <td>R$ 3,50</td>
            </tr>
            <tr>
              <td width="85%">Total</td>
              <td>R$ 33,20</td>
            </tr>
          </tbody>
        </CardTotal>
      </ContainerConfirmation>
    </ContainerMain>
  )
}

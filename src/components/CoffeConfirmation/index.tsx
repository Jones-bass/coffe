import {
  ContainerMain,
  ContainerConfirmation,
  CardPayment,
  CardTotal,
} from './styles'
import img1 from '../../assets/cafeGelado.png'

export function CoffeConfirmation() {
  return (
    <ContainerMain>
      <p>Cafés selecionados</p>
      <ContainerConfirmation>
        <CardPayment>
          <img src={img1} alt="" />
          <span>Expresso Tradicional</span>
          <button>- 1 +</button>
          <button>Remove</button>
        </CardPayment>
        <CardPayment>
          <img src={img1} alt="" />
          <span>Expresso Tradicional</span>
          <button>- 1 +</button>
          <button>Remove</button>
        </CardPayment>
        <CardTotal>
          <tr>
            <td>linha 1</td>
            <td>linha 1</td>
          </tr>
          <tr>
            <td>linha 2</td>
            <td>linha 2</td>
          </tr>
        </CardTotal>
      </ContainerConfirmation>
    </ContainerMain>
  )
}

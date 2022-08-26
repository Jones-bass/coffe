import {
  ContainerMain,
  ContainerForm,
  ContainerPayment,
  ContainerCardPayment,
  CardPayment,
} from './styles'
import { FiMapPin } from 'react-icons/fi'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsCreditCard, BsCurrencyDollar, BsBank2 } from 'react-icons/bs'

export function CoffeConfirmation() {
  return (
    <ContainerMain>
      <ContainerForm>
        <FiMapPin
          style={{
            width: '22px',
            marginBottom: '-0.1rem',
            marginRight: '0.1rem',
            color: '#C47F17',
          }}
        />

        <span>Endereço de entrega</span>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </ContainerForm>

      <ContainerPayment>
        <BsCurrencyDollar
          style={{
            width: '24px',
            height: '24px',
            marginBottom: '-0.1rem',
            color: '#8047F8',
          }}
        />
        <span>Pagamento</span>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        <ContainerCardPayment>
          <CardPayment>
            <BsCreditCard
              style={{
                width: '16px',
                height: '16px',
                color: '#8047F8',
              }}
            />
            CARTÃO DE CRÉDITO
          </CardPayment>
          <CardPayment>
            <BsBank2
              style={{
                width: '16px',
                height: '16px',
                color: '#8047F8',
              }}
            />
            CARTÃO DE DÉBITO
          </CardPayment>
          <CardPayment>
            <FaRegMoneyBillAlt
              style={{
                width: '16px',
                height: '16px',
                color: '#8047F8',
              }}
            />
            DINHEIRO
          </CardPayment>
        </ContainerCardPayment>
      </ContainerPayment>
    </ContainerMain>
  )
}

import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsCurrencyDollar, BsBank2 } from 'react-icons/bs'

import { useContext } from 'react'
import { Payment } from '../Payment'

import { UseContextCard } from '../../context/useCartContext'
import { ContainerPayment, ContainerTextPayment, MainContainerPayment } from './styles'


export function CardPaymentType() {
  const { typePayment, handlePayment } = useContext(UseContextCard)

  return (
    <MainContainerPayment>
      <ContainerTextPayment>
        <BsCurrencyDollar className="icon" />
        <h1>Pagamento</h1>
        <p>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </p>
      </ContainerTextPayment>
      <ContainerPayment>
        <Payment
          onClick={() => handlePayment('Cartão de Credito')}
          isActive={typePayment?.type === 'Cartão de Credito'}
        >
          <BsCurrencyDollar size={16} color="#8047F8" />
          CARTÃO DE CRÉDITO
        </Payment>
        <Payment
          onClick={() => handlePayment('Cartão de Debito')}
          isActive={typePayment?.type === 'Cartão de Debito'}
        >
          <BsBank2 size={16} color="#8047F8" />
          CARTÃO DE DÉBITO
        </Payment>
        <Payment
          onClick={() => handlePayment('Dinheiro')}
          isActive={typePayment?.type === 'Dinheiro'}
        >
          <FaRegMoneyBillAlt size={16} color="#8047F8" />
          DINHEIRO
        </Payment>
      </ContainerPayment>
    </MainContainerPayment>
  )
}

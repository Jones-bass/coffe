import { FiMapPin } from 'react-icons/fi'

import {
  ContainerMain,
  Title,
  ContainerConfirmed,
  ContainerForm,
  ImgContainer,
} from './styles'

import EntregaImg from '../../assets/illustration.png'
import { useContext } from 'react'
import { UseContextCard } from '../../context/useCartContext'

export function ConfirmedOrder() {
  const { address, typePayment } = useContext(UseContextCard)

  const { bairro, cidade, numero, rua, uf } = address

  return (
    <>
      <Title>
        <span>Uhu! Pedido confirmado</span>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <ContainerMain>
        <ContainerConfirmed>
          <ContainerForm>
            <FiMapPin size={16} color="#C47F17" />
            <span>
              Entrega em <strong>{`${rua}, ${numero}`}</strong>
              <br /> {`${bairro}, ${cidade} ${uf}`}
            </span>
          </ContainerForm>
          <ContainerForm>
            <FiMapPin size={16} color="#C47F17" />
            <span>
              Previsão de entrega <br />
              20 min - 30 min
            </span>
          </ContainerForm>
          <ContainerForm>
            <FiMapPin size={16} color="#C47F17" />
            <span>
              Pagamento na entrega
              <br /> {typePayment?.type}
            </span>
          </ContainerForm>
        </ContainerConfirmed>
        <ImgContainer>
          <img src={EntregaImg} alt="" />
        </ImgContainer>
      </ContainerMain>
    </>
  )
}

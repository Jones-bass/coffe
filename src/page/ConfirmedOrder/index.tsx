import { FiMapPin } from 'react-icons/fi'

import {
  ContainerMain,
  Title,
  ContainerConfirmed,
  ContainerForm,
  ImgContainer,
} from './styles'

import EntregaImg from '../../assets/illustration.png'

export function ConfirmedOrder() {
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
              Entrega na Rua Raimundo José dos Santos, n 1035
              <br /> centro - Tobias Barreto-SE
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
              <br /> Cartão de Crédito
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

import {
  ContainerMain,
  Title,
  ContainerConfirmed,
  ContainerForm,
  ImgContainer,
} from './styles'

import { Header } from '../../components/Header'
import { FiMapPin } from 'react-icons/fi'
import EntregaImg from '../../assets/illustration.png'

export function ConfirmedOrder() {
  return (
    <>
      <Header />
      <Title>
        <span>Uhu! Pedido confirmado</span>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <ContainerMain>
        <ContainerConfirmed>
          <ContainerForm>
            <FiMapPin
              style={{
                width: '22px',
                color: '#C47F17',
              }}
            />

            <p>
              Entrega na Rua Raimundo José dos Santos, n 1035
              <br /> centro - Tobias Barreto-SE
            </p>
          </ContainerForm>
          <ContainerForm>
            <FiMapPin
              style={{
                width: '22px',
                marginBottom: '-0.1rem',
                marginRight: '0.1rem',
                color: '#C47F17',
              }}
            />

            <p>
              Previsão de entrega <br />
              20 min - 30 min
            </p>
          </ContainerForm>
          <ContainerForm>
            <FiMapPin
              style={{
                width: '22px',
                marginBottom: '-0.1rem',
                marginRight: '0.1rem',
                color: '#C47F17',
              }}
            />

            <p>
              Pagamento na entrega
              <br /> Cartão de Crédito
            </p>
          </ContainerForm>
        </ContainerConfirmed>
        <ImgContainer>
          <img src={EntregaImg} alt="" />
        </ImgContainer>
      </ContainerMain>
    </>
  )
}

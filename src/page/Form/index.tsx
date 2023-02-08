import { FiMapPin } from 'react-icons/fi'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsCurrencyDollar, BsBank2 } from 'react-icons/bs'
import {
  ContainerMain,
  ContainerForm,
  ContainerPayment,
  ContainerCads,
  InputContainer,
  Container,
  ContainerText,
} from './styles'

import { Input } from '../../components/Input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IFormLogin } from '../../@types/FormLogin'
import { Payment } from '../../components/Payment'
import { TotalCoffeeContainer } from '../../components/TotalCoffeeContainer'

export function Form() {
  const [typePayment, setTypePayment] = useState<
    'creditCard' | 'debitCard' | 'money'
  >('creditCard')

  const { control } = useForm<IFormLogin>()

  return (
    <ContainerCads>
      <ContainerMain>
        <p>Complete seu pedido</p>
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

        <InputContainer>
          <form>
            <Input
              name="cep"
              className="cep"
              placeholder="Cep"
              control={control}
            />

            <Input
              name="rua"
              className="rua"
              placeholder="Rua"
              control={control}
            />

            <Input
              name="numero"
              className="numero"
              placeholder="Número"
              control={control}
            />

            <Input
              name="complemento"
              className="complemento"
              placeholder="Complemento"
              control={control}
            />

            <p>Opcional</p>

            <Input
              name="bairro"
              className="bairro"
              placeholder="Bairro"
              control={control}
            />

            <Input
              name="cidade"
              className="cidade"
              placeholder="Cidade"
              control={control}
            />

            <Input
              name="uf"
              className="uf"
              placeholder="Uf"
              control={control}
            />
          </form>
        </InputContainer>

        <Container>
          <ContainerText>
            <BsCurrencyDollar
              style={{
                width: '24px',
                height: '24px',
                color: '#8047F8',
              }}
            />
            <h1>Pagamento</h1>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </ContainerText>
          <ContainerPayment>
            <Payment
              onClick={() => setTypePayment('creditCard')}
              isActive={typePayment === 'creditCard'}
            >
              <BsCurrencyDollar size={16} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </Payment>
            <Payment
              onClick={() => setTypePayment('debitCard')}
              isActive={typePayment === 'debitCard'}
            >
              <BsBank2 size={16} color="#8047F8" />
              CARTÃO DE DÉBITO
            </Payment>
            <Payment
              onClick={() => setTypePayment('money')}
              isActive={typePayment === 'money'}
            >
              <FaRegMoneyBillAlt size={16} color="#8047F8" />
              DINHEIRO
            </Payment>
          </ContainerPayment>
        </Container>
      </ContainerMain>
      <TotalCoffeeContainer />
    </ContainerCads>
  )
}

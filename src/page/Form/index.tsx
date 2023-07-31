import { FiMapPin } from 'react-icons/fi'
import {
  ContainerMain,
  ContainerForm,
  ContainerCads,
  InputContainer,
  ContainerTotalCoffee,
} from './styles'

import { Input } from '../../components/Input'
import { ChangeEvent, useContext } from 'react'
import { FormProvider } from 'react-hook-form'
import { TotalCoffeeContainer } from '../../components/TotalCoffeeContainer'
import { useNavigate } from 'react-router-dom'
import { UseContextCard } from '../../context/useCartContext'
import {
  CreateUserData,
  useCreateUserFormValidation,
} from '../../utils/createUserFormValidation'
import { CardPaymentType } from '../../components/CardPaymentType'

export function Form() {
  const { handleSubmit, errors, createUserForm } = useCreateUserFormValidation()

  const { address, changeAddressByKey } = useContext(UseContextCard)

  const navigate = useNavigate()

  const handleOnSubmit = async (data: CreateUserData) => {
    try {
      console.log(data)
      navigate('/confirmacao')
    } catch (error) {
      alert('Ocorreu um erro ao fazer login, cheque as credenciais.')
    }
  }

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    changeAddressByKey(event)
  }

  return (
    <ContainerCads>
      <ContainerMain>
        <p>Complete seu pedido</p>
        <ContainerForm>
          <FiMapPin className="icon" />

          <span>Endereço de entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </ContainerForm>

        <InputContainer>
          <FormProvider {...createUserForm}>
            <form>
              <Input
                name="cep"
                className="cep"
                placeholder="Cep"
                errorMessage={errors?.cep?.message ?? ''}
                value={address.cep}
                onChange={handleChangeInput}
              />

              <Input
                name="rua"
                className="rua"
                placeholder="Rua"
                errorMessage={errors?.rua?.message ?? ''}
                onChange={handleChangeInput}
              />

              <Input
                name="numero"
                className="numero"
                placeholder="Número"
                errorMessage={errors?.numero?.message ?? ''}
                onChange={handleChangeInput}
              />

              <Input
                name="complemento"
                className="complemento"
                placeholder="Complemento"
                errorMessage={errors?.complemento?.message ?? ''}
                onChange={handleChangeInput}
              />

              <span className="opcional" >
                Opcional
              </span>

              <Input
                name="bairro"
                className="bairro"
                placeholder="Bairro"
                errorMessage={errors?.bairro?.message ?? ''}
                onChange={handleChangeInput}
              />

              <Input
                name="cidade"
                className="cidade"
                placeholder="Cidade"
                errorMessage={errors?.cidade?.message ?? ''}
                onChange={handleChangeInput}
              />

              <Input
                name="uf"
                className="uf"
                placeholder="Uf"
                errorMessage={errors?.uf?.message ?? ''}
                onChange={handleChangeInput}
              />
            </form>
          </FormProvider>
        </InputContainer>

        <CardPaymentType />

      </ContainerMain>
      <ContainerTotalCoffee>
        <TotalCoffeeContainer onSubmit={handleSubmit(handleOnSubmit)} />
      </ContainerTotalCoffee>
    </ContainerCads>
  )
}

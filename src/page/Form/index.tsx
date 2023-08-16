import { FiMapPin } from 'react-icons/fi'
import {
  ContainerMain,
  ContainerForm,
  ContainerCads,
  InputContainer,
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
                label='CEP'
                className="cep"
                errorMessage={errors?.cep?.message ?? ''}
                value={address.cep}
                onChange={handleChangeInput}
              />

              <Input
                name="rua"
                label='Rua'
                className="rua"
                errorMessage={errors?.rua?.message ?? ''}
                value={address.rua}
                onChange={handleChangeInput}
              />

              <Input
                name="numero"
                label='Número'
                className="numero"
                errorMessage={errors?.numero?.message ?? ''}
                value={address.numero}
                onChange={handleChangeInput}
              />

              <Input
                label='Complemento'
                name="complemento"
                className="complemento"
                errorMessage={errors?.complemento?.message ?? ''}
                value={address.complemento}
                onChange={handleChangeInput}
              />

              <span className="opcional" >
                Opcional
              </span>

              <Input
                label='Bairro'
                name="bairro"
                className="bairro"
                errorMessage={errors?.bairro?.message ?? ''}
                value={address.bairro}
                onChange={handleChangeInput}
              />

              <Input
                label='Cidade'
                name="cidade"
                className="cidade"
                errorMessage={errors?.cidade?.message ?? ''}
                value={address.cidade}
                onChange={handleChangeInput}
              />

              <Input
                label='Uf'
                name="uf"
                className="uf"
                errorMessage={errors?.uf?.message ?? ''}
                value={address.uf}
                onChange={handleChangeInput}
              />
            </form>
          </FormProvider>
        </InputContainer>

        <CardPaymentType />

      </ContainerMain>
        <TotalCoffeeContainer onSubmit={handleSubmit(handleOnSubmit)} />
    </ContainerCads>
  )
}

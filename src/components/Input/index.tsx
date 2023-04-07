/* eslint-disable no-undef */
import { Controller, Control } from 'react-hook-form'
import { IFormLogin } from '../../@types/FormLogin'
import { InputContainer, InputText } from './styles'

interface InputProps {
  name:
    | 'cep'
    | 'rua'
    | 'numero'
    | 'complemento'
    | 'opcional'
    | 'bairro'
    | 'cidade'
    | 'uf'
  className?: string
  control: Control<IFormLogin, any>
  placeholder: string
  type?: string
}

export function Input({ control, name, className, ...rest }: InputProps) {
  return (
    <>
      <InputContainer className={className}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputText
              {...rest}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
          )}
        />
      </InputContainer>
    </>
  )
}

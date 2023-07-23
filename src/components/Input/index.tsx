/* eslint-disable no-undef */

import { useFormContext } from 'react-hook-form'
import { InputContainer, InputText, ErrosText } from './styles'
import { InputHTMLAttributes } from 'react'
import { FiAlertCircle } from 'react-icons/fi'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  className?: string
  errorMessage: string
}

export function Input({ name, errorMessage, className, ...rest }: InputProps) {
  const { register } = useFormContext()

  return (
    <InputContainer className={className}>
      <InputText {...register(name)} {...rest} />
      {errorMessage && (
        <ErrosText title={errorMessage}>
          <FiAlertCircle size={20} color="#DB2151" />
        </ErrosText>
      )}
    </InputContainer>
  )
}

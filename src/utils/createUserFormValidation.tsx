import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

export const createUserSchema = z.object({
  rua: z.string().nonempty({
    message: 'Nome da rua é obrigatório',
  }),
  cep: z.string().nonempty({
    message: 'Informe o cep, ele é obrigatório',
  }),
  numero: z.string().nonempty({
    message: 'Número da residência é obrigatório',
  }),
  complemento: z.string().nonempty({
    message: 'Complemento é obrigatório',
  }),
  opcional: z.string().nonempty({
    message: 'Opcional é obrigatório',
  }),
  bairro: z.string().nonempty({
    message: 'Informe o bairro é obrigatório',
  }),
  cidade: z.string().nonempty({
    message: 'Nome da cidade é obrigatório',
  }),
  uf: z.string().nonempty({
    message: 'Uf é obrigatório',
  }),
})

export type CreateUserData = z.infer<typeof createUserSchema>

export function useCreateUserFormValidation() {
  const createUserForm = useForm<CreateUserData>({
    resolver: zodResolver(createUserSchema),
  })

  const {
    handleSubmit,
    formState: { errors },
  } = createUserForm

  return {
    createUserSchema,
    handleSubmit,
    createUserForm,
    errors,
  }
}

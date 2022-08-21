import { ContainerInput } from './styles'

import { ChangeEvent, useState } from 'react'

export function Input() {
  const [form, setForm] = useState('')

  function handleSubmit(event: any) {
    event.preventDefault()
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm(event.target.value)
  }

  return (
    <ContainerInput>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            width: '200px',
            height: '46px',
          }}
          type="cep"
          value={form}
          placeholder="Cep"
          onChange={handleChange}
        />
        <input
          style={{
            width: '600px',
            height: '46px',
          }}
          type="rua"
          value={form}
          placeholder="Rua"
          onChange={handleChange}
        />
        <input
          style={{
            width: '240px',
            height: '46px',
          }}
          type="numero"
          value={form}
          placeholder="Número"
          onChange={handleChange}
        />
        <input
          style={{
            width: '346px',
            height: '46px',
          }}
          type="complemento"
          value={form}
          placeholder="Complemento"
          onChange={handleChange}
        />
        <input
          style={{
            width: '240px',
            height: '46px',
          }}
          type="bairro"
          value={form}
          placeholder="Bairro"
          onChange={handleChange}
        />
        <input
          style={{
            width: '266px',
            height: '46px',
          }}
          type="cidade"
          value={form}
          placeholder="Cidade"
          onChange={handleChange}
        />
        <input
          style={{
            width: '67px',
            height: '46px',
          }}
          type="uf"
          value={form}
          placeholder="Uf"
          onChange={handleChange}
        />
      </form>
    </ContainerInput>
  )
}

import { ContainerInput } from './styles'

import { ChangeEvent, useState } from 'react'

export function Input() {
  const [formState, setFormState] = useState({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target
    setFormState({ ...formState, [id]: value })
  }

  return (
    <ContainerInput>
      <form>
        <input
          style={{
            width: '220px',
            height: '42px',
          }}
          id="cep"
          value={formState.cep}
          placeholder="Cep"
          onChange={handleChange}
        />
        <input
          style={{
            width: '546px',
            height: '42px',
          }}
          id="rua"
          value={formState.rua}
          placeholder="Rua"
          onChange={handleChange}
        />

        <input
          style={{
            width: '200px',
            height: '42px',
          }}
          id="numero"
          value={formState.numero}
          placeholder="Número"
          onChange={handleChange}
        />
        <input
          style={{
            width: '333px',
            height: '42px',
          }}
          id="complemento"
          value={formState.complemento}
          placeholder="Complemento"
          onChange={handleChange}
        />
        <input
          style={{
            width: '200px',
            height: '42px',
          }}
          id="bairro"
          value={formState.bairro}
          placeholder="Bairro"
          onChange={handleChange}
        />
        <input
          style={{
            width: '266px',
            height: '42px',
          }}
          id="cidade"
          value={formState.cidade}
          placeholder="Cidade"
          onChange={handleChange}
        />
        <input
          style={{
            width: '50px',
            height: '42px',
          }}
          id="uf"
          value={formState.uf}
          placeholder="Uf"
          onChange={handleChange}
        />
      </form>
    </ContainerInput>
  )
}

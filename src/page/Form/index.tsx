import { FormContainer, TextForm, ContainerInput } from './styles'
import { FiMapPin } from 'react-icons/fi'

import { Header } from '../../components/Header'

export function Form() {
  return (
    <>
      <Header />
      <FormContainer>
        <TextForm>
          <FiMapPin
            style={{
              height: '1.2rem',
              width: '1.2rem',
              marginBottom: '-0.1rem',
              marginRight: '0.2rem',
              color: '#C47F17',
            }}
          />
          <span>Endereço de entrega</span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </TextForm>
        <ContainerInput>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="CEP" />

          <input type="text" placeholder="CEP" />

          <input type="text" placeholder="CEP" />

          <input type="text" placeholder="CEP" />

          <input type="text" placeholder="CEP" />
        </ContainerInput>
      </FormContainer>
    </>
  )
}

/* eslint-disable react/jsx-key */
import {
  ContainerMain,
  ContainerCard,
  Cards,
  ImageCard,
  CardButton,
  ContainerButton,
} from './styles'
import { IoCartSharp } from 'react-icons/io5'
import ProductsList from './components/product'

export function ListCoffe() {
  return (
    <ContainerMain>
      <p>Complete seu pedido</p>
      <ContainerCard>
        {ProductsList.map((product) => (
          <Cards>
            <ImageCard>
              <img src={product.image} alt={product.name_product} />
            </ImageCard>
            <span>{product.category}</span>
            <h1>{product.name_product}</h1>
            <p>{product.description}</p>
            <CardButton>
              R$ <p>{product.price.toFixed(2)}</p>
              <ContainerButton>
                <button>- 1 +</button>
                <a href="/">
                  <IoCartSharp size={24} color="#fff" />
                </a>
              </ContainerButton>
            </CardButton>
          </Cards>
        ))}
      </ContainerCard>
    </ContainerMain>
  )
}

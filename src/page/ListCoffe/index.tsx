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
import ProductsList from './product'

export function ListCoffe() {
  return (
    <ContainerMain>
      <p>Complete seu pedido</p>
      <ContainerCard>
        {ProductsList.map((produto) => (
          <Cards>
            <ImageCard>
              <img src={produto.image} alt={produto.name_product} />
            </ImageCard>
            <span>{produto.name_product}</span>
            <h1>{produto.category}</h1>
            <p>{produto.description}</p>
            <CardButton>
              R$ <p>{`${produto.price}0`}</p>
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

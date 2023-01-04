/* eslint-disable react/jsx-key */
import {
  Cards,
  ImageCard,
  CardButton,
  ContainerButton,
  ButtonCar,
} from './styles'
import { IoCartSharp } from 'react-icons/io5'
import { Product } from '../../@types/product'

interface ProductsProps {
  product: Product
}

export function ListCoffe({ product }: ProductsProps) {
  return (
    <Cards>
      <ImageCard>
        <img src={product.image} alt={`Imagem ${product.title}`} />
      </ImageCard>

      <h1>{product.title}</h1>
      <p>{product.resume}</p>
      <CardButton>
        R$ <p>{product.price.toFixed(2)}</p>
        <ContainerButton>
          <button> - </button>
          <span>10</span>
          <button> + </button>
        </ContainerButton>
        <ButtonCar>
          <IoCartSharp size={24} color="#fff" />
        </ButtonCar>
      </CardButton>
    </Cards>
  )
}

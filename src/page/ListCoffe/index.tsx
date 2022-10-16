/* eslint-disable react/jsx-key */
import {
  Cards,
  ImageCard,
  CardButton,
  ContainerButton,
  ButtonCar,
} from './styles'
import { IoCartSharp } from 'react-icons/io5'

interface productsProps {
  image: string
  name: string
  category: string
  description: string
  price: number
}

export function ListCoffe({
  image,
  name,
  category,
  description,
  price,
}: productsProps) {
  return (
    <Cards>
      <ImageCard>
        <img src={image} alt={name} />
      </ImageCard>
      <span>{category}</span>
      <h1>{name}</h1>
      <p>{description}</p>
      <CardButton>
        R$ <p>{price.toFixed(2)}</p>
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

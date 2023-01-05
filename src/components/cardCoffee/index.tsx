import { useState } from 'react'

import {
  Cards,
  ImageCard,
  CardButton,
  ContainerButton,
  ButtonCar,
  CardTags,
} from './styles'
import { IoCartSharp } from 'react-icons/io5'
import { Product } from '../../@types/product'
import { RiSubtractFill, RiAddFill } from 'react-icons/ri'

interface ProductsProps {
  product: Product
}

export function CardCoffee({ product }: ProductsProps) {
  const [amount, setAmount] = useState(1)

  function handleIncrement() {
    setAmount((state) => state + 1)
  }

  function handleDecrement() {
    setAmount((state) => state - 1)
  }

  return (
    <Cards>
      <ImageCard>
        <img src={product.image} alt={product.title} />
      </ImageCard>

      <CardTags>
        {product.tags.map((item) => {
          return <span key={item}>{item}</span>
        })}
      </CardTags>

      <h1>{product.title}</h1>
      <p>{product.resume}</p>
      <CardButton>
        R$ <p>{product.price.toFixed(2)}</p>
        <ContainerButton>
          <button onClick={() => handleDecrement()} disabled={amount <= 1}>
            <RiSubtractFill size={16} />
          </button>

          <span>{amount}</span>
          <button onClick={() => handleIncrement()}>
            <RiAddFill size={16} />
          </button>
        </ContainerButton>
        <ButtonCar>
          <IoCartSharp size={24} color="#fff" />
        </ButtonCar>
      </CardButton>
    </Cards>
  )
}

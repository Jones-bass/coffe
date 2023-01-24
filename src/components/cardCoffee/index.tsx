import { useState } from 'react'

import {
  Cards,
  ImageCard,
  CardButton,
  ContainerButton,
  CardTags,
} from './styles'
import { IoCartSharp } from 'react-icons/io5'
import { RiSubtractFill, RiAddFill } from 'react-icons/ri'
import { useAuth } from '../../hooks/useAuth'
import { ProductFormat } from '../../page/Home'
import { Card } from '../../context/auth'
import { ButtonCart } from '../ButtonCart'

interface ProductsProps {
  product: ProductFormat
}

export function CardCoffee({ product }: ProductsProps) {
  const { card, addCard } = useAuth()

  const [amount, setAmount] = useState(1)

  function handleAddCard(product: Card) {
    const newProduct = {
      ...product,
      amount,
    }

    addCard(newProduct)
    setAmount(1)
    console.log(card)
  }

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
        <ButtonCart
          hoverVariant="purple"
          variant="purpleDark"
          onClick={() => handleAddCard(product)}
        >
          <IoCartSharp size={24} color="#fff" />
        </ButtonCart>
      </CardButton>
    </Cards>
  )
}

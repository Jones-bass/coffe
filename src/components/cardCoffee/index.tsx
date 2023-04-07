/* eslint-disable no-undef */
import { useContext, useEffect, useRef, useState } from 'react'

import {
  Cards,
  ImageCard,
  CardButton,
  ContainerButton,
  CardTags,
} from './styles'
import { IoCartSharp } from 'react-icons/io5'
import { RiSubtractFill, RiAddFill } from 'react-icons/ri'
import { ProductFormat } from '../../page/Home'
import { ButtonCart } from '../ButtonCart'
import { Card, UseContextCart } from '../../context/useCartContext'

interface ProductsProps {
  product: ProductFormat
}

export function CardCoffee({ product }: ProductsProps) {
  const { card, addCard } = useContext(UseContextCart)

  const [amount, setAmount] = useState(1)
  const [isVisible, setIsVisible] = useState(false)

  const containerRef = useRef(null)

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

  useEffect(() => {
    const threshold = 0.02

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold,
    }

    function callback(entries: IntersectionObserverEntry[]) {
      const [entry] = entries
      const { intersectionRatio } = entry

      if (intersectionRatio >= threshold) {
        setIsVisible(true)
      }
    }

    const observer = new IntersectionObserver(callback, options)
    if (containerRef?.current) {
      observer.observe(containerRef.current)
    }

    const containerRefCurrent = containerRef.current
    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent)
      }
    }
  }, [containerRef])

  return (
    <Cards isVisible={isVisible} ref={containerRef}>
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

import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import { Product } from '../@types/product'
import { priceFormatter } from '../utils/priceFormatter'

export interface IUseContextCartProvider {
  children: React.ReactNode
}

export interface Card extends Product {
  amount: number
}

interface CartFormatted extends Card {
  priceFormatted: string
  subTotal: string
}

interface IUseContextCart {
  addCard: (product: Card) => void
  priceFormattedAndSubTotal: CartFormatted[]
  removeCard: (id: number) => void
  updateAmount: (id: number, type: 'increment' | 'decrement') => void

  card: Card[]
}

export const UseContextCart = createContext<IUseContextCart>(
  {} as IUseContextCart,
)

export const UseCartContextProvider = ({
  children,
}: IUseContextCartProvider) => {
  const [card, setCard] = useState<Card[]>(() => {
    const storageCard = localStorage.getItem('@CoffeeDelivery')

    if (storageCard) {
      return JSON.parse(storageCard)
    }
    return []
  })

  const priceFormattedAndSubTotal = card.map((product) => ({
    ...product,
    priceFormatted: priceFormatter(product.price),
    subTotal: priceFormatter(product.price * product.amount),
  }))

  function addCard(product: Card) {
    const copyCard = [...card]

    const productIndex = copyCard.findIndex(
      (cardItem) => cardItem.id === product.id,
    )

    if (productIndex < 0) {
      copyCard.push(product)
      toast.success('Item adicinado no carrinho.')
    } else {
      copyCard[productIndex].amount += product.amount
    }

    setCard(copyCard)
    localStorage.setItem('@CoffeeDelivery', JSON.stringify(copyCard))
  }

  function updateAmount(id: number, type: 'increment' | 'decrement') {
    const cardCopy = [...card]
    const productIndex = cardCopy.findIndex((product) => product.id === id)

    if (productIndex >= 0) {
      const item = cardCopy[productIndex]
      cardCopy[productIndex].amount =
        type === 'increment' ? item.amount + 1 : item.amount - 1
    } else {
      throw Error()
    }

    setCard(cardCopy)
    localStorage.setItem('@Coffee:card', JSON.stringify(cardCopy))
  }

  function removeCard(id: number) {
    const copyCart = [...card]
    const productIndex = copyCart.findIndex((cartItem) => cartItem.id === id)

    if (productIndex >= 0) {
      copyCart.splice(productIndex, 1)
      setCard(copyCart)
      localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(copyCart))
    } else {
      throw Error()
    }
  }
  return (
    <UseContextCart.Provider
      value={{
        removeCard,
        addCard,
        card,
        priceFormattedAndSubTotal,
        updateAmount,
      }}
    >
      {children}
    </UseContextCart.Provider>
  )
}

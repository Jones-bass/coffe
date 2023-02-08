import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import { Product } from '../@types/product'
import { priceFormatter } from '../utils/priceFormatter'

export interface IAuthContextProviderProps {
  children: React.ReactNode
}

export interface Card extends Product {
  amount: number
}

interface CartFormatted extends Card {
  priceFormatted: string
  subTotal: string
}

interface IAuthContextCard {
  addCard: (product: Card) => void
  priceFormattedAndSubTotal: CartFormatted[]

  card: Card[]
}

export const AuthContext = createContext<IAuthContextCard>(
  {} as IAuthContextCard,
)

export const AuthContextProvider = ({
  children,
}: IAuthContextProviderProps) => {
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

  return (
    <AuthContext.Provider value={{ addCard, card, priceFormattedAndSubTotal }}>
      {children}
    </AuthContext.Provider>
  )
}

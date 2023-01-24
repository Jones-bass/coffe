import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'
import { Product } from '../@types/product'

export interface IAuthContextProviderProps {
  children: React.ReactNode
}

export interface Card extends Product {
  amount: number
}

interface IAuthContextCard {
  addCard: (product: Card) => void
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
    <AuthContext.Provider value={{ addCard, card }}>
      {children}
    </AuthContext.Provider>
  )
}

import React, { ChangeEvent, createContext, useState } from 'react'
import { toast } from 'react-toastify'
import { Product } from '../@types/product'
import { priceFormatter } from '../utils/priceFormatter'
import { IAddressType } from '../@types/FormLogin'

export interface IUseContextCardProvider {
  children: React.ReactNode
}

export interface Card extends Product {
  amount: number
}

interface CartFormatted extends Card {
  priceFormatted: string
  subTotal: string
}

interface IUseContextCard {
  address: IAddressType
  changeAddressByKey: (event: ChangeEvent<HTMLInputElement>) => void
  addCard: (product: Card) => void
  priceFormattedAndSubTotal: CartFormatted[]
  removeCard: (id: number) => void
  updateAmount: (id: number, type: 'increment' | 'decrement') => void

  card: Card[]
}

export const UseContextCard = createContext<IUseContextCard>(
  {} as IUseContextCard,
)

export const UseCartContextProvider = ({
  children,
}: IUseContextCardProvider) => {
  const [address, setAddress] = useState<IAddressType>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    opcional: '',
    bairro: '',
    cidade: '',
    uf: '',
  })

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

  function changeAddressByKey(event: ChangeEvent<HTMLInputElement>) {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [event.target.name]: event.target.value,
    }))
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
    localStorage.setItem('@CoffeeDelivery', JSON.stringify(cardCopy))
  }

  function removeCard(id: number) {
    const copyCard = [...card]
    const productIndex = copyCard.findIndex((cardItem) => cardItem.id === id)

    if (productIndex >= 0) {
      copyCard.splice(productIndex, 1)
      setCard(copyCard)
      localStorage.setItem('@CoffeeDelivery', JSON.stringify(copyCard))
    } else {
      throw Error()
    }
  }
  return (
    <UseContextCard.Provider
      value={{
        address,
        changeAddressByKey,
        removeCard,
        addCard,
        card,
        priceFormattedAndSubTotal,
        updateAmount,
      }}
    >
      {children}
    </UseContextCard.Provider>
  )
}

import { ContainerCoffe } from './slyles'
import { TotalCoffeeCard } from '../TotalCoffeeCard'

import { TotalCoffeeItems } from '../TotalCoffeeItems'
import { useContext } from 'react'
import { UseContextCard } from '../../context/useCartContext'

export function TotalCoffeeContainer() {
  const { card, priceFormattedAndSubTotal } = useContext(UseContextCard)

  const itemExists = card.length

  if (!itemExists) {
    return (
      <ContainerCoffe>
        <p>Seu carrinho está vazio</p>
      </ContainerCoffe>
    )
  }

  return (
    <>
      <ContainerCoffe>
        {priceFormattedAndSubTotal.map((item) => {
          return <TotalCoffeeCard key={item.id} item={item} />
        })}
        <TotalCoffeeItems />
      </ContainerCoffe>
    </>
  )
}

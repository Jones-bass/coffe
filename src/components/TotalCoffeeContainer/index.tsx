import { ContainerCoffe } from './slyles'
import { TotalCoffeeCard } from '../TotalCoffeeCard'

import { useAuth } from '../../hooks/useAuth'
import { TotalCoffeeItems } from '../TotalCoffeeItems'

export function TotalCoffeeContainer() {
  const { card, priceFormattedAndSubTotal } = useAuth()

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

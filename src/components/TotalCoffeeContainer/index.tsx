import { ContainerCoffe, ContainerCoffeEmpty } from './slyles'
import { TotalCoffeeCard } from '../TotalCoffeeCard'

import { TotalCoffeeItems } from '../TotalCoffeeItems'
import { useContext } from 'react'
import { UseContextCard } from '../../context/useCartContext'
import List from '../../assets/carrinho.png'

interface TotalCoffeeItemsProps {
  onSubmit: () => void
}

export function TotalCoffeeContainer({ onSubmit }: TotalCoffeeItemsProps) {
  const { card, priceFormattedAndSubTotal } = useContext(UseContextCard)

  const itemExists = card.length

  if (!itemExists) {
    return (

      <ContainerCoffeEmpty>
        <img src={List} alt="" />
        <p>
          Ops! seu carrinho está vazio 😔 <br />
        </p>
      </ContainerCoffeEmpty >
    )
  }

  return (
    <>
      <ContainerCoffe>
        {priceFormattedAndSubTotal.map((item) => {
          return <TotalCoffeeCard key={item.id} item={item} />
        })}
        <TotalCoffeeItems onSubmit={onSubmit} />
      </ContainerCoffe>
    </>
  )
}

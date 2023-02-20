import { useAuth } from '../../hooks/useAuth'
import { BiMinus, BiPlus } from 'react-icons/bi'

import { CardContaneirPayment, ContainerButton, CardPayment } from './styles'

interface CartFormatted {
  id: number
  price: number
  image: string
  title: string
  resume: string
  tags: string[]
  amount: number
  priceFormatted: string
  subTotal: string
}

interface CoffeeSelectedProps {
  item: CartFormatted
}
export function TotalCoffeeCard({ item }: CoffeeSelectedProps) {
  const { updateAmount } = useAuth()

  function handleIncrement(id: number) {
    updateAmount(id, 'increment')
  }

  function handleDecrement(id: number) {
    updateAmount(id, 'decrement')
  }
  return (
    <CardContaneirPayment>
      <img src={item.image} alt={item.title} />

      <CardPayment>
        <span>{item.title}</span>
        <ContainerButton>
          <button
            type="button"
            onClick={() => handleDecrement(item.id)}
            disabled={item.amount <= 1}
          >
            <BiMinus size={16} />
          </button>
          <input type="number" value={item.amount} readOnly />
          <button type="button" onClick={() => handleIncrement(item.id)}>
            <BiPlus size={16} />
          </button>
        </ContainerButton>
      </CardPayment>
      <p>{item.subTotal}</p>
    </CardContaneirPayment>
  )
}

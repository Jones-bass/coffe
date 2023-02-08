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
  return (
    <CardContaneirPayment>
      <img src={item.image} alt={item.title} />

      <CardPayment>
        <span>{item.title}</span>
        <ContainerButton>
          <button>- 1 +</button>
          <button>Remove</button>
        </ContainerButton>
      </CardPayment>
      <p>{item.subTotal}</p>
    </CardContaneirPayment>
  )
}

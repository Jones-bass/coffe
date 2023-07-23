import { ContainerConfirmList, Price, TotalValue } from './styles'

interface TotalCoffeeItemsProps {
  onSubmit: () => void
}

export function TotalCoffeeItems({ onSubmit }: TotalCoffeeItemsProps) {
  return (
    <ContainerConfirmList>
      <Price>
        <p>Total de itens </p>
        <p className="priceitem"></p>
      </Price>
      <Price>
        <p>Entrega</p>
        <p className="priceitem">R$ 3,50</p>
      </Price>
      <TotalValue>
        <p>Total</p>
        <p>R$</p>
      </TotalValue>

      <button onClick={onSubmit} type="submit">
        CONFIRMAR PEDIDO
      </button>
    </ContainerConfirmList>
  )
}

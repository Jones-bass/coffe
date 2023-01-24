import { ReactNode, MouseEventHandler } from 'react'
import { ContainerButton } from './styles'

interface IButtonCard {
  variant: 'purpleDark' | 'yellowLight'
  hoverVariant: 'purple' | 'inactive'
  children: ReactNode
  onClick?: MouseEventHandler
}

export function ButtonCart({
  variant,
  hoverVariant,
  children,
  onClick,
}: IButtonCard) {
  return (
    <ContainerButton
      variant={variant}
      hoverVariant={hoverVariant}
      onClick={onClick}
    >
      {children}
    </ContainerButton>
  )
}

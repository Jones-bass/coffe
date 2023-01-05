import { ReactNode } from 'react'
import { ContentIcon, IconVariant, Container } from './styles'

interface listOfQualitiesProps {
  text: string
  variant: IconVariant
  Icon: ReactNode
}

export function IconMenu({ text, variant, Icon }: listOfQualitiesProps) {
  return (
    <Container>
      <ContentIcon variant={variant}>{Icon}</ContentIcon>
      <p>{text}</p>
    </Container>
  )
}

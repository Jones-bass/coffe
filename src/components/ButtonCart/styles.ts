import styled from 'styled-components'

export interface IColorButtonProps {
  variant: 'purpleDark' | 'yellowLight'
  hoverVariant: 'purple' | 'inactive'
}

const colorButton = {
  purpleDark: '#8047F8',
  yellowLight: '#F1E9C9',
}

const hoverVariant = {
  purple: '#4B2995',
  inactive: null,
}

export const ContainerButton = styled.button<IColorButtonProps>`
  background-color: ${(props) => colorButton[props.variant]};
  width: 38px;
  height: 38px;
  border: none;
  margin-left: 5px;
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => hoverVariant[props.hoverVariant]};
  }
`

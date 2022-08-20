import styled from 'styled-components'

export const FormContainer = styled.main`
  background-color: ${(porps) => porps.theme.card};
  width: 640;
  height: 372;
  margin: 92px 120px 0 120px;
`
export const TextForm = styled.div`
  padding: 40px;
  font-size: 20px;

  font-family: 'Roboto', sans-serif;
  p {
    margin-left: 23px;
    font-size: 14px;
  }
`

export const ContainerInput = styled.div`
  display: grid;

  input {
    background-color: ${(porps) => porps.theme.button};
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(porps) => porps.theme.button};
    padding: 0 0.5rem;
    color: ${(porps) => porps.theme.button};
  }

  &:focus {
    box-shadow: none;
    border-color: ${(porps) => porps.theme.yellow};
  }

  &::placeholder {
    color: ${(porps) => porps.theme.button};
  }
`

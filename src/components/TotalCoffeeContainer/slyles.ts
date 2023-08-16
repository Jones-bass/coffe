import styled from 'styled-components'

export const ContainerCoffe = styled.div`
  margin-top: 5%;
  padding: 5%;
  background: ${(props) => props.theme.card};
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;

  @media (max-width: 720px) {
    width: 90%;
    margin: auto;
}
`

export const ContainerCoffeEmpty = styled.div`
  margin-top: 5%;

  align-items: center;
  justify-content: center;
  text-align: center;

  background: ${(props) => props.theme.card};
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;

  img {
    padding: 8%;
    width: 40%;
  }

 
`
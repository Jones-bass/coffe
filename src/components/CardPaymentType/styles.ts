import styled from 'styled-components'

export const ContainerPayment = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  gap: 1rem;
  font-size: 20px;

  font-family: 'Roboto';
  p {
    margin-left: 23px;
    font-size: 14px;
  }

  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const MainContainerPayment = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  max-width: 40rem;
  padding: 2.5rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.card};
`
export const ContainerTextPayment = styled.div`
  .icon {
    width: 24px;
    height: 24px;
    color: #8047f8;
  }
  display: grid;
  grid-template-columns: 2rem auto;
  grid-area: auto;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    grid-column: 2;
    font-size: 1rem;
    font-weight: normal;
    line-height: 130%;
    color: ${(props) => props.theme.title};
    margin-bottom: 0.125rem;
  }

  p {
    grid-column: 2;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme.title};
  }
`


import styled from 'styled-components'

export const ContainerMain = styled.main`
  margin: 32px 100px 0px 0px;

  > p {
    font-family: 'Baloo 2';
    font-size: 14px;
    background-color: ${(porps) => porps.theme.white};
    color: ${(porps) => porps.theme.subtitle};
  }
`
export const ContainerConfirmation = styled.div`
  background-color: ${(porps) => porps.theme.purple};
  padding: 40px;
  width: 448px;
  height: 498px;

  font-size: 20px;
  border-radius: 6px 44px 6px 44px;

  font-family: 'Roboto';
  p {
    margin-left: 23px;
    font-size: 14px;
  }
`
const Card = styled.div`
  background-color: ${(porps) => porps.theme.button};
  width: 368px;
  height: 80px;

  border-radius: 8px;
  font-size: 14px;

  font-family: 'Roboto';
`
export const CardPayment = styled(Card)`
  display: flex;

  align-items: center;
  text-align: center;

  justify-content: center;
  gap: 0.4rem;

  margin-top: 32px;

  > img {
    width: 64px;
  }
`

export const CardTotal = styled(Card)`
  align-items: center;

  margin-top: 32px;
  justify-content: space-between;

  tr {
    background-color: ${(porps) => porps.theme.yellow};
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

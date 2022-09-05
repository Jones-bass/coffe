import styled from 'styled-components'

export const ContainerMain = styled.main`
  margin: 32px 100px 0px 0px;
  flex-wrap: wrap;

  > p {
    font-family: 'Baloo 2';
    font-size: 14px;
    background-color: ${(porps) => porps.theme.white};
    color: ${(porps) => porps.theme.subtitle};
  }
`
const Card = styled.div`
  width: 368px;
  height: 80px;

  border-radius: 8px;
  font-size: 14px;

  font-family: 'Roboto';
`
export const ContainerConfirmation = styled.div`
  background-color: ${(porps) => porps.theme.card};
  padding: 40px;
  width: 448px;
  height: 498px;

  font-size: 20px;
  border-radius: 6px 44px 6px 44px;

  font-family: 'Roboto';
  > p {
    margin-left: 23px;
    font-size: 14px;
  }
`
export const CardContaneirPayment = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5px;
  margin-bottom: 10px;
  border: 10px 0px 0px 10px solid;

  > img {
    width: 64px;
    height: 64px;
  }

  > p {
    text-align: end;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
  }
`

export const CardPayment = styled.div`
  display: block;

  > span {
    font-size: 16px;
    font-family: 'Roboto';
  }
`
export const ContainerButton = styled.div`
  max-width: 100%;
  display: flex;

  button {
    width: 91px;
    height: 32px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background: ${(porps) => porps.theme.button};

    :hover {
      background: ${(porps) => porps.theme.hover};
    }
  }
`

export const CardTotal = styled(Card)`
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  align-items: center;
  text-align: left;
  justify-content: space-between;

  margin-top: 32px;
`

export const ButtonConfirmation = styled.button`
  width: 365px;
  height: 46px;
  border-radius: 8px;
  margin-top: 24px;

  border: none;
  cursor: pointer;
  background: ${(porps) => porps.theme.yellow};

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${(porps) => porps.theme.white};
  }

  :hover {
    background: ${(porps) => porps.theme.yellowDark};
    transition: background-color 0.2s;
  }
`

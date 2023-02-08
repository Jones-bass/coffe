import styled from 'styled-components'

export const ContainerMain = styled.main`
  margin-left: -10px;

  padding: 32px 0px 0px 0px;
  flex-wrap: wrap;

  > p {
    margin-left: 20px;

    font-family: 'Baloo 2';
    font-size: 14px;
    background-color: ${(porps) => porps.theme.background};
    color: ${(porps) => porps.theme.subtitle};
  }
`

export const ContainerConfirmation = styled.div`
  background-color: ${(porps) => porps.theme.card};
  margin-left: 20px;
  padding: 40px;
  width: 488px;
  height: 543px;

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

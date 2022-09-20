import styled from 'styled-components'

export const ContainerMain = styled.main`
  background-color: ${(porps) => porps.theme.card};
  width: 640;
  height: 591;
  margin: 32px 50px 0px 0px;
  flex-wrap: wrap;

  > p {
    font-family: 'Baloo 2';
    font-size: 14px;
    background-color: ${(porps) => porps.theme.white};
    color: ${(porps) => porps.theme.subtitle};
  }
`
export const ContainerForm = styled.div`
  padding: 40px;
  font-size: 20px;

  font-family: 'Roboto';
  p {
    margin-left: 23px;
    font-size: 14px;
  }
`
export const ContainerPayment = styled.div`
  padding: 40px;
  font-size: 20px;

  font-family: 'Roboto';
  p {
    margin-left: 23px;
    font-size: 14px;
  }
`

export const ContainerCardPayment = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`

export const CardPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  font-size: 12px;

  font-family: 'Roboto';

  border-radius: 8px;

  margin: 2px;
  width: 180px;
  height: 50px;
`

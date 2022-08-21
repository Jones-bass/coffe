import styled from 'styled-components'

export const ContainerMain = styled.main`
  background-color: ${(porps) => porps.theme.card};
  width: 640;
  height: 372;
  margin: 92px 120px 0 120px;
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
`

export const CardPayment = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 0.4rem;

  font-size: 14px;

  font-family: 'Roboto';

  border-radius: 8px;

  margin-top: 32px;
  width: 180px;
  height: 50px;
  background-color: ${(porps) => porps.theme.button};
`

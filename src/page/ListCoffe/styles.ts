import styled from 'styled-components'

export const ContainerMain = styled.main`
  margin: 32px 50px 0px 50px;
  flex-wrap: wrap;

  > p {
    font-family: 'Baloo 2';
    font-size: 14px;
    background-color: ${(porps) => porps.theme.white};
    color: ${(porps) => porps.theme.subtitle};
  }
`

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  max-width: 100%;

  background-color: ${(porps) => porps.theme.purple};
`
export const ImageCard = styled.image`
  position: absolute;
  margin: -120px 0px 0px -50px;
`
export const Cards = styled.div`
  width: 256px;
  height: 310px;
  padding: 100px 20px 0px 20px;
  margin: 30px 70px 20px 0px;

  text-align: center;

  border-radius: 6px 36px 6px 36px;
  background: ${(porps) => porps.theme.card};

  > span {
    display: flex;

    margin: 0px 60px 0px 60px;

    align-items: center;
    text-align: center;
    justify-content: center;

    font-family: 'Baloo 2';
    font-size: 14px;
    border-radius: 8px;

    background-color: ${(porps) => porps.theme.yellowLight};
    color: ${(porps) => porps.theme.yellowDark};
  }

  > h1 {
    margin-top: 16px;
    align-items: center;
    text-align: center;
    justify-content: center;

    font-family: 'Baloo 2';
    font-size: 20px;
  }

  > p {
    margin-top: 8px;
    align-items: center;
    text-align: center;
    justify-content: center;

    font-family: 'Roboto';
    font-size: 14px;
    color: ${(porps) => porps.theme.text};
  }
`

export const CardButton = styled.div`
  display: flex;
  margin-top: 35px;

  align-items: center;

  > p {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 24px;
    margin-left: 5px;
  }
`
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  gap: 15px;

  margin-left: 25px;

  > button {
    width: 72px;
    height: 38px;
    border-radius: 8px;
    border: none;

    background-color: ${(porps) => porps.theme.button};
  }

  > a {
    width: 38px;
    height: 38px;

    background-color: ${(porps) => porps.theme.purple};
    border-radius: 8px;
    padding: 6px;
    cursor: pointer;
  }
`

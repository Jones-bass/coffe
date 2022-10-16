import styled from 'styled-components'

export const Cards = styled.div`
  width: 256px;
  height: 310px;
  padding: 100px 20px 0px 20px;
  margin: 30px 52px 20px 0px;

  text-align: center;

  border-radius: 6px 36px 6px 36px;
  background: ${(porps) => porps.theme.card};

  > span {
    display: flex;

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

export const ImageCard = styled.image`
  position: absolute;
  margin: -120px 0px 0px -50px;
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 8px;

  background: ${(porps) => porps.theme.button};

  margin-left: 10px;

  > span {
    padding: 9px;

    align-items: center;
  }

  > button {
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: ${(porps) => porps.theme.button};
  }

  > button:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.yellow};
  }
`

export const ButtonCar = styled.button`
  width: 38px;
  height: 38px;
  border: none;
  margin-left: 5px;
  background-color: ${(porps) => porps.theme.purple};
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;
`

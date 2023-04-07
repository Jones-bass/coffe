import styled from 'styled-components'

interface PropsType {
  isVisible: boolean
}

export const Cards = styled.div<PropsType>`
  width: 256px;
  height: 310px;
  padding: 100px 20px 0px 20px;
  margin: 30px 52px 20px 0px;

  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '20%')});
  transition: 0.5s ease-out;

  text-align: center;

  border-radius: 6px 36px 6px 36px;
  background: ${(porps) => porps.theme.card};

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

  @media (max-width: 720px) {
    width: 196px;
    height: 270px;

    margin: 30px 10px 10px 0px;

    > h1 {
      margin-top: 10px;
      font-size: 16px;
    }

    > p {
      margin-top: 2px;
      font-size: 12px;
    }
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
  @media (max-width: 720px) {
    margin-top: 25px;
    margin-right: 0rem;

    > p {
      font-size: 20px;
    }
  }
`

export const ImageCard = styled.div`
  position: relative;
  margin: -120px 0px 0px 0px;

  @media (max-width: 720px) {
    margin: -130px 0px 0px 0px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 8px;

  background: ${(porps) => porps.theme.button};

  margin-left: 4px;

  > span {
    width: 2.5rem;
    padding: 0 0.3rem;
    font-size: 1rem;
    color: ${(props) => props.theme.title};
  }

  > button {
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: ${(porps) => porps.theme.button};
  }

  > button:hover {
    background-color: ${(props) => props.theme.yellowLight};
  }

  @media (max-width: 720px) {
    > span {
      width: 1rem;
    }

    > button {
      width: 25px;
      height: 37px;
    }
  }
`

export const CardTags = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  span {
    background: ${(props) => props.theme.yellowLight};
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
    color: ${(props) => props.theme.yellowDark};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  @media (max-width: 720px) {
    span {
      margin-top: 1rem;
      padding: 0.5rem 0.5rem;
    }
  }
`

import styled from 'styled-components'
import backgroundImage from '../../assets/Imagem.png'
import introImg from '../../assets/background.png'

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat center;
  background-size: contain;
`

export const HomeContainer = styled.section`
  background: red;
  background: url(${introImg}) no-repeat center;
  background-size: cover;
  display: flex;
  margin-top: 92px;
`

export const TextHome = styled.div`
  font-family: 'Baloo 2';
  font-size: 48px;
  color: ${(porps) => porps.theme.title};
  display: grid;

  p {
    font-family: 'Roboto', monospace;
    font-size: 20px;
  }

  @media (max-width: 720px) {
    font-size: 35px;
    p {
      font-size: 18px;
    }
  }
`
export const MenuConatainer = styled.div`
  padding: 0.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-top: 3rem;

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    padding: 0.5rem;
  }
`

export const ContainerCardMain = styled.div`
  margin-top: 5rem;

  > p {
    font-family: 'Baloo 2';
    font-size: 32px;
    background-color: ${(porps) => porps.theme.white};
    color: ${(porps) => porps.theme.title};
  }
`
export const ContainerCard = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

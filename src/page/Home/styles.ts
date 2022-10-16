import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  margin: 92px 36px 0px 0px;
`
export const LogoHome = styled.image`
  width: 456px;
  height: 340px;
  margin-left: 2rem;
`
export const TextHome = styled.text`
  font-family: 'Baloo 2';
  font-size: 48px;
  color: ${(porps) => porps.theme.title};
  display: grid;
  p {
    font-family: 'Roboto', monospace;
    font-size: 20px;
  }
`
export const MenuConatainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  max-width: 900px;
`
export const MenuItens = styled.div`
  display: flex;

  align-items: center;
  gap: 0.3rem;

  font-size: 14px;

  font-family: 'Roboto', monospace;

  img {
    width: 32px;
    height: 32px;
  }
`

export const CountContainer = styled.div``

export const ContainerCardMain = styled.div`
  margin-top: 5rem;

  > p {
    font-family: 'Baloo 2';
    font-size: 32px;
    background-color: ${(porps) => porps.theme.white};
    color: ${(porps) => porps.theme.title};
  }
`
export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 100%;
`

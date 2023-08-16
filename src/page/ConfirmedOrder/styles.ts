import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  padding: 5% 0px 0px 0px;
  display: flex;

  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Title = styled.div`
  margin: 80px 0px 0px 0px;

  span {
    font-size: 32px;
    color: ${(porps) => porps.theme.yellow};
    font-family: 'Baloo 2';
  }
  p {
    font-size: 20px;
    color: ${(porps) => porps.theme.title};
    font-family: 'Roboto';
  }
`
export const ContainerConfirmed = styled.section`
  width: 55%;
  height: 280px;

  border-radius: 6px 36px 6px 36px;
  background: ${(porps) => porps.theme.button};

  @media (max-width: 720px) {
    margin: 0 auto;
    width: 95%;
  }
`

export const ContainerForm = styled.div`
  display: flex;
  padding: 40px 0px 0px 40px;

  > span {
    font-size: 14px;
    font-family: 'Roboto';
  }
`

export const ImgContainer = styled.div`


  img {
    width: 100%;
    background-size: cover;
  }
`

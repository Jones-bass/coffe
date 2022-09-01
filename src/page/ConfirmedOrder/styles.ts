import styled from 'styled-components'

export const ContainerMain = styled.main`
  margin: 80px 100px 0px 100px;
  max-width: 100%;
  display: flex;
`

export const Title = styled.div`
  margin: 80px 100px 0px 100px;

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
  width: 526px;
  height: 293px;
  margin-top: 0px;

  border-radius: 6px 36px 6px 36px;
  background: ${(porps) => porps.theme.button};
`
export const ContainerForm = styled.div`
  display: flex;
  padding: 40px 0px 0px 40px;

  p {
    font-size: 16px;
    font-family: 'Roboto';
  }
`

export const ImgContainer = styled.div`
  padding: 0px 0px 0px 40px;

  img {
    width: 492px;
    height: 293px;
  }
`

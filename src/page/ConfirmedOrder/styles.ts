import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;
  max-width: 1120px;
  padding: 80px 0px 0px 0px;
  display: flex;
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
  width: 526px;
  height: 293px;
  margin-top: 0px;

  border-radius: 6px 36px 6px 36px;
  background: ${(porps) => porps.theme.button};
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
  padding: 0px 0px 0px 40px;

  img {
    width: 492px;
    height: 293px;
  }
`

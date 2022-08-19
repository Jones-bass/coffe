import styled from 'styled-components'

export const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  margin: 33px 120px 0 120px;
  justify-content: space-between;
`
export const HeaderLogo = styled.image`
  > img {
    width: 60;
    height: 90;
  }
`

export const HeaderInformation = styled.image`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 10px;
  > span {
    background-color: ${(porps) => porps.theme.purpleLight};
    border-radius: 8px;
    padding: 10px;
  }
  > a {
    background-color: ${(porps) => porps.theme.yellowLight};
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
  }
`

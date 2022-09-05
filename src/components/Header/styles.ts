import styled from 'styled-components'

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const HeaderLogo = styled.image`
  width: 60;
  height: 90;
`

export const HeaderInformation = styled.div`
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

  nav {
    display: flex;
    gap: 0.55rem;

    > a {
      background-color: ${(porps) => porps.theme.yellowLight};
      border-radius: 8px;
      padding: 8px;
      cursor: pointer;
    }
  }
`

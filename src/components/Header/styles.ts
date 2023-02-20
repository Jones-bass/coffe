import styled from 'styled-components'

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  max-width: 1134px;
  justify-content: space-between;
`
export const HeaderLogo = styled.div`
  width: 60;
  height: 90;
`

export const HeaderInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 8px;

  > span {
    background-color: ${(porps) => porps.theme.purpleLight};
    border-radius: 8px;
    justify-content: space-between;
    padding: 15px 20px 15px 20px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > a {
      background-color: ${(porps) => porps.theme.yellowLight};
      border-radius: 8px;
      padding: 8px;
      cursor: pointer;
    }
  }
`

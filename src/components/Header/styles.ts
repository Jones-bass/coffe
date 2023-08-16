import styled from 'styled-components'

export const HeaderContainer = styled.header`
  align-items: center;
  justify-content: space-between;

  display: flex;
  margin: auto;
  width: 100%;
`
export const HeaderLogo = styled.div``

export const HeaderInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 8px;

  > span {
    background-color: ${(porps) => porps.theme.purpleLight};
    border-radius: 8px;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.5rem;
    height: 40px;
    display: flex;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 14px;
      position: absolute;
      top: 75px;

      width: 15px;
      font-weight: bold;
      height: 15px;
      border-radius: 50%;
      background-color: ${(porps) => porps.theme.yellowDark};
      color: rgb(243, 241, 241);
      align-items: center;
      text-align: center;
    }

    > a {
      background-color: ${(porps) => porps.theme.button};
      border-radius: 8px;
      padding: 8px;
      cursor: pointer;
    }
  }
`

import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  align-items: center;
  display: flex;
  justify-content: space-between;

  margin: 32px 100px 32px 100px;
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
  > a {
    background-color: ${(porps) => porps.theme.yellowLight};
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
  }
`

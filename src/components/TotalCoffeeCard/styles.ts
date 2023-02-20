import styled from 'styled-components'

export const ContainerMain = styled.main`
  margin-left: -10px;

  padding: 32px 0px 0px 0px;

  flex-wrap: wrap;

  > p {
    margin-left: 20px;

    font-family: 'Baloo 2';
    font-size: 14px;
    background-color: ${(porps) => porps.theme.background};
    color: ${(porps) => porps.theme.subtitle};
  }
`

export const ContainerConfirmation = styled.div`
  background-color: ${(porps) => porps.theme.card};
  margin-left: 20px;
  padding: 40px;
  width: 488px;
  height: 543px;

  font-size: 20px;
  border-radius: 6px 44px 6px 44px;

  font-family: 'Roboto';
  > p {
    margin-left: 23px;
    font-size: 14px;
  }
`
export const CardContaneirPayment = styled.div`
  display: grid;
  max-width: 23rem;

  grid-template-columns: auto auto auto auto;
  grid-template-rows: auto auto;
  padding-bottom: 2.5rem;

  gap: 1rem;

  padding: 5px;
  margin-bottom: 10px;
  border: 10px 0px 0px 10px solid;

  > img {
    width: 64px;
    height: 64px;
    grid-row: 1 / 3;
    grid-column: 1 / 1;
  }

  > p {
    text-align: end;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 1rem;
  }
`

export const CardPayment = styled.div`
  gap: 0.5rem;

  > span {
    font-size: 14px;
    font-family: 'Roboto';
  }
`
export const ContainerButton = styled.div`
  grid-column: 2 / 2;
  background: ${(props) => props.theme.button};

  width: 4.5rem;
  padding: 0.563rem;
  border-radius: 0.375rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.125rem;

  input {
    width: 1.25rem;
    background: transparent;
    border: 0px solid transparent;
    padding: 0 0.3rem;
    font-size: 1rem;

    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.purple};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.3s;

    &:disabled {
      color: ${(props) => props.theme.label};
    }

    &:hover {
      background: ${(porps) => porps.theme.hover};
    }
  }
`

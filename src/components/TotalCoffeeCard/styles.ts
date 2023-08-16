import styled from 'styled-components'

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
  > span {
    font-size: 14px;
    font-family: 'Roboto';
  }
`

export const ButtonCardRemove = styled.button`
  padding: 0.563rem;
  border-radius: 0.375rem;
  border: 0;
  font-size: 0.75rem;
  background: ${(props) => props.theme.button};

  margin-left: 1rem;
  cursor: pointer;

  gap: 0.25rem;

  transition: 0.3s;
`

export const ContainerButton = styled.div`
  background: ${(props) => props.theme.button};

  width: 4.5rem;
  height: 2rem;
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
    background: ${(props) => props.theme.button};

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

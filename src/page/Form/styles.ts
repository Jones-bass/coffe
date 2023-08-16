import styled from 'styled-components'

export const InputContainer = styled.div`
  padding: 0 0 0 7%;

  form {
    display: grid;
    grid-template-columns: 25% 55% 12%;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;
    width: 95%;

    p {
      font-style: italic;
      font-size: 0.8rem;
      padding: 0rem 1rem;

      color: ${(props) => props.theme.text};

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  span {
    font-style: italic;

    font-size: 0.7rem;
  
    padding: 4px;

    border-radius: 8px;
    color: ${(props) => props.theme.label};
    background-color: ${(props) => props.theme.input};
    border: solid 1px ${(props) => props.theme.button};  
}

  .cep {
    grid-column: 1 / 4;
    width: 11rem;
  }


  .rua {
    grid-column: 1 / 4;
  }

  .numero {
    grid-column: 1 / 2;
  }
`

export const ContainerCads = styled.div`
  display: flex;

  @media (max-width: 720px) {
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ContainerMain = styled.main`
  background-color: ${(props) => props.theme.card};
  width: 64%;
  height: 39%;
  margin: 3% 5% 0px 0px;
  border-radius: 8px;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    width: 100%;
    height: 52%;
  }

  > p {
    font-family: 'Baloo 2';
    font-size: 14px;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.subtitle};
  }
`
export const ContainerForm = styled.div`
  .icon {
    width: 22px;
    margin-bottom: -0.1rem;
    margin-right: 0.1rem;
    color: #c47f17;
  }

  padding: 40px;
  font-size: 20px;

  font-family: 'Roboto';

  p {
    margin-left: 23px;
    font-size: 14px;
  }
`


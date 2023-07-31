import styled from 'styled-components'

export const InputContainer = styled.div`
  padding: 0 0 0 40px;

  form {
    display: grid;
    grid-template-columns: 12rem 17rem 3.5rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;
    width: 560px;
    height: 216px;

    @media (max-width: 720px) {
      row-gap: 0rem;
      width: 370px;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

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

  @media (max-width: 720px) {
    .cep {
      grid-column: 1/4;
    }

    .rua {
      grid-column: 1/4;
    }

    .numero {
      grid-column: 1/2;
    }

    .bairro {
      grid-column: 1/3;
    }

    .cidade {
      grid-column: 1/3;
    }
  }
`

export const ContainerCads = styled.div`
  display: flex;

  @media (max-width: 720px) {
    gap: 11.4rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ContainerMain = styled.main`
  background-color: ${(porps) => porps.theme.card};
  width: 640px;
  height: 395px;
  margin: 32px 50px 0px 0px;
  border-radius: 8px;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    width: 420px;
  }

  > p {
    font-family: 'Baloo 2';
    font-size: 14px;
    background-color: ${(porps) => porps.theme.background};
    color: ${(porps) => porps.theme.subtitle};
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
export const ContainerTotalCoffee = styled.div`
  @media (max-width: 720px) {
    margin-top: 12rem;
  }
`

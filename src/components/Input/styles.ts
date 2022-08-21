import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: flex;

  padding: 0px 40px 0px 40px;

  input {
    background-color: ${(porps) => porps.theme.button};
    grid-template-columns: 1fr 1fr;

    margin-bottom: 1rem;
    margin: 0.4rem;

    border-radius: 8px;
    border: none;

    color: ${(porps) => porps.theme.button};

    ::placeholder {
      color: ${(porps) => porps.theme.label};
      padding: 0.5rem;
    }
  }
`

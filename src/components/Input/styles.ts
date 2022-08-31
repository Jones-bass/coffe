import styled from 'styled-components'

export const ContainerInput = styled.section`
  padding: 0 0 0 40px;

  form {
    width: 560px;
    height: 216px;
  }

  input {
    background-color: ${(porps) => porps.theme.button};

    margin-bottom: 1rem;
    margin: 0.4rem;

    border-radius: 8px;
    border: none;

    color: ${(porps) => porps.theme.text};
    padding: 0.5rem;

    ::placeholder {
      color: ${(porps) => porps.theme.label};
      padding: 0.5rem;
    }
  }
`

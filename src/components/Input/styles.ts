import styled from 'styled-components'

export const InputContainer = styled.div`
  background-color: ${(props) => props.theme.input};
  border: solid 1px ${(props) => props.theme.button};

  height: 40px;
  border-radius: 8px;

  display: flex;
  align-items: center;
`

export const InputText = styled.input`
  background-color: transparent;
  margin-left: 10px;
  width: 100%;

  color: ${(props) => props.theme.text};

  border: none;

  :focus {
    outline: transparent;
    box-shadow: none;
  }
`

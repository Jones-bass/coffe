import styled from 'styled-components'
import Tooltip from '../Tooltip'

export const InputContainer = styled.div`
  background-color: ${(props) => props.theme.input};
  border: solid 1px ${(props) => props.theme.button};

  height: 40px;
  border-radius: 8px;

  display: flex;
  align-items: center;

  label {
    font-size: 0.85rem;
    color: ${(props) => props.theme.label};
    position: absolute;
    padding: 0 0.75rem;
    transition: 0.3s;
    pointer-events: none;
  }
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

  :focus-visible,
  :not([value='']) {
    + label {
      font-size: 0.75rem;
      transform: translate(-1px, calc(-100% - 0.25rem));
      border-radius: 4px 4px 0 0;
      border: 1px solid transparent;
      background-origin: border-box;
      background-clip: padding-box, border-box;
    }
  }


  :focus-visible {
    + label {
      background-image: linear-gradient(
        ${(props) => props.theme.input},
        ${(props) => props.theme.input}
        ),
        linear-gradient(
          ${(props) => props.theme.input} 60%,
          transparent 60%
        );
    }
  }

 
`



export const ErrosText = styled(Tooltip)`
  height: 20px;
  margin-right: 2px;
  cursor: pointer;

  svg {
    margin: 0px;
  }

  span {
    background: #db2151;
    color: #fff;

    &::before {
      border-color: #db2151 transparent;
    }
  }
`

import styled, { StyledComponent } from 'styled-components';


export const ButtonContainer : StyledComponent<'button', any, {}, never> = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
    
    &:disabled {
    cursor: not-allowed;
  }

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    
        
    }
`


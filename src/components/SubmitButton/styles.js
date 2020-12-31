import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px; 
  color: #fff; 
  height: 32px; 
  display: block; 
  width: 100%; 
  text-align: center;
  cursor: pointer; 
  transition: .3s; 

  &:hover { 
    background: #6E00C5; 
  }

  &[disabled] { 
    opacity: .3; 
  }
`